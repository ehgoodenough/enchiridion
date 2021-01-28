// Downloaded from their bitbucket, and forked with some changes.
// They say they'll be releasing an entirely new JS SDK soon.
// But until then, we'll just keep using this super outdated version.

// Changes made:
// - Made it work with Webpack
// - Added some custom SDK calls
// - Refactored calls to `window.gamesparks` to `this`
// - Extended `handshake` to support promised `onNonce`

const WebSocket = window.WebSocket

const GameSparks = function() {}

GameSparks.prototype = {

    init: function(options) {
        this.options = options
        this.socketUrl = options.url

        this.pendingRequests = {}
        this.requestCounter = 0

        this.connect()
    },

    buildServiceUrl: function(live, options) {
        var stage
        var urlAddition = options.key
        var credential
        var index

        if (live) {
            stage = "live"
        } else {
            stage = "preview"
        }

        if (!options.credential || options.credential.length === 0) {
            credential = "device"
        } else {
            credential = options.credential
        }

        if (options.secret) {
            index = options.secret.indexOf(":")
            if (index > 0) {
                credential = "secure"

                urlAddition = options.secret.substr(0, index) + "/" + urlAddition
            }
        }

        return "wss://" + stage + "-" + urlAddition + ".ws.gamesparks.net/ws/" + credential + "/" + urlAddition
    },

    initPreview: function(options) {
        options.url = this.buildServiceUrl(false, options)
        this.init(options)
    },

    initLive: function(options) {
        options.url = this.buildServiceUrl(true, options)
        this.init(options)
    },

    reset: function() {
        this.initialised = false
        this.connected = false
        this.error = false
        this.disconnected = false

        if(!!this.webSocket) {
            this.webSocket.onclose = null
            this.webSocket.close()
        }
    },

    connect: function() {
        this.reset()

        try {
            this.webSocket = new WebSocket(this.socketUrl)
            this.webSocket.onopen = this.onWebSocketOpen.bind(this)
            this.webSocket.onclose = this.onWebSocketClose.bind(this)
            this.webSocket.onerror = this.onWebSocketError.bind(this)
            this.webSocket.onmessage = this.onWebSocketMessage.bind(this)
        } catch(e) {
            this.log(e.message)
        }
    },

    disconnect: function() {
        if (this.webSocket && this.connected) {
            this.disconnected = true
            this.webSocket.close()
        }
    },

    onWebSocketOpen: function(ev) {
        this.log("WebSocket onOpen")

        if (this.options.onOpen) {
            this.options.onOpen(ev)
        }

        this.connected = true
    },

    onWebSocketClose: function(ev) {
        this.log("WebSocket onClose")

        if (this.options.onClose) {
            this.options.onClose(ev)
        }

        this.connected = false

        // Attemp a re-connection if not in error state or deliberately disconnected.
        if (!this.error && !this.disconnected) {
            this.connect()
        }
    },

    onWebSocketError: function(ev) {

        this.log("WebSocket onError: Sorry, but there is some problem with your socket or the server is down")

        if (this.options.onError) {
            this.options.onError(ev)
        }

        // Reset the socketUrl to the original.
        this.socketUrl = this.options.url

        this.error = true
    },

    onWebSocketMessage: function(message) {
        this.log("WebSocket onMessage: " + message.data)

        var result
        try {
            result = JSON.parse(message.data)
        } catch (e) {
            this.log("An error ocurred while parsing the JSON Data: " + message + "; Error: " + e)
            return
        }

        if (this.options.onMessage) {
            this.options.onMessage(result)
        }

        // Extract any auth token.
        if (result["authToken"]) {
            this.authToken = result["authToken"]
            delete result["authToken"]
        }

        if (result["connectUrl"]) {
            // Any time a connectUrl is in the response we should update and reconnect.
            this.socketUrl = result["connectUrl"]
            this.connect()
        }

        var resultType = result["@class"]

        if (resultType === ".AuthenticatedConnectResponse") {
            this.handshake(result)
        } else if (resultType.match(/Response$/)) {
            if (result["requestId"]) {
                var requestId = result["requestId"]
                delete result["requestId"]

                if (this.pendingRequests[requestId]) {
                    this.pendingRequests[requestId](result)
                    this.pendingRequests[requestId] = null
                }
            }
        }

    },

    handshake: function(result) {

        if (result["nonce"]) {
            // if (this.options.onNonce) {
            //     hmac = this.options.onNonce(result["nonce"])
            // } else if (this.options.secret) {
            //     hmac = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(result["nonce"], this.options.secret))
            // }

            this.options.onNonce(result["nonce"]).then((hmac) => {
                var toSend = {
                    "@class": ".AuthenticatedConnectRequest",
                    "hmac": hmac
                }

                if (this.authToken) {
                    toSend.authToken = this.authToken
                }

                if (this.sessionId) {
                    toSend.sessionId = this.sessionId
                }

                const browserData = this.getBrowserData()
                toSend.platform = browserData.browser
                toSend.os = browserData.operatingSystem

                this.webSocketSend(toSend)
            })

        } else if (result["sessionId"]) {
            this.sessionId = result["sessionId"]
            this.initialised = true

            if (this.options.onInit) {
                this.options.onInit()
            }

            this.keepAliveInterval = window.setInterval(this.keepAlive.bind(this), 30000)
        }
    },

    keepAlive: function() {
        if (this.initialised && this.connected) {
            this.webSocket.send(" ")
        }
    },

    send: function(requestType, onResponse) {
        this.sendWithData(requestType, {}, onResponse)
    },

    sendWithData: function(requestType, json, onResponse) {
        if (!this.initialised) {
            onResponse({ error: "NOT_INITIALISED" })
            return
        }

        // Ensure requestType starts with a dot.
        if (requestType.indexOf(".") !== 0) {
            requestType = "." + requestType
        }

        json["@class"] = requestType

        json.requestId = (new Date()).getTime() + "_" + (++this.requestCounter)

        if(!!onResponse) {
            this.pendingRequests[json.requestId] = onResponse
            // Time out handler.
            setTimeout((function() {
                if (this.pendingRequests[json.requestId]) {
                    this.pendingRequests[json.requestId]({ error: "NO_RESPONSE" })
                }
            }).bind(this), 32000)
        }

        this.webSocketSend(json)
    },

    webSocketSend: function(data) {

        if (this.options.onSend) {
            this.options.onSend(data)
        }

        var requestString = JSON.stringify(data)
        this.log("WebSocket send: " + requestString)
        this.webSocket.send(requestString)
    },

    getSocketUrl: function() {
        return this.socketUrl
    },

    getSessionId: function() {
        return this.sessionId
    },

    getAuthToken: function() {
        return this.authToken
    },

    setAuthToken: function(authToken) {
        this.authToken = authToken
    },

    isConnected: function() {
        return this.connected
    },

    log: function(message) {
        if (this.options.logger) {
            this.options.logger(message)
        }
    },

    getBrowserData: function() {

        var browsers = [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            {
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ]

        var operatingSystems = [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

        function searchForIdentity(data) {
            for (var i = 0; i < data.length; i++) {
                var string = data[i].string
                var prop = data[i].prop

                if (string) {
                    // Look for the sub string in the string.
                    if (string.indexOf(data[i].subString) !== -1) {
                        return data[i].identity
                    }
                } else if (prop) {
                    return data[i].identity
                }
            }
        }

        return {
            browser: searchForIdentity(browsers),
            operatingSystem: searchForIdentity(operatingSystems)
        }
    }
}

GameSparks.prototype.acceptChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("AcceptChallengeRequest", request, onResponse)
}
GameSparks.prototype.accountDetailsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("AccountDetailsRequest", request, onResponse)
}
GameSparks.prototype.analyticsRequest = function(data, end, key, start, onResponse ) {
    var request = {}
    request["data"] = data
    request["end"] = end
    request["key"] = key
    request["start"] = start
    this.sendWithData("AnalyticsRequest", request, onResponse)
}
GameSparks.prototype.authenticationRequest = function(password, userName, onResponse ) {
    var request = {}
    request["password"] = password
    request["userName"] = userName
    this.sendWithData("AuthenticationRequest", request, onResponse)
}
GameSparks.prototype.buyVirtualGoodsRequest = function(currencyType, quantity, shortCode, onResponse ) {
    var request = {}
    request["currencyType"] = currencyType
    request["quantity"] = quantity
    request["shortCode"] = shortCode
    this.sendWithData("BuyVirtualGoodsRequest", request, onResponse)
}
GameSparks.prototype.changeUserDetailsRequest = function(displayName, onResponse ) {
    var request = {}
    request["displayName"] = displayName
    this.sendWithData("ChangeUserDetailsRequest", request, onResponse)
}
GameSparks.prototype.chatOnChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("ChatOnChallengeRequest", request, onResponse)
}
GameSparks.prototype.consumeVirtualGoodRequest = function(quantity, shortCode, onResponse ) {
    var request = {}
    request["quantity"] = quantity
    request["shortCode"] = shortCode
    this.sendWithData("ConsumeVirtualGoodRequest", request, onResponse)
}
GameSparks.prototype.createChallengeRequest = function(accessType, challengeMessage, challengeShortCode, currency1Wager, currency2Wager, currency3Wager, currency4Wager, currency5Wager, currency6Wager, endTime, expiryTime, maxAttempts, maxPlayers, minPlayers, silent, startTime, usersToChallenge, onResponse ) {
    var request = {}
    request["accessType"] = accessType
    request["challengeMessage"] = challengeMessage
    request["challengeShortCode"] = challengeShortCode
    request["currency1Wager"] = currency1Wager
    request["currency2Wager"] = currency2Wager
    request["currency3Wager"] = currency3Wager
    request["currency4Wager"] = currency4Wager
    request["currency5Wager"] = currency5Wager
    request["currency6Wager"] = currency6Wager
    request["endTime"] = endTime
    request["expiryTime"] = expiryTime
    request["maxAttempts"] = maxAttempts
    request["maxPlayers"] = maxPlayers
    request["minPlayers"] = minPlayers
    request["silent"] = silent
    request["startTime"] = startTime
    request["usersToChallenge"] = usersToChallenge
    this.sendWithData("CreateChallengeRequest", request, onResponse)
}
GameSparks.prototype.declineChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("DeclineChallengeRequest", request, onResponse)
}
GameSparks.prototype.deviceAuthenticationRequest = function(deviceId, deviceModel, deviceName, deviceOS, deviceType, operatingSystem, onResponse ) {
    var request = {}
    request["deviceId"] = deviceId
    request["deviceModel"] = deviceModel
    request["deviceName"] = deviceName
    request["deviceOS"] = deviceOS
    request["deviceType"] = deviceType
    request["operatingSystem"] = operatingSystem
    this.sendWithData("DeviceAuthenticationRequest", request, onResponse)
}
GameSparks.prototype.dismissMessageRequest = function(messageId, onResponse ) {
    var request = {}
    request["messageId"] = messageId
    this.sendWithData("DismissMessageRequest", request, onResponse)
}
GameSparks.prototype.endSessionRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("EndSessionRequest", request, onResponse)
}
GameSparks.prototype.facebookConnectRequest = function(accessToken, code, onResponse ) {
    var request = {}
    request["accessToken"] = accessToken
    request["code"] = code
    this.sendWithData("FacebookConnectRequest", request, onResponse)
}
GameSparks.prototype.findChallengeRequest = function(accessType, count, offset, onResponse ) {
    var request = {}
    request["accessType"] = accessType
    request["count"] = count
    request["offset"] = offset
    this.sendWithData("FindChallengeRequest", request, onResponse)
}
GameSparks.prototype.getChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("GetChallengeRequest", request, onResponse)
}
GameSparks.prototype.getDownloadableRequest = function(shortCode, onResponse ) {
    var request = {}
    request["shortCode"] = shortCode
    this.sendWithData("GetDownloadableRequest", request, onResponse)
}
GameSparks.prototype.getMessageRequest = function(messageId, onResponse ) {
    var request = {}
    request["messageId"] = messageId
    this.sendWithData("GetMessageRequest", request, onResponse)
}
GameSparks.prototype.getRunningTotalsRequest = function(friendIds, shortCode, onResponse ) {
    var request = {}
    request["friendIds"] = friendIds
    request["shortCode"] = shortCode
    this.sendWithData("GetRunningTotalsRequest", request, onResponse)
}
GameSparks.prototype.getUploadUrlRequest = function(uploadData, onResponse ) {
    var request = {}
    request["uploadData"] = uploadData
    this.sendWithData("GetUploadUrlRequest", request, onResponse)
}
GameSparks.prototype.getUploadedRequest = function(uploadId, onResponse ) {
    var request = {}
    request["uploadId"] = uploadId
    this.sendWithData("GetUploadedRequest", request, onResponse)
}
GameSparks.prototype.googlePlayBuyGoodsRequest = function(currencyCode, signature, signedData, subUnitPrice, onResponse ) {
    var request = {}
    request["currencyCode"] = currencyCode
    request["signature"] = signature
    request["signedData"] = signedData
    request["subUnitPrice"] = subUnitPrice
    this.sendWithData("GooglePlayBuyGoodsRequest", request, onResponse)
}
GameSparks.prototype.iOSBuyGoodsRequest = function(currencyCode, receipt, sandbox, subUnitPrice, onResponse ) {
    var request = {}
    request["currencyCode"] = currencyCode
    request["receipt"] = receipt
    request["sandbox"] = sandbox
    request["subUnitPrice"] = subUnitPrice
    this.sendWithData("IOSBuyGoodsRequest", request, onResponse)
}
GameSparks.prototype.joinChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("JoinChallengeRequest", request, onResponse)
}
GameSparks.prototype.leaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["entryCount"] = entryCount
    request["friendIds"] = friendIds
    request["leaderboardShortCode"] = leaderboardShortCode
    request["offset"] = offset
    request["social"] = social
    this.sendWithData("LeaderboardDataRequest", request, onResponse)
}
GameSparks.prototype.aroundMeLeaderboardRequest = function(request, onResponse) {
    return new Promise((resolve, reject) => {
        this.sendWithData("AroundMeLeaderboardRequest", request, (response) => {
            if(response.error === undefined) {
                resolve(response)
            } else {
                reject(response)
            }
        })
    })
}
GameSparks.prototype.leaderboardDataRequestCustom = function(entryCount, leaderboardShortCode, offset, onResponse) {
    var request = {}
    request["entryCount"] = entryCount
    request["leaderboardShortCode"] = leaderboardShortCode
    request["offset"] = offset
    this.sendWithData("LeaderboardDataRequest", request, onResponse)
}
GameSparks.prototype.listAchievementsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListAchievementsRequest", request, onResponse)
}
GameSparks.prototype.listChallengeRequest = function(entryCount, offset, shortCode, state, onResponse ) {
    var request = {}
    request["entryCount"] = entryCount
    request["offset"] = offset
    request["shortCode"] = shortCode
    request["state"] = state
    this.sendWithData("ListChallengeRequest", request, onResponse)
}
GameSparks.prototype.listChallengeTypeRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListChallengeTypeRequest", request, onResponse)
}
GameSparks.prototype.listGameFriendsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListGameFriendsRequest", request, onResponse)
}
GameSparks.prototype.listInviteFriendsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListInviteFriendsRequest", request, onResponse)
}
GameSparks.prototype.listLeaderboardsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListLeaderboardsRequest", request, onResponse)
}
GameSparks.prototype.listMessageRequest = function(entryCount, offset, onResponse ) {
    var request = {}
    request["entryCount"] = entryCount
    request["offset"] = offset
    this.sendWithData("ListMessageRequest", request, onResponse)
}
GameSparks.prototype.listMessageSummaryRequest = function(entryCount, offset, onResponse ) {
    var request = {}
    request["entryCount"] = entryCount
    request["offset"] = offset
    this.sendWithData("ListMessageSummaryRequest", request, onResponse)
}
GameSparks.prototype.listVirtualGoodsRequest = function(onResponse ) {
    var request = {}
    this.sendWithData("ListVirtualGoodsRequest", request, onResponse)
}
GameSparks.prototype.logChallengeEventRequest = function(challengeInstanceId, eventKey, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["eventKey"] = eventKey
    this.sendWithData("LogChallengeEventRequest", request, onResponse)
}
GameSparks.prototype.logLeaderboardEventRequest = function(leaderboardEvent, onResponse) {
    var request = leaderboardEvent
    this.sendWithData("LogEventRequest", request, onResponse)
}
GameSparks.prototype.logEventRequest = function(eventKey, onResponse ) {
    var request = {}
    request["eventKey"] = eventKey
    this.sendWithData("LogEventRequest", request, onResponse)
}
GameSparks.prototype.pushRegistrationRequest = function(deviceOS, pushId, onResponse ) {
    var request = {}
    request["deviceOS"] = deviceOS
    request["pushId"] = pushId
    this.sendWithData("PushRegistrationRequest", request, onResponse)
}
GameSparks.prototype.registrationRequest = function(displayName, password, userName, onResponse ) {
    var request = {}
    request["displayName"] = displayName
    request["password"] = password
    request["userName"] = userName
    this.sendWithData("RegistrationRequest", request, onResponse)
}
GameSparks.prototype.sendFriendMessageRequest = function(friendIds, message, onResponse ) {
    var request = {}
    request["friendIds"] = friendIds
    request["message"] = message
    this.sendWithData("SendFriendMessageRequest", request, onResponse)
}
GameSparks.prototype.socialLeaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["entryCount"] = entryCount
    request["friendIds"] = friendIds
    request["leaderboardShortCode"] = leaderboardShortCode
    request["offset"] = offset
    request["social"] = social
    this.sendWithData("SocialLeaderboardDataRequest", request, onResponse)
}
GameSparks.prototype.twitterConnectRequest = function(accessSecret, accessToken, onResponse ) {
    var request = {}
    request["accessSecret"] = accessSecret
    request["accessToken"] = accessToken
    this.sendWithData("TwitterConnectRequest", request, onResponse)
}
GameSparks.prototype.windowsBuyGoodsRequest = function(currencyCode, receipt, subUnitPrice, onResponse ) {
    var request = {}
    request["currencyCode"] = currencyCode
    request["receipt"] = receipt
    request["subUnitPrice"] = subUnitPrice
    this.sendWithData("WindowsBuyGoodsRequest", request, onResponse)
}
GameSparks.prototype.withdrawChallengeRequest = function(challengeInstanceId, message, onResponse ) {
    var request = {}
    request["challengeInstanceId"] = challengeInstanceId
    request["message"] = message
    this.sendWithData("WithdrawChallengeRequest", request, onResponse)
}

module.exports = new GameSparks()
