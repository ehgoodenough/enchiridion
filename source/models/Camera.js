const CAMZONE_WIDTH = 10
const CAMZONE_HEIGHT = 10

export default class Camera {
    constructor(game) {
        this.position = {"x": 0, "y": 0}
        this.focusOn(game, game.world.entities["player"])
    }
    reaction(game) {
        this.focusOn(game, game.world.entities["player"])
    }
    focusOn(game, player) {
        // this.position = {
        //     "x": this.game.adventurer.position.x + 0.5,
        //     "y": this.game.adventurer.position.y + 0.5
        // }
        if(player != undefined) {
            this.position = {
                "x": Math.floor(player.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
                "y": Math.floor(player.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
            }
        }
    }
}
