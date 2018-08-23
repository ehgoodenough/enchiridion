import Nimble from "library/Nimble"

const PRODUCTION_ENDPOINT = " https://piuqkhzio9.execute-api.us-east-1.amazonaws.com/production"
const CHANNEL_URI = new Nimble.utility.URI(PRODUCTION_ENDPOINT + "/v1/channels/{channelId}")
const CHANNEL_SESSION_URI = new Nimble.utility.URI(PRODUCTION_ENDPOINT + "/v1/channels/{channelId}/session")

module.exports.retrieveChannel = function() {
    return window.fetch(CHANNEL_URI({
        "channelId": Nimble.twitch.streamer.channelId
    }), {
        "method": "GET",
        "headers": {
            "Authorization": Nimble.twitch.viewer.token
        },
    }).then((response) => {
        return response.json().then((response) => {
            if(response.channel !== undefined) {
                Nimble.sparks.sessionId = response.channel.sessionId || "initial-session"
            }
        })
    })
}

module.exports.resetChannelSession = function() {
    return window.fetch(CHANNEL_SESSION_URI({
        "channelId": Nimble.twitch.streamer.channelId
    }), {
        "method": "POST",
        "headers": {
            "Authorization": Nimble.twitch.viewer.token
        },
    }).then((response) => {
        return response.json().then((response) => {
            if(response.channel !== undefined) {
                // console.log("response", response.channel.sessionId)
                Nimble.sparks.sessionId = response.channel.sessionId || "initial-session"
                Nimble.sparks.listenToLeaderboard("SNAP/session", `TwitchArcade.activity.SNAP.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
            }
        })
    })
}
