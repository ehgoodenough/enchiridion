import "local-json-storage"

import keyb from "keyb"
import poin from "poin"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds
const STATE_EXPIRATION = 10 * 1000 // in milliseconds

const DEMO_GAME_STATE = {"isDemo": true, "adventurer": {"position": {"x": 2, "y": 2}}}
const NEW_GAME_STATE = {"adventurer": {"position": {"x": 2, "y": 2}}}

const Dev = {"isInDevMode": true}

const App = new class {
    constructor() {
        if(Dev.isInDevMode == true) {
            window.app = this
        }

        const state = window.localStorage.getJSON("state")

        if(state != null
        && state.game.adventurer.isDead !== true
        && Date.now() - state.date < STATE_EXPIRATION) {
            this.hasUsedKeyboard = state.hasUsedKeyboard
            this.game = new Game({"game": state.game})
        } else {
            if(Dev.isInDevMode == true) {
                this.game = new Game({"game": NEW_GAME_STATE})
            } else {
                this.game = new Game({"game": DEMO_GAME_STATE})
            }
        }
    }
    startNewGame() {
        this.game = new Game({"game": NEW_GAME_STATE})
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
                || poin.wasJustPressed("primary", delta.ms)) {
                    return this.startNewGame()
                }
            }
        }

        this.game.update(delta)
    }
    static saveGame(game) {
        window.localStorage.setJSON("state", {
            "date": Date.now(),
            "game": this.toState(),
            "hasUsedKeyboard": App.hasUsedKeyboard
        })
    }
}

export default App
