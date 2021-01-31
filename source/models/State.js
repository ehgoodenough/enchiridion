import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"
import Entity from "models/Entity.js"

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

console.log(tilemap, tileset)

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

export default class State {
    static generate() {
        this.width = tilemap.width
        this.height = tilemap.height

        const state = {}
        state.entities = {}
        state.world = {"tiles": {}}

        tilemap.layers.forEach((layer) => {
            if(layer.name == "data:entities"
            && layer.type == "objectgroup") {
                return layer.objects.forEach((object) => {
                    if(object.visible == false) return
                    if(isNaN(object.gid)) return // this filters out anything that isn't an image stamp.

                    object.key = findPropertyValue(object.properties, "Key")
                    object.gid -= FIRST_TILEGID

                    if(object.type == undefined || object.type == "") {
                        object.type = findPropertyValue(object.properties, "EntityType")
                        if(object.type == undefined || object.type == "") {
                            const tile = tileset.tiles[object.gid]
                            if(tile != undefined) {
                                object.type = tile.type
                                if(object.type == undefined || object.type == "") {
                                    object.type = findPropertyValue(tile.properties, "DefaultEntityType")
                                }
                            }
                        }
                    }

                    if(object.type == undefined) {
                        console.error("Could not find entity of this type:", object)
                        return
                    }

                    const entity = Entity.generate({
                        "key": object.key || object.id,
                        "type": object.type,
                        "position": {
                            "x": Math.floor(object.x / TILE_SIZE),
                            "y": Math.floor(object.y / TILE_SIZE) - 1, // TODO: Why -1?
                            "z": 0
                        }
                    })

                    state.entities[entity.key] = entity
                })
            }

            if(layer.name == "data:collision"
            && layer.type == "tilelayer") {
                return iterateTileLayer(layer, ({tilegid, position}) => {
                    tilegid -= FIRST_TILEGID
                    if(tilegid > -1) {
                        state.world.tiles[position.key] = state.world.tiles[position.key] || {}
                        state.world.tiles[position.key].position = state.world.tiles[position.key].position || position
                        state.world.tiles[position.key].collision = true
                    }
                })
            }

            if(layer.type == "tilelayer"
            && layer.visible == true) {
                let stack = 0
                if(layer.properties != undefined) {
                    stack = findPropertyValue(layer.properties, "Stack")
                }

                iterateTileLayer(layer, ({tilegid, position}) => {
                    tilegid -= FIRST_TILEGID
                    const tile = tileset.tiles[tilegid]
                    if(tile == undefined) return

                    state.world.tiles[position.key] = state.world.tiles[position.key] || {}
                    state.world.tiles[position.key].position = state.world.tiles[position.key].position || position
                    state.world.tiles[position.key].images = state.world.tiles[position.key].images || []

                    if(tile.type == "collision") {
                        state.world.tiles[position.key].collision = true
                    }

                    // tile.imageheight == 16
                    // tile.imagewidth == 16

                    const sourceImagePath = tile.image.replace("../../assets/images/", "./")
                    const buildImagePath = buildImagePaths[sourceImagePath]
                    state.world.tiles[position.key].images.push({"source": buildImagePath, "stack": stack})
                })
            }
        })

        return state
    }
    // does not mutate either!!
    static merge() {
        const state = {"world": {}, "entities": {}}
        Array.from(arguments).forEach((substate) => {
            if(substate.world != undefined) {
                state.world = substate.world
            }
            if(substate.entities != undefined) {
                substate.entities = Objdict.convert(substate.entities)
                Objdict.forEach(substate.entities, (entity) => {
                    if(state.entities[entity.key] == undefined) {
                        state.entities[entity.key] = entity
                    } else {
                        state.entities[entity.key] = Objdict.merge(state.entities[entity.key], entity)
                    }
                })
            }
        })
        return state
    }
    static performReactions(state) {
        Objdict.forEach(state.entities, (entity) => {
            if(entity.reaction instanceof Function) {
                entity.reaction(state)
            }
        })

        // App.saveGame(game)
    }
    static pruneProgress(state) {
        const collectibles = Object.values(state.entities).filter((entity) => {
            return entity.type == "collectible"
                && entity.status == "collected"
        })
        return {
            "entities": collectibles.map((collectible) => {
                return {"key": collectible.key, "status": collectible.status}
            })
        }
    }
    static getCollectibleProgress(state) {
        const totalCollectibles = Object.values(state.entities).filter((entity) => entity.type == "collectible")
        const currentCollectibles = totalCollectibles.filter((entity) => entity.status == "collected")
        return {"current": currentCollectibles.length, "total": totalCollectibles.length}
    }
}
