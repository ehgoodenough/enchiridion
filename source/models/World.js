import poin from "poin"
import keyb from "keyb"

poin.element = "frame"

import isInDevelopment from "data/is-dev.js"

export default class World {
    constructor(world) {

        this.tiles = {}
        for(let x = 0; x < 5; x += 1) {
            for(let y = 0; y < 5; y += 1) {
                this.tiles[x + "x" + y] = {
                    "position": {"x": x, "y": y},
                    "key": x + "x" + y,
                    // "color": "#191923"
                }
            }
        }

        this.isEditing = false
    }
    getTile(position) {
        const key = position.x + "x" + position.y
        return this.tiles[key] || {
            "position": position,
            "key": key,
            "hasCollision": true,
        }
    }
    update(delta) {
        if(isInDevelopment === true
        && keyb.wasJustPressed("`", delta.ms)) {
            this.isEditing = !this.isEditing
        }
        if(this.isEditing === true
        && poin.wasJustPressed(delta.ms)) {
            // TODO: Calculate the width of the frame to support zooms.
            let x = Math.floor((poin.position.x * 10) + this.game.camera.position.x)
            let y = Math.floor((poin.position.y * 10) + this.game.camera.position.y)
            let key = x + "x" + y

            if(!!this.tiles[key]) {
                delete this.tiles[key]
            } else {
                this.tiles[key] = {
                    "position": {"x": x, "y": y},
                    "key": key
                }
            }
        }
    }
}
