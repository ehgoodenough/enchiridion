import * as Objdict from "objdict"
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
        if(this.hasEnded) {
            return
        }
        Player.update(this, delta)
        this.camera.reaction(this)
    }
    static performReactions(game) {
        Objdict.forEach(game.world.entities, (entity) => {
            if(entity.reaction instanceof Function) {
                entity.reaction(game)
            }
        })

        // if(this.isDemo != true) {
        //     // App.saveGame(game)
        // }
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
