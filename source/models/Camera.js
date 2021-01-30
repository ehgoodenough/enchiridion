const CAMZONE_WIDTH = 10
const CAMZONE_HEIGHT = 10

export default class Camera {
    constructor({game}) {
        this.game = game
    }
    onReaction() {
        // this.position = {
        //     "x": this.game.adventurer.position.x + 0.5,
        //     "y": this.game.adventurer.position.y + 0.5
        // }
        this.position = {
            "x": Math.floor(this.game.adventurer.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
            "y": Math.floor(this.game.adventurer.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
        }
    }
}
