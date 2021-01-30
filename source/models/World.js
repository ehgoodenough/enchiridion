import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"

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

        this.entities = {}
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
                            "y": Math.floor(object.y / TILE_SIZE) - 1, // TODO: Why -1?
                            "z": 0
                        }
                    }

                    const entity = Objdict.merge(defaultEntity, classedEntity, instancedEntity)
                    this.entities[entity.key] = entity
                })
            }
        })
    }
}

const defaultEntity = {
    "damage": 0,
    "health": 1,
    "beAttacked": function(game) {
        this.damage += 1
        if(this.damage >= this.health) {
            this.isDead = true
            // this.game.score += 1
            // this.game.wave.killcount -= 1
            delete game.world.entities[this.key]
        }
    }
}

class Entity {
    static isDead(entity) {
        return entity.damage >= entity.health
    }
}

const classedEntities = {
    "adventurer": {
        "health": 3,
        "image": require("assets/images/adventurer.png"),

        "title": "The Adventurer",
        "description": "It you!!",

        "beAttacked": function(game) {
            // if(this.game.isDemo) return
            if(Entity.isDead(this)) return
            this.damage += 1
            this.isAttacked = shortid.generate()
            if(Entity.isDead(this)) {
                this.deathtext = deathtext[0]
                deathtext.push(deathtext.shift())
                game.hasEnded = true
                App.deathtime = 0
            }
        }
    },
    "monster": {
        "image": require("assets/images/slime_alpha.png"),
        "title": "Red Slime",
        "description": "It looks gross.",
        "flipflop": false,
        "reaction": function(game) {
            if(this.isDead) {
                return
            }

            const action = {"move": {"x": 0, "y": 0}}

            this.isAttacking = false

            if(this.flipflop == false) {
                this.flipflop = true
            } else if(this.flipflop = true) {
                this.flipflop = false

                // move towards the adventurer, prioritzing whichever vector has a longer magnitude.
                if(Math.abs(this.position.y - ((game.world.entities["player"].position.y + game.world.entities["player"].prevposition.y) / 2))
                >= Math.abs(this.position.x - ((game.world.entities["player"].position.x + game.world.entities["player"].prevposition.x) / 2))) {
                    if(this.position.y > game.world.entities["player"].position.y) {
                        action.move.y = -1
                    } else if(this.position.y < game.world.entities["player"].position.y) {
                        action.move.y = +1
                    }
                } else {
                    if(this.position.x > game.world.entities["player"].position.x) {
                        action.move.x = -1
                    } else if(this.position.x < game.world.entities["player"].position.x) {
                        action.move.x = +1
                    }
                }
            }

            ///////////
            // MOVE //
            /////////

            action.move.x = action.move.x || 0
            action.move.y = action.move.y || 0

            const DIRECTIONS = {
                "-1x0": "west",
                "1x0": "east",
                "0x-1": "north",
                "0x1": "south"
            }
            this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || "none"

            // COLLISION WITH OTHER ENTITIES
            Objdict.forEach(game.world.entities, (entity) => {
                if(entity != this
                && this.position.x + action.move.x == entity.position.x
                && this.position.y + action.move.y == entity.position.y) {
                    if(entity.key == "player") {
                        this.isAttacking = true
                        entity.beAttacked()
                    }
                    action.move.x = 0
                    action.move.y = 0
                }
            })

            this.position.x += action.move.x
            this.position.y += action.move.y
        }
    }
}
