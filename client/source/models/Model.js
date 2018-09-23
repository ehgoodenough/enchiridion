import keyb from "keyb"

import Game from "models/Game.js"

export default class Model {
    constructor(model) {
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
            // this.deadtimer += delta.s
            // if(this.deadtimer > 1.5) {
            if(keyb.isJustDown("W", delta.ms)
            || keyb.isJustDown("S", delta.ms)
            || keyb.isJustDown("A", delta.ms)
            || keyb.isJustDown("D", delta.ms)
            || keyb.isJustDown("<up>", delta.ms)
            || keyb.isJustDown("<down>", delta.ms)
            || keyb.isJustDown("<left>", delta.ms)
            || keyb.isJustDown("<right>", delta.ms)
            || keyb.isJustDown("<space>", delta.ms)) {
                return this.startNewGame()
            }
        }

        this.game.update(delta)
    }
}
