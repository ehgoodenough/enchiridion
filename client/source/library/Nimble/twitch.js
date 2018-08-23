const TWITCH_USER_URI = require("./endpoints.js").TWITCH_USER_URI
const TWITCH_CHANNEL_URI = require("./endpoints.js").TWITCH_CHANNEL_URI

let query = require("query-string").parse(location.search)

// The "mount" is a single enum of the many many locations your
// extension might be rendered. This aggregates a bunch of different
// conditional values, including the anchor, the mode and the platform.
// https://dev.twitch.tv/docs/extensions/reference#client-query-parameters
let mount = "none"
if(query.platform === "mobile") {
    mount = query.platform // "mobile"
} else if(query.mode !== "viewer") {
    mount = query.mode // "dashboard" or "config"
} else if(query.anchor !== undefined) {
    mount = query.anchor // "panel" or "video_overlay" or "component"
}
mount = mount || "none"

const LANGUAGE_TO_LOCALE = {
    "en": "en-US",
    "en-gb": "en-US",
    "fr": "fr-FR",
    "it": "it-IT",
    "de": "de-DE",
    "es": "es-ES",
    "es-mx": "es-ES",
    "ja": "ja-JP",
    "ru": "ru-RU",
}

const twitch = module.exports = {
    "isAuthorized": false,
    "clientId": undefined,
    "viewer": {
        "userId": undefined,
        "opaqueUserId": undefined,
        "token": undefined,
        "name": undefined,
        "logo": undefined,
        "isStreamer": undefined,
        "isAnonymous": undefined,
    },
    "streamer": {
        "channelId": undefined,
        "name": undefined,
        "logo": undefined,
    },
    "extension": {
        // https://dev.twitch.tv/docs/extensions/reference#client-query-parameters
        "mode": query.mode || "none",
        "anchor": query.anchor || "none",
        "platform": query.platform || "none",
        "language": query.language || "none",
        "locale": LANGUAGE_TO_LOCALE[query.language] || "en-US",
        "state": query.state || "none",
        "mount": mount,
    },
}

// Nimble.twitch.retrieveTwitchChannel
// @param: <String> channelId
// @param: <String> clientId
twitch.retrieveTwitchChannel = function(channelId, clientId) {
    return window.fetch(TWITCH_CHANNEL_URI({
        "channelId": channelId
    }), {
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.twitchtv.v5+json",
            "Client-ID": clientId
        }
    }).then((resp) => {
        return resp.json()
    })
}

// Nimble.twitch.retrieveTwitchUser
// @param: <String> userId
// @param: <String> clientId
twitch.retrieveTwitchUser = function(userId, clientId) {
    if(userId === undefined) {
        return Promise.resolve(undefined)
    }
    return window.fetch(TWITCH_USER_URI({
        "userId": userId
    }), {
        "method": "GET",
        "headers": {
            "Accept": "application/vnd.twitchtv.v5+json",
            "Client-ID": clientId
        }
    }).then((resp) => {
        return resp.json()
    })
}

// Because we're using a global resource, the `Twitch.ext` helper,
// the only method to protect it's use is yet another global variable.
// This array is a list of all callbacks, across the multi-verse of
// nimble instances, that will be called when `Twitch.ext` has finished.
window.onTwitchExtAuthorizedCallbacks = window.onTwitchExtAuthorizedCallbacks || []
window.onTwitchExtMessageCallbacks = window.onTwitchExtMessageCallbacks || []

// Nimble.twitch.onAuthorized
// @param: <Function> callback
// @description:
// Adds your callback to the list
// that will be invoked after the
// onAuthorized method has finished.
// If the onAuthorized call has alr-
// eady triggered, your callback is
// immeadiately invoked.
twitch.onAuthorized = function(callback) {
    if(twitch.isAuthorized === false) {
        window.onTwitchExtAuthorizedCallbacks.push(callback)
    } else {
        callback(twitch.store)
    }
}

// Nimble.twitch.onMessage
// @param: <Function> callback
// @description:
// Adds your callback to the list
// that will be invoked after a
// pubsub message is received.
twitch.onMessage = function(callback) {
    window.onTwitchExtMessageCallbacks.push(callback)
}

// Once the page loads, it'll
// try to call the onAuthorized.
if(window.Twitch !== undefined
&& window.Twitch.ext !== undefined
&& window.Twitch.ext.onAuthorized !== undefined) {
    window.Twitch.ext.onAuthorized(function(authorization) {
        // Store all the data from the authorization into
        // the common shared store accessible from Nimble.

        twitch.clientId = authorization.clientId
        twitch.streamer.channelId = authorization.channelId

        twitch.token = authorization.token
        twitch.viewer.token = authorization.token
        let payload = JSON.parse(window.atob(authorization.token.split(".")[1]))

        twitch.viewer.userId = payload.user_id
        twitch.viewer.opaqueUserId = payload.opaque_user_id
        twitch.viewer.isStreamer = (twitch.viewer.userId === twitch.streamer.channelId)
        twitch.viewer.isAnonymous = (twitch.viewer.opaqueUserId[0] === "A")

        // Make calls to the Twitch Kraken API to
        // retrieve information about the viewer
        // and the channel.
        Promise.all([
            twitch.retrieveTwitchChannel(authorization.channelId, authorization.clientId).then((channel) => {
                twitch.streamer.name = channel.name
                twitch.streamer.logo = channel.logo
            }),
            twitch.retrieveTwitchUser(twitch.viewer.userId, authorization.clientId).then((user) => {
                if(user !== undefined) {
                    twitch.viewer.name = user.name
                    twitch.viewer.logo = user.logo
                }
            })
        ]).then((values) => {
            // Iterate through any callbacks that
            // have been attached to this module.
            twitch.isAuthorized = true
            window.onTwitchExtAuthorizedCallbacks.forEach((callback) => {
                callback(twitch.store)
            })
        })

        // window.setTimeout(function() {
        //     // This will continue to trigger twiceif it is inside `.onAuthorized`. Not sure why.
        //     // But for whatever reason, putting it in a window.setTimeout fixes this??? Weird.
        //     window.Twitch.ext.listen("broadcast", (target, type, message) => {
        //         try {
        //             message = JSON.parse(message)
        //         } catch(error) {
        //             console.log(error)
        //         }
        //         // console.log(">", target, message)
        //
        //         window.onTwitchExtMessageCallbacks.forEach((callback) => {
        //             callback(message)
        //         })
        //     })
        // })
    })
}
