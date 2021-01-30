import * as Objdict from "objdict"

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
const TILE_SIZE = 16

console.log(tilemap, tileset)

function iterateTileLayer(layer, func) {
    layer.data.forEach((tilegid, index) => {
        const position = {}
        position.x = index % layer.width
        position.y = Math.floor(index / layer.width)
        position.key = position.x + "x" + position.y
        func({tilegid, position, index})
    })
}
function findPropertyValue(properties, name) {
    if(properties == undefined) return
    const property = properties.find((property) => {
        if(property == undefined) return false
        if(property.name == undefined) return false
        if(property.name.toLowerCase() == name.toLowerCase()) return true
    })
    if(property != undefined) {
        return property.value
    }
}

export default class World {
    constructor() {
        this.width = tilemap.width
        this.height = tilemap.height

        this.entities = []
        this.environment = {"tiles": {}}

        tilemap.layers.forEach((layer) => {
            if(layer.name == "collision"
            && layer.type == "tilelayer") {
                iterateTileLayer(layer, ({tilegid, position}) => {
                    tilegid -= FIRST_TILEGID
                    if(tilegid > -1) {
                        this.environment.tiles[position.key] = this.environment.tiles[position.key] || {}
                        this.environment.tiles[position.key].position = this.environment.tiles[position.key].position || position
                        this.environment.tiles[position.key].collision = true
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
                        stack = findPropertyValue(sublayer.properties, "Stack")
                    }

                    if(sublayer.type == "tilelayer"
                    && sublayer.visible == true) {
                        iterateTileLayer(sublayer, ({tilegid, position}) => {
                            tilegid -= FIRST_TILEGID
                            const tile = tileset.tiles[tilegid]
                            if(tile == undefined) return

                            this.environment.tiles[position.key] = this.environment.tiles[position.key] || {}
                            this.environment.tiles[position.key].position = this.environment.tiles[position.key].position || position
                            this.environment.tiles[position.key].images = this.environment.tiles[position.key].images || []

                            // tile.imageheight == 16
                            // tile.imagewidth == 16

                            const sourceImagePath = tile.image.replace("../../assets/images/", "./")
                            const buildImagePath = buildImagePaths[sourceImagePath]
                            this.environment.tiles[position.key].images.push({"source": buildImagePath, "stack": stack})
                        })
                    }
                })
            }

            if(layer.name == "entities"
            && layer.type == "objectgroup") {
                layer.objects.forEach((object) => {
                    if(object.visible == false) return
                    object.key = findPropertyValue(object.properties, "Key")

                    object.gid -= FIRST_TILEGID
                    // if(object.type == undefined) {
                    //     tileset.tiles[object.gid] // TODO: READ DEFAULT OBJECT TYPE FROM TILESET!!
                    // }

                    const classedEntity = classedEntities[object.type] || {}
                    const instancedEntity = {
                        "key": object.key || object.id,
                        "type": object.type,
                        "position": {
                            "x": Math.floor(object.x / TILE_SIZE),
                            "y": Math.floor(object.y / TILE_SIZE),
                            "z": 0
                        }
                    }

                    const entity = Objdict.merge(instancedEntity, classedEntity, defaultEntity)
                    console.log(entity)

                    this.entities.push(entity)
                })
            }
        })
    }
}

const defaultEntity = {
    "damage": 0,
    "health": 1,
}

const classedEntities = {
    "adventurer": {
        "health": 3,
        "image": require("assets/images/adventurer.png")
    }
}
