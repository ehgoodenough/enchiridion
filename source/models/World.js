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

export default class World {
    constructor() {
        this.width = tilemap.width
        this.height = tilemap.height

        this.entities = {}
        this.environment = {"tiles": {}}

        tilemap.layers.forEach((layer) => {
            if(layer.name == "data:entities"
            && layer.type == "objectgroup") {
                layer.objects.forEach((object) => {
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
                return
            }

            if(layer.name == "data:collision"
            && layer.type == "tilelayer") {
                iterateTileLayer(layer, ({tilegid, position}) => {
                    tilegid -= FIRST_TILEGID
                    if(tilegid > -1) {
                        this.environment.tiles[position.key] = this.environment.tiles[position.key] || {}
                        this.environment.tiles[position.key].position = this.environment.tiles[position.key].position || position
                        this.environment.tiles[position.key].collision = true
                    }
                })
                return
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

                    this.environment.tiles[position.key] = this.environment.tiles[position.key] || {}
                    this.environment.tiles[position.key].position = this.environment.tiles[position.key].position || position
                    this.environment.tiles[position.key].images = this.environment.tiles[position.key].images || []

                    if(tile.type == "collision") {
                        this.environment.tiles[position.key].collision = true
                    }

                    // tile.imageheight == 16
                    // tile.imagewidth == 16

                    const sourceImagePath = tile.image.replace("../../assets/images/", "./")
                    const buildImagePath = buildImagePaths[sourceImagePath]
                    this.environment.tiles[position.key].images.push({"source": buildImagePath, "stack": stack})
                })
            }
        })
    }
}

const defaultEntity = {
    "damage": 0,
    "health": 1,
    "handleAttacked": function(game) {
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
    static isInCamera(game, entity) {
        if(game.world.entities.player == undefined) return true
        const playerPosition = game.world.entities.player.prevposition || game.world.entities.player.position
        const CAMZONE_WIDTH = 10
        const CAMZONE_HEIGHT = 10
        const playerCamzonePosition = {
            "x": Math.floor(playerPosition.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
            "y": Math.floor(playerPosition.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT,
        }
        const entityCamzonePosition = {
            "x": Math.floor(entity.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH,
            "y": Math.floor(entity.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT,
        }
        return entityCamzonePosition.x == playerCamzonePosition.x
            && entityCamzonePosition.y == playerCamzonePosition.y
    }
}

const classedEntities = {
    "adventurer": {
        "title": "The Adventurer",
        "description": "It you!!",
        "hasCollision": true,

        "health": 3,

        "images": {
            "standard": require("assets/images/adventurer.png"),
            "dead": require("assets/images/gravestone.png"),
        },
        "getImage": function() {
            if(Entity.isDead(this)) {
                return this.images.dead
            } else {
                return this.images.standard
            }
        },
        "getAnimation": function() {
            if(this.isAttacking) {
                return "strike" + "-" + this.direction
            }
        },


        "handleAttacked": function(game) {
            // if(this.game.isDemo) return
            if(Entity.isDead(this)) return
            this.damage += 1
            this.isAttacked = shortid.generate()
            if(Entity.isDead(this)) {
                // this.deathtext = deathtext[0]
                // deathtext.push(deathtext.shift())
                game.hasEnded = true
                App.deathtime = 0
            }
        }
    },
    "collectible": {
        "hasCollision": false,
        "images": {
            "standard": require("assets/images/collectible.png"),
        },
        "getOpacity": function() {
            if(this.status == "collected") {
                return 0.5
            } else {
                return 1
            }
        },

        "handleSquished": function(game) {
            if(this.status != "collected") {
                this.status = "collected"
                // delete game.world.entities[this.key]
            }
        }
    },
    "monster": {
        "title": "Red Slime",
        "description": "It looks gross.",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/slime_alpha.png"),
            "threatening": require("assets/images/slime_omega.png"),
        },
        "flipflop": false,
        "getAnimation": function() {
            if(this.isAttacking) {
                return "strike" + "-" + this.direction
            }

            if(this.flipflop === true) {
                return "shake"
            } else {
                return "ooze"
            }
        },
        "getImage": function() {
            if(this.flipflop === true) {
                return this.images.threatening
            } else {
                return this.images.standard
            }
        },
        "reaction": function(game) {
            if(Entity.isDead(this)) return
            if(Entity.isInCamera(game, this) == false) return

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
                && entity.isDead != true
                && entity.hasCollision == true
                && this.position.x + action.move.x == entity.position.x
                && this.position.y + action.move.y == entity.position.y) {
                    if(entity.key == "player") {
                        this.isAttacking = true
                        entity.handleAttacked(game)
                    }
                    action.move.x = 0
                    action.move.y = 0
                }
            })

            // COLLISION WITH MAP
            const x = this.position.x + action.move.x
            const y = this.position.y + action.move.y
            const tile = game.world.environment.tiles[x + "x" + y]
            if(tile != undefined && tile.collision == true) {
                action.move.x = 0
                action.move.y = 0
            }

            this.position.x += action.move.x
            this.position.y += action.move.y
        }
    }
}
