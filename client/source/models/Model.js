import keyb from "keyb"
import cursor from "library/cursor.js"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds

const DEMO_GAME_STATE = {"isDemo": true, "adventurer": {"position": {"x": 2, "y": 2}}}
const NEW_GAME_STATE = {"isDemo": true, "adventurer": {"position": {"x": 2, "y": 2}}}

export default class Model {
    constructor(model) {
        // this.game = new Game({"model": this, "game": LOADED_GAME_STATE})
        this.game = new Game({"model": this, "game": DEMO_GAME_STATE})
    }
    startNewGame() {
        this.game = new Game({"model": this, "game": NEW_GAME_STATE})
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
