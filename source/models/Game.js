import "local-json-storage"
import analytics from "library/analytics.js"

import App from "models/App.js"
import Player from "models/Player.js"
import World from "models/World.js"
import Camera from "models/Camera.js"

export default class Game {
    constructor() {
        analytics.reportStartGame()

        this.world = new World()
        this.camera = new Camera(this)
    }
    update(delta) {
        Player.update(this, delta)
        this.camera.update()
    }
    static performEnemyActions(game) {
        this.entities.forEach((entity) => {
            if(entity.onReaction instanceof Function) {
                entity.onReaction()
            }
        })

        // this.wave.onAction()

        // Save the state.
        if(this.isDemo !== true) {
            window.localStorage.setJSON("state", {
                "date": Date.now(),
                "game": this.toState(),
                "hasUsedKeyboard": App.hasUsedKeyboard
            })
        }
    }
    onEnd() {
        if(this.hasEndeded !== true) {
            this.hasEnded = true
            analytics.reportEndGame()
            App.deathtime = 0
        }
    }
    get isDone() {
        return Player.isDead(this)
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
