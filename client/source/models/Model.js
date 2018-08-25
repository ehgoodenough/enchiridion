import Game from "models/Game.js"

class Model {
    constructor(model) {
        this.startNewGame()
    }
    startNewGame() {
        this.game = new Game()
    }
    update(delta) {
        if(this.game instanceof Game) {
            this.game.update(delta)
        }
    }
}

export default Model
