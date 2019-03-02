const FRAME = 10
const TILE = 1

export default class Camera {
    constructor(camera) {
        this.position = {"x": 2, "y": 2}
    }
    update(delta) {
        // TODO: Calculate the width of the frame in EMs, not hardcoded here.
        this.position.x = this.game.adventurer.position.x - (FRAME / 2) + (TILE / 2)
        this.position.y = this.game.adventurer.position.y - (FRAME / 2) + (TILE / 2)
    }
}
