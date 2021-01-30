export default class Camera {
    constructor({game}) {
        this.game = game
    }
    onReaction() {
        this.position = {
            "x": this.game.adventurer.position.x + 0.5,
            "y": this.game.adventurer.position.y + 0.5
        }
    }
}
