import keyb from "keyb"
import cursor from "library/cursor.js"
import analytics from "library/analytics.js"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds
const NEW_GAME_STATE = {"adventurer": {"position": {"x": 2, "y": 2}}}

import storage from "library/storage.js"

export default class Model {
    constructor(model) {
        const state = storage.retrieve()
        
        if(state !== undefined
        && state.game.adventurer.isDead !== true) {
            this.hasUsedKeyboard = state.hasUsedKeyboard
            this.game = new Game(state.game)
        } else {
            this.game = new Game(NEW_GAME_STATE)
            this.game.isDemo = true
        }
    }
    startNewGame() {
        this.game = new Game(NEW_GAME_STATE)
        analytics.reportStartGame()
    }
    toState() {
        return {
            "game": this.game.toState(),
            "hasUsedKeyboard": this.hasUsedKeyboard,
        }
    }
    saveState() {
        storage.submit(this.toState())
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
