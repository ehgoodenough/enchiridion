import tilemap from "data/world/tilemap.json"
import tileset from "data/world/tileset.json"

const contextualize = (context) => {
    const recontext = {}
    context.keys().forEach((key) => {
        recontext[key] = context(key)
    })
    return recontext
}
const buildImagePaths = contextualize(require.context("assets/images/world/tiles/", true))

if(tilemap.tilesets.length != 1
|| tilemap.tilesets[0].source != "tileset.json") {
    console.error("Unexpected tilesets", tilemap.tilesets)
}

console.log(tilemap)

// tilemap.renderorder == "right-down"
// tilemap.orientation == "orthogonal"
// tilemap.tiledversion == "1.4.2"
// tilemap.version == 1.4
// tilemap.type == "map"
// tilemap.infinite == false
// tilemap.tilewidth == 16 // in pixels
// tilemap.tileheight == 16 // in pixels

const FIRST_TILEGID = 1

export default class World {
    constructor() {
        this.width = tilemap.width
        this.height = tilemap.height

        this.tiles = {}

        tilemap.layers.forEach((layer) => {
            if(layer.type == "tilelayer"
            && layer.name == "collision") {
                layer.data.forEach((tilegid, index) => {
                    tilegid -= FIRST_TILEGID

                    const x = index % layer.width
                    const y = Math.floor(index / layer.width)

                    if(tilegid > -1) {
                        this.tiles[x + "x" + y] = this.tiles[x + "x" + y] || {}
                        this.tiles[x + "x" + y].collision = true
                    }
                })
            }
            if(layer.type == "group"
            && layer.name == "images"
            && layer.visible == true) {
                layer.layers.forEach((sublayer) => {
                    if(sublayer.type == "group"
                    && sublayer.name == "main"
                    && sublayer.visible == true) {
                        sublayer.layers.forEach((subsublayer) => {
                            if(subsublayer.type == "group"
                            && subsublayer.visible == true) {
                                console.error("Don't yet support groups within the main images layer.")
                                return
                            }
                            if(subsublayer.type == "tilelayer"
                            && subsublayer.visible == true) {
                                subsublayer.data.forEach((tilegid, index) => {
                                    tilegid -= FIRST_TILEGID

                                    const tile = tileset.tiles[tilegid]

                                    if(tile == undefined) {
                                        return
                                    }

                                    const x = index % subsublayer.width
                                    const y = Math.floor(index / subsublayer.width)

                                    this.tiles[x + "x" + y] = this.tiles[x + "x" + y] || {}
                                    this.tiles[x + "x" + y].position = this.tiles[x + "x" + y].position || {x, y}
                                    this.tiles[x + "x" + y].images = this.tiles[x + "x" + y].images || []

                                    // tile.imageheight == 16
                                    // tile.imagewidth == 16

                                    const sourceImagePath = tile.image.replace("../../assets/images/world/tiles/", "./")
                                    const buildImagePath = buildImagePaths[sourceImagePath]
                                    this.tiles[x + "x" + y].images.push({"source": buildImagePath})
                                })
                            }
                        })
                    }
                })
            }
        })
        // this.tiles = {}
        // for(let x = 0; x < this.width; x += 1) {
        //     for(let y = 0; y < this.height; y += 1) {
        //         this.tiles[x + "x" + y] = {
        //             "position": {"x": x, "y": y},
        //             "key": x + "x" + y,
        //             "color": "#191923",
        //             "stack": 0
        //         }
        //     }
        // }
    }
}
