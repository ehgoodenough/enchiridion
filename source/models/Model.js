import keyb from "keyb"
import poin from "poin"
import copy from "copy-to-clipboard"

import analytics from "library/analytics.js"
import isInDevelopment from "data/is-dev.js"

import Game from "models/Game.js"

const MINIMUM_DEATH_TIME = 1.5 // in seconds
const NEW_GAME_STATE = {"adventurer": {"position": {"x": 2, "y": 2}}}

import storage from "library/storage.js"

const GAME_STRUCT = require("data/struct.json")

export default class Model {
    constructor(model) {
        const state = storage.retrieve("state")
        const gamestruct = storage.retrieve("struct") || GAME_STRUCT

        if(state !== undefined
        && state.game.adventurer.isDead !== true) {
            this.game = new Game(state.game, gamestruct)
            this.hasUsedKeyboard = true
        } else if(isInDevelopment === true) {
            this.game = new Game(NEW_GAME_STATE, gamestruct)
        } else {
            this.game = new Game(NEW_GAME_STATE, gamestruct)
            this.game.isDemo = true
        }
    }
    startNewGame() {
        this.game = new Game(NEW_GAME_STATE)
        analytics.reportStartGame()
    }
    saveState() {
        storage.submit("state", {
            "game": this.game.toState(),
        })
    }
    saveStruct() {
        storage.submit("struct", this.game.toStruct(), 60*60*1000)
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
