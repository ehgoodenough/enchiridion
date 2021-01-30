import tilemap from "data/world/tilemap.json"
import tileset from "data/world/tileset.json"

const contextualize = (context) => {
    const recontext = {}
    context.keys().forEach((key) => {
        recontext[key] = context(key)
    })
    return recontext
}
const buildImagePaths = contextualize(require.context("assets/images/", true))

if(tilemap.tilesets.length != 1
|| tilemap.tilesets[0].source != "tileset.json") {
    console.error("Unexpected tilesets", tilemap.tilesets)
}

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
            if(layer.name == "collision"
            && layer.type == "tilelayer") {
                layer.data.forEach((tilegid, index) => {
                    tilegid -= FIRST_TILEGID

                    const x = index % layer.width
                    const y = Math.floor(index / layer.width)
                    const xy = x + "x" + y

                    if(tilegid > -1) {
                        this.tiles[xy] = this.tiles[xy] || {}
                        this.tiles[xy].position = this.tiles[xy].position || {x, y}
                        this.tiles[xy].collision = true
                    }
                })
            }
            if(layer.name == "environment"
            && layer.type == "group"
            && layer.visible == true) {
                layer.layers.forEach((sublayer) => {
                    if(sublayer.type == "group"
                    && sublayer.visible == true) {
                        console.error("Don't yet support groups within the main images layer.")
                        return
                    }

                    let stack = 0
                    if(sublayer.properties != undefined) {
                        const stackProperty = sublayer.properties.find((property) => property.name == "z")
                        if(stackProperty != undefined) {
                            stack = stackProperty.value
                        }
                    }

                    if(sublayer.type == "tilelayer"
                    && sublayer.visible == true) {
                        sublayer.data.forEach((tilegid, index) => {
                            tilegid -= FIRST_TILEGID

                            const tile = tileset.tiles[tilegid]

                            if(tile == undefined) {
                                return
                            }

                            const x = index % sublayer.width
                            const y = Math.floor(index / sublayer.width)
                            const xy = x + "x" + y

                            this.tiles[xy] = this.tiles[xy] || {}
                            this.tiles[xy].position = this.tiles[xy].position || {x, y}
                            this.tiles[xy].images = this.tiles[xy].images || []

                            // tile.imageheight == 16
                            // tile.imagewidth == 16

                            const sourceImagePath = tile.image.replace("../../assets/images/", "./")
                            const buildImagePath = buildImagePaths[sourceImagePath]
                            this.tiles[xy].images.push({"source": buildImagePath, "stack": stack})
                        })
                    }
                })
            }
        })
    }
}
