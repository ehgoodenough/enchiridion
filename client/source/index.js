import Keyb from "keyb"
import Preact from "preact"
import Yaafloop from "yaafloop"

import Nimble from "library/Nimble"
import analytics from "library/analytics.js"

import activity from "data/activity.js"

import Mount from "views/Mount.view.js"
import Model from "models/Model.js"

if(Nimble.twitch.extension.state !== "released") {
    console.clear()
    require("statgrab/do")
}

const model = window.model = new Model()
const mount = Preact.render(<Mount/>, document.body)
const loop = new Yaafloop((delta) => {
    model.update(delta)
    Preact.render(<Mount/>, document.body, mount)
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
