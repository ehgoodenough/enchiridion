import * as Objdict from "objdict"
import analytics from "library/analytics.js"

import App from "models/App.js"
import Player from "models/Player.js"
import State from "models/State.js"

export default class Game {
    constructor({savestate} = {}) {
        this.start()

        this.state = State.generate()

        if(savestate != undefined) {
            this.state = State.merge(this.state, savestate)
        }
    }
    update(delta) {
        if(this.state.hasEnded) return
        Player.update(this.state, delta)
    }
    start() {
        analytics.reportStartGame()
    }
    end() {
        analytics.reportEndGame()
    }
    get isTutorial() {
        if(this.isDemo) {
            return false
        }
        if(App.hasUsedKeyboard) {
            return false
        }
        return true
    }
}
