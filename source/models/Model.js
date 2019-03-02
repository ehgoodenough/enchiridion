import keyb from "keyb"
import poin from "poin"

import analytics from "library/analytics.js"
import isInDevelopment from "data/is-dev.js"

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
        } else if(isInDevelopment === true) {
            this.game = new Game(NEW_GAME_STATE)
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
                if(keyb.wasJustPressed("W", delta.ms)
                || keyb.wasJustPressed("S", delta.ms)
                || keyb.wasJustPressed("A", delta.ms)
                || keyb.wasJustPressed("D", delta.ms)
                || keyb.wasJustPressed("<up>", delta.ms)
                || keyb.wasJustPressed("<down>", delta.ms)
                || keyb.wasJustPressed("<left>", delta.ms)
                || keyb.wasJustPressed("<right>", delta.ms)
                || keyb.wasJustPressed("<space>", delta.ms)
                || poin.wasJustPressed(delta.ms)) {
                    return this.startNewGame()
                }
            }
        }

        this.game.update(delta)
    }
}
