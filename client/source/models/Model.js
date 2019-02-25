import keyb from "keyb"
import cursor from "library/cursor.js"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds
const NEW_GAME_STATE = {"adventurer": {"position": {"x": 2, "y": 2}}}

import "local-json-storage"
const STATE_EXPIRATION = 10 * 1000 // in milliseconds
function retrieveSavedState() {
    const state = window.localStorage.getJSON("state")
    if(state !== null
    && Date.now() - state.date < STATE_EXPIRATION) {
        return state
    }
}

function submitSavedState(state) {
    state.date = state.date || Date.now()
    window.localStorage.setJSON("state", state)
}

export default class Model {
    constructor(model) {
        const state = retrieveSavedState()
        
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
    }
    toState() {
        return {
            "game": this.game.toState(),
            "hasUsedKeyboard": this.hasUsedKeyboard,
        }
    }
    saveState() {
        submitSavedState(this.toState())
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
