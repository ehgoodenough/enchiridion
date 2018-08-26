import Game from "models/Game.js"

export default class Model {
    constructor(model) {
        this.startNewGame()
    }
    startNewGame() {
        this.game = new Game({
            "model": this
        })
    }
    update(delta) {
        if(this.game instanceof Game) {
            this.game.update(delta)
        }
    }
}
