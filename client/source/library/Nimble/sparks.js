const Nimble = require(".")
const GameSparks = require("./gamesparks.js")
const Crypto = require("crypto-js")

const GAMESPARKS_API_KEY = "A354942pqu2s"
const GAMESPARKS_SECRET = "CSiwmNt2Dd7Vs9Y7Pgfl35onslKTU0A5"
const GAMESPARKS_CREDENTIALS_URI = require("./endpoints.js").GAMESPARKS_CREDENTIALS_URI

const Sparks = module.exports = {
    "isInitialized": false,
    "leaderboards": {},
    "sessionId": "one-and-only"
}

Sparks.initialize = function() {
    if(Sparks.isInitialized === true) {
        return Promise.resolve()
    }

    return Sparks.initiate().then(() => {
        return Sparks.authenticate().then(() => {
            Sparks.isInitialized = true
        })
    })
}

Sparks.initiate = function() {
    return new Promise((resolve, reject) => {
        GameSparks[Nimble.twitch.extension.state === "released" ? "initLive" : "initPreview"]({
            "key": GAMESPARKS_API_KEY,
            "secret": GAMESPARKS_SECRET,
            "onNonce": (nonce) => Sparks.onNonce(nonce),
            "onInit": (response) => resolve(response),
            "onError": (response) => reject(response),
            "onMessage": (message) => Sparks.onMessageCallback(message),
        })
    })
}

Sparks.onNonce = function(nonce) {
    return Promise.resolve(Crypto.enc.Base64.stringify(Crypto.HmacSHA256(nonce, GAMESPARKS_SECRET)))
}

// Logs in the given user, and if this
// is their first time, make an account
// for them. If this isn't their first time,
// make sure their user details are up to date.
// Returns a promise.
Sparks.authenticate = function() {
    return new Promise((resolve, reject) => {
        this.name = Nimble.twitch.viewer.name || "@" + Nimble.twitch.viewer.opaqueUserId
        this.username = Nimble.twitch.viewer.opaqueUserId
        this.password = Nimble.twitch.viewer.opaqueUserId
        GameSparks.authenticationRequest(this.password, this.username, (response) => {
            if(response.error !== undefined) {
                // Login failed because the user isn't registered? Register them.
                if(response.error["DETAILS"] === "UNRECOGNISED") {
                    GameSparks.registrationRequest(this.name, this.password, this.username, (response) => {
                        resolve(response)
                    })
                } else {
                    reject(response.error)
                }
            } else {
                if(Nimble.twitch.viewer.name !== response.displayName) {
                    GameSparks.changeUserDetailsRequest(this.name, function(response) {
                        resolve(response)
                    })
                } else {
                    resolve(response)
                }
            }
        })
    })
}

Sparks.onMessageCallbacks = []
Sparks.onMessage = function(callback) {
    Sparks.onMessageCallbacks.push(callback)
}

Sparks.onMessageCallback = function(message) {
    Sparks.onMessageCallbacks.forEach((callback) => {
        callback(message)
    })

    if(message["@class"] === ".NewHighScoreMessage"
    || message["@class"] === ".GlobalRankChangedMessage") {
        for(var leaderboardKey in Sparks.leaderboardCodes) {
            if(message.leaderboardShortCode === Sparks.leaderboardCodes[leaderboardKey]) {
                Sparks.retrieveLeaderboardEntries(leaderboardKey, Sparks.leaderboardCodes[leaderboardKey])
            }
        }
    }
}

Sparks.submitLeaderboardEntry = function(entry) {
    return new Promise(function(resolve, reject) {
        GameSparks.logLeaderboardEventRequest({
            "eventKey": "ActivityEvent",
            "channelId": Nimble.twitch.streamer.channelId,
            "sessionId": Nimble.sparks.sessionId,
            "score": entry.score || 0,
            "activity": entry.activity
        }, function(response) {
            if(response.error === undefined) {
                resolve(response)
            } else {
                reject(response)
            }
        })
    })
}

const LEADERBOARD_AROUND_ME_ENTRIES_COUNT = 2
const LEADERBOARD_TOP_ENTRIES_COUNT = 9

Sparks.leaderboardCodes = {}
Sparks.listenToLeaderboard = function(leaderboardKey, leaderboardCode) {
    Sparks.leaderboardCodes[leaderboardKey] = leaderboardCode
    Sparks.retrieveLeaderboardEntries(leaderboardKey, leaderboardCode)
}

Sparks.retrieveLeaderboardEntries = function(leaderboardKey, leaderboardCode) {
    return GameSparks.aroundMeLeaderboardRequest({
        "leaderboardShortCode": leaderboardCode,
        "count": LEADERBOARD_AROUND_ME_ENTRIES_COUNT,
        "includeFirst": LEADERBOARD_TOP_ENTRIES_COUNT,
    }).then((response) => {
        return {
            "top": response.first.map(toEntry),
            "around": response.data.map(toEntry)
        }
    }).catch((response) => {
        if(response.error !== undefined) {
            // If the leaderboard is brand new, the servers will
            // return "INVALID", which we want to handle as if it
            // was an empty leaderboard.
            // https://api.gamesparks.net/#aroundmeleaderboardrequest
            if(response.error.leaderboardShortCode === "INVALID") {
                return {
                    "top": [],
                    "around": []
                }
            }

            // If the user hasn't yet submitted a score for us to
            // find scores around, the servers will return "NO_ENTRY",
            // which we want to handle with a fallback to just the
            // top scores.
            // https://api.gamesparks.net/#aroundmeleaderboardrequest
            if(response.error.leaderboardShortCode === "NO_ENTRY"
            || response.error.authentication === "NOTAUTHORIZED") {
                return Sparks.retrieveTopLeaderboardEntries(leaderboardCode).then((top) => {
                    return {
                        "top": top,
                        "around": []
                    }
                })
            }
        }
    }).then((entries) => {
        Nimble.sparks.leaderboards[leaderboardKey + "/" + "around"] = entries.around
        Nimble.sparks.leaderboards[leaderboardKey + "/" + "top"] = entries.top
    })
}

Sparks.retrieveTopLeaderboardEntries = function(leaderboardCode, offset) {
    return new Promise(function(resolve, reject) {
        GameSparks.leaderboardDataRequestCustom(LEADERBOARD_TOP_ENTRIES_COUNT, leaderboardCode, offset, function(response) {
            if(response.error === undefined) {
                resolve(response.data.map(toEntry))
            } else {
                reject(response)
            }
        })
    })
}

function toEntry(entry) {
    return {
        "rank": entry.rank,
        "name": entry.userName,
        "activity": entry.activity,
        "channelId": entry.channelId,
        "gamesparksUserId": entry.userId,
        "score": entry["score"] || entry["MAX-score"],
    }
}

// This method will return LEADERBOARDSHORTCODE = INVALID if no scores have been submitted yet.
// Might return NO_ENTRY if there isn't anything around this user!!
