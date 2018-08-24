import Keyb from "keyb"
import Preact from "preact"
import Yaafloop from "yaafloop"

import Nimble from "library/Nimble"
import GameAnalytics from "library/GameAnalytics"

import Mount from "views/Mount.view.js"
import Model from "models/Model.js"

if(__STAGE__ === "DEVELOPMENT") {
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
        // report error
    })
}
