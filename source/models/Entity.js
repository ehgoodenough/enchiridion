import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"
import State from "models/State.js"

import directions from "data/directions.js"

export default class Entity {
    static generate(instancedEntity = {}) {
        const classedEntity = classedEntities[instancedEntity.type] || {}
        return Objdict.merge(defaultEntity, classedEntity, instancedEntity)
    }
    static isDead(entity) {
        return entity.damage >= entity.health
    }
    static isInCamera(state, entity) {
        if(state.entities.player == undefined) return true
        const playerPosition = state.entities.player.prevposition || state.entities.player.position
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
    "handleAttacked": function(state) {
        this.damage += 1
        if(this.damage >= this.health) {
            this.isDead = true
            // this.score += 1
            // this.wave.killcount -= 1
            delete state.entities[this.key]
        }
    },
}

function StrikingAnimation() {
    if(this.isAttacking) {
        return "strike" + "-" + this.direction
    }
}

function FlipFlopImage() {
    if(this.flipflop === true) {
        return this.images.threatening
    } else {
        return this.images.standard
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
        "getAnimation": StrikingAnimation,
        "getImage": function() {
            if(Entity.isDead(this)) {
                return this.images.dead
            } else {
                return this.images.standard
            }
        },
        "handleAttacked": function(state) {
            // if(this.isDemo) return
            if(Entity.isDead(this)) return
            this.damage += 1
            this.isAttacked = shortid.generate()
            if(Entity.isDead(this)) {
                // this.deathtext = deathtext[0]
                // deathtext.push(deathtext.shift())
                state.hasEnded = true
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
        "handleSquished": function(state) {
            if(this.status != "collected") {
                this.status = "collected"
            }
        }
    },
    "goal": {
        "hasCollision": false,
        "images": {
            "standard": require("assets/images/goal.png"),
        },
        "handleSquished": function(state) {
            const collectibles = State.getCollectibleProgress(state)
            if(collectibles.current == collectibles.total) {
                window.alert("You Win!!")
            } else {
                window.alert("Come back when you've collected all the things.")
            }
        }
    },
    "red_slime": {
        "title": "Red Slime",
        "description": "It looks gross.",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/slime_alpha.png"),
            "threatening": require("assets/images/slime_omega.png"),
        },
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
        "getImage": FlipFlopImage,
        "flipflop": false,
        "reaction": function(state) {
            if(Entity.isDead(this)) return
            if(Entity.isInCamera(state, this) == false) return

            const action = {"move": {"x": 0, "y": 0}}

            this.isAttacking = false

            if(this.flipflop == false) {
                this.flipflop = true
            } else if(this.flipflop = true) {
                this.flipflop = false

                // move towards the adventurer, prioritzing whichever vector has a longer magnitude.
                if(Math.abs(this.position.y - ((state.entities.player.position.y + state.entities.player.prevposition.y) / 2))
                >= Math.abs(this.position.x - ((state.entities.player.position.x + state.entities.player.prevposition.x) / 2))) {
                    if(this.position.y > state.entities.player.position.y) {
                        action.move.y = -1
                    } else if(this.position.y < state.entities.player.position.y) {
                        action.move.y = +1
                    }
                } else {
                    if(this.position.x > state.entities.player.position.x) {
                        action.move.x = -1
                    } else if(this.position.x < state.entities.player.position.x) {
                        action.move.x = +1
                    }
                }
            }

            ///////////
            // MOVE //
            /////////

            action.move.x = action.move.x || 0
            action.move.y = action.move.y || 0

            this.direction = directions[action.move.x + "x" + action.move.y] || "none"

            // COLLISION WITH OTHER ENTITIES
            Objdict.forEach(state.entities, (entity) => {
                if(entity != this
                && entity.isDead != true
                && entity.hasCollision == true
                && this.position.x + action.move.x == entity.position.x
                && this.position.y + action.move.y == entity.position.y) {
                    if(entity.key == "player") {
                        this.isAttacking = true
                        entity.handleAttacked(state)
                    }
                    action.move.x = 0
                    action.move.y = 0
                }
            })

            // COLLISION WITH MAP
            const x = this.position.x + action.move.x
            const y = this.position.y + action.move.y
            const tile = state.world.tiles[x + "x" + y]
            if(tile != undefined && tile.collision == true) {
                action.move.x = 0
                action.move.y = 0
            }

            this.position.x += action.move.x
            this.position.y += action.move.y
        },
    },
    "white_bat": {
        "title": "White Bat",
        "description": "Yikes, where is it going??",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/bat_alpha.png"),
            "threatening": require("assets/images/bat_omega.png"),
        },
        "getAnimation": StrikingAnimation,
        "getImage": FlipFlopImage,
        "flipflop": false,
        "reaction": function(state) {
            if(Entity.isDead(this)) return
            if(Entity.isInCamera(state, this) == false) return

            const action = {"move": {"x": 0, "y": 0}}

            this.isAttacking = false

            if(this.flipflop == false) {
                this.flipflop = true
            } else if(this.flipflop = true) {
                this.flipflop = false

                let moves = [{x: -1}, {x: +1}, {y: -1}, {y: +1}]
                // moves.forEach((move) => {
                //     const x = this.position.x + (move.x || 0)
                //     const y = this.position.y + (move.y || 0)
                //     if(state.entities.player.position.x == x
                //     && state.entities.player.position.y == y) {
                //         moves = [move]
                //     }
                // })

                if(moves.length > 1) {
                    moves = filterInvalidMovements(state, this, moves)
                }

                if(moves.length > 0) {
                    action.move = moves[Math.floor((Math.random() * moves.length))]
                }
            }

            ///////////
            // MOVE //
            /////////

            action.move.x = action.move.x || 0
            action.move.y = action.move.y || 0

            this.direction = directions[action.move.x + "x" + action.move.y] || "none"

            // COLLISION WITH OTHER ENTITIES
            Objdict.forEach(state.entities, (entity) => {
                if(entity != this
                && entity.isDead != true
                && entity.hasCollision == true
                && this.position.x + action.move.x == entity.position.x
                && this.position.y + action.move.y == entity.position.y) {
                    if(entity.key == "player") {
                        this.isAttacking = true
                        entity.handleAttacked(state)
                    }
                    action.move.x = 0
                    action.move.y = 0
                }
            })

            // COLLISION WITH MAP
            const x = this.position.x + action.move.x
            const y = this.position.y + action.move.y
            const tile = state.world.tiles[x + "x" + y]
            if(tile != undefined && tile.collision == true) {
                action.move.x = 0
                action.move.y = 0
            }

            this.position.x += action.move.x
            this.position.y += action.move.y
        }
    }
}

function filterInvalidMovements(state, entity, moves) {
    return moves.filter((move) => {
        const x = entity.position.x + (move.x || 0)
        const y = entity.position.y + (move.y || 0)

        // COLLISION WITH OTHER ENTITIES
        Objdict.forEach(state.entities, (entity) => {
            if(entity != this
            && entity.isDead != true
            && entity.hasCollision == true
            && entity.type == "adventurer" // THE ONLY ENTITY IT'LL RUN INTO
            && x == entity.position.x
            && y == entity.position.y) {
                return false
            }
        })

        // COLLISION WITH MAP
        const tile = state.world.tiles[x + "x" + y]
        if(tile != undefined
        && tile.collision == true) {
            return false
        }

        return true
    })
}
