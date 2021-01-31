import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"

export default class Entity {
    static generate(instancedEntity = {}) {
        const classedEntity = classedEntities[instancedEntity.type] || {}
        return Objdict.merge(defaultEntity, classedEntity, instancedEntity)
    }
    static isDead(entity) {
        return entity.damage >= entity.health
    }
    static isInCamera(game, entity) {
        if(game.state.entities.player == undefined) return true
        const playerPosition = game.state.entities.player.prevposition || game.state.entities.player.position
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

const defaultEntity = {
    "damage": 0,
    "health": 1,
    "handleAttacked": function(game) {
        this.damage += 1
        if(this.damage >= this.health) {
            this.isDead = true
            // this.game.score += 1
            // this.game.wave.killcount -= 1
            delete game.state.entities[this.key]
        }
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
                // delete game.state.entities[this.key]
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
                if(Math.abs(this.position.y - ((game.state.entities.player.position.y + game.state.entities.player.prevposition.y) / 2))
                >= Math.abs(this.position.x - ((game.state.entities.player.position.x + game.state.entities.player.prevposition.x) / 2))) {
                    if(this.position.y > game.state.entities.player.position.y) {
                        action.move.y = -1
                    } else if(this.position.y < game.state.entities.player.position.y) {
                        action.move.y = +1
                    }
                } else {
                    if(this.position.x > game.state.entities.player.position.x) {
                        action.move.x = -1
                    } else if(this.position.x < game.state.entities.player.position.x) {
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
            Objdict.forEach(game.state.entities, (entity) => {
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
            const tile = game.state.world.tiles[x + "x" + y]
            if(tile != undefined && tile.collision == true) {
                action.move.x = 0
                action.move.y = 0
            }

            this.position.x += action.move.x
            this.position.y += action.move.y
        }
    }
}
