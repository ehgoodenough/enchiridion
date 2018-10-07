import keyb from "keyb"
import cursor from "library/cursor.js"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds

export default class Model {
    constructor(model) {
        // IF FINDS UNEXPIRED LOCAL STORAGE
        // THEN DO NOT START DEMO BUT START GAME.
        this.startNewDemoGame()
    }
    startNewGame() {
        this.game = new Game({"model": this})
    }
    startNewDemoGame() {
        this.game = new Game({"isDemo": true, "model": this})
    }
    update(delta) {
        if(this.game.isDemo === true
        || this.game.isDone === true) {
            this.deathtime = this.deathtime || 0
            this.deathtime += delta.s
            if(this.deathtime > MINIMUM_DEATH_TIME) {
                if(keyb.isJustDown("W", delta.ms)
                || keyb.isJustDown("S", delta.ms)
                || keyb.isJustDown("A", delta.ms)
                || keyb.isJustDown("D", delta.ms)
                || keyb.isJustDown("<up>", delta.ms)
                || keyb.isJustDown("<down>", delta.ms)
                || keyb.isJustDown("<left>", delta.ms)
                || keyb.isJustDown("<right>", delta.ms)
                || keyb.isJustDown("<space>", delta.ms)
                || cursor.isDown) {
                    return this.startNewGame()
                }
            }
        }

        this.game.update(delta)
    }
}
