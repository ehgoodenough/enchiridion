import poin from "poin"
import keyb from "keyb"

poin.element = "frame"

import model from "models/.js"

export default class World {
    constructor(world) {
        this.tiles = {}
        world.tiles.forEach((tile) => {
            tile.key = tile.position.x + "x" + tile.position.y
            this.tiles[tile.key] = tile
        })

        this.camzones = [
            {"position": {"x1": 0, "x2": 5, "y1": 0, "y2": 5}},
            {"position": {"x1": 0, "x2": 5, "y1": 5, "y2": 10}},
            {"position": {"x1": 5, "x2": 16, "y1": 0, "y2": 10}},
        ]
        this.camzones.forEach((camzone) => {
            camzone.position.x = Math.min(camzone.position.x1, camzone.position.x2)
            camzone.position.y = Math.min(camzone.position.y1, camzone.position.y2)
            camzone.position.w = Math.abs(camzone.position.x1 - camzone.position.x2)
            camzone.position.h = Math.abs(camzone.position.y1 - camzone.position.y2)
            camzone.position.cx = camzone.position.x + (camzone.position.w / 2)
            camzone.position.cy = camzone.position.y + (camzone.position.h / 2)
        })
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

            model.saveStruct()
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
