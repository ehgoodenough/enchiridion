const CAMZONE_WIDTH = 10
const CAMZONE_HEIGHT = 10

export default class Camera {
    constructor(game) {
        this.game = game
    }
    update() {
        // this.position = {
        //     "x": this.game.adventurer.position.x + 0.5,
        //     "y": this.game.adventurer.position.y + 0.5
        // }
        const player = this.game.world.entities["player"]
        if(player != undefined) {
            this.position = {
                "x": Math.floor(player.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
                "y": Math.floor(player.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
            }
        }
    }
}
