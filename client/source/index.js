import Yaafloop from "yaafloop"

import Nimble from "library/Nimble"
import analytics from "library/analytics.js"

import activity from "data/activity.js"

import model from "models/_.js"
import view from "views/_.js"

if(Nimble.twitch.extension.state !== "released") {
    console.clear()
    require("statgrab/do")
}

const loop = new Yaafloop((delta) => {
    model.update(delta)
    view.update(delta)
})

document.body.addEventListener("dblclick", function(event) {
    event.stopPropagation()
})

if(Nimble.twitch.extension.state === "released") {
    window.addEventListener("error", (error) => {
        analytics.reportError(error)
    })
}

Nimble.sparks.initialize().then(() => {
    Nimble.sparks.listenToLeaderboard(`${activity}/session`, `TwitchArcade.activity.${activity}.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
    Nimble.sparks.listenToLeaderboard(`${activity}/channel`, `ChannelHighScores.activity.${activity}.channelId.${Nimble.twitch.streamer.channelId}`)
    Nimble.sparks.listenToLeaderboard(`${activity}/global`, `GlobalHighScores.activity.${activity}`)
})
