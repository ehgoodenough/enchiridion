export default class Camera {
    constructor(camera) {
        this.position = camera.position
    }
    update(delta) {
        this.position.x = this.game.adventurer.position.x
        this.position.y = this.game.adventurer.position.y
    }
}
