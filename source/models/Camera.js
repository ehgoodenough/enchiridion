// TODO: Calculate the width of the frame in EMs, not hardcoded here.
const FRAME = 10
const TILE = 1

export default class Camera {
    constructor(camera) {
        this.position = {"x": 0, "y": 0}
        this.targetposition = {"x": 0, "y": 0}
        this.camzone = undefined
    }
    update(delta) {
        if(this.camzone === undefined
        || this.game.adventurer.position.x < this.camzone.position.x1
        || this.game.adventurer.position.y < this.camzone.position.y1
        || this.game.adventurer.position.x > this.camzone.position.x2
        || this.game.adventurer.position.y > this.camzone.position.y2) {
            this.camzone = this.game.world.camzones.find((camzone) => {
                return this.game.adventurer.position.x >= camzone.position.x1
                    && this.game.adventurer.position.y >= camzone.position.y1
                    && this.game.adventurer.position.x <= camzone.position.x2
                    && this.game.adventurer.position.y <= camzone.position.y2
            })
        }

        if(this.camzone !== undefined
        && this.camzone.position.w < FRAME - 1
        && this.game.editor.isActive !== true) {
            this.targetposition.x = this.camzone.position.cx
        } else {
            this.targetposition.x = this.game.adventurer.position.x
        }
        if(this.camzone !== undefined
        && this.camzone.position.h < FRAME
        && this.game.editor.isActive !== true) {
            this.targetposition.y = this.camzone.position.cy
        } else {
            this.targetposition.y = this.game.adventurer.position.y
        }

        this.position.x = this.targetposition.x - (FRAME / 2) + (TILE / 2)
        this.position.y = this.targetposition.y - (FRAME / 2) + (TILE / 2)

        if(this.camzone !== undefined
        && this.game.editor.isActive !== true) {
            if(this.camzone.position.w >= FRAME - 1) {
                this.position.x = Math.max(this.position.x, this.camzone.position.x1 - 0.5)
                this.position.x = Math.min(this.position.x, (this.camzone.position.x2 - FRAME) + 1 + 0.5)
            }
            if(this.camzone.position.h >= FRAME - 1) {
                this.position.y = Math.max(this.position.y, this.camzone.position.y1 - 0.5)
                this.position.y = Math.min(this.position.y, (this.camzone.position.y2 - FRAME) + 1 + 0.5)
            }
        }
    }
}
