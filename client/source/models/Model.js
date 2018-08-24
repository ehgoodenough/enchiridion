import Game from "models/Game.js"

class Model {
    constructor(model) {
        this.startNewGame()
    }
    startNewGame() {
        this.game = new Game()
    }
    onTick(delta) {
        if(this.game instanceof Game) {
            this.game.onTick(delta)
        }
    }
}

export default Model
