import poin from "poin"
import keyb from "keyb"

poin.element = "frame"

export default class World {
    constructor(world) {
        this.tiles = {}
        world.tiles.forEach((tile) => {
            tile.key = tile.position.x + "x" + tile.position.y
            this.tiles[tile.key] = tile
        })
        // for(let x = 0; x < 5; x += 1) {
        //     for(let y = 0; y < 5; y += 1) {
        //         this.tiles[x + "x" + y] = {
        //             "position": {"x": x, "y": y},
        //             "key": x + "x" + y,
        //             // "color": "#191923"
        //         }
        //     }
        // }
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
        if(this.game.editor.isActive === true
        && this.game.editor.mode === "tile"
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
    toStruct() {
        return {
            "tiles": Object.values(this.tiles).map((tile) => {
                return {
                    "position": tile.position,
                }
            })
        }
    }
}
