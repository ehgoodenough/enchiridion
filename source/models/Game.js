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
        if(this.hasEnded) return
        Player.update(this, delta)
    }
    static performReactions(game) {
        Objdict.forEach(game.state.entities, (entity) => {
            if(entity.reaction instanceof Function) {
                entity.reaction(game)
            }
        })

        // if(this.isDemo != true) {
        //     // App.saveGame(game)
        // }
    }
    static pruneProgress(game) {
        const collectibles = Object.values(game.state.entities).filter((entity) => {
            return entity.type == "collectible"
                && entity.status == "collected"
        })
        return {
            "entities": collectibles.map((collectible) => {
                return {"key": collectible.key, "status": collectible.status}
            })
        }
    }
    start() {
        analytics.reportStartGame()
    }
    end() {
        analytics.reportEndGame()
    }
    get isDone() {
        return this.hasEnded
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
