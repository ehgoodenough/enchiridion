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

function getDirectionLabel(direction) {
    return directions[direction.x + "x" + direction.y] || "none"
}

function StrikingAnimation() {
    if(this.isAttacking) {
        return "strike" + "-" + getDirectionLabel(this.direction)
    }
}

function FlipFlopImage() {
    if(this.flipflop === true) {
        return this.images.threatening
    } else {
        return this.images.standard
    }
}

import scripts from "data/scripts.js"

function performScript(state, script) {
    script.time = Date.now()
    state.script = {
        "time": Date.now() + 500,
        "dialogue": script.dialogue.slice(), // shallow copy
        "goto": script.goto,
    }
}

const classedEntities = {
    "dialogue": {
        "hasCollision": false,
        "images": {
            "standard": require("assets/images/collectible.png"),
        },
        "getOpacity": function() {
            return 0
        },
        "handleSquished": function(state) {
            if(scripts[this.scriptKey] != undefined
            && scripts[this.scriptKey].hasBeenTriggered != true) {
                scripts[this.scriptKey].hasBeenTriggered = true
                performScript(state, scripts[this.scriptKey])
            }
        }
    },
    "adventurer": {
        "title": "The Adventurer",
        "description": "It you!!",
        "hasCollision": true,
        "health": 3,
        "images": {
            "standard": require("assets/images/char_main.png"),
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

                const collectibles = State.getCollectibleProgress(state)
                if(collectibles.current == collectibles.total) {
                    if(scripts["finalshard"] != undefined
                    && scripts["finalshard"].hasBeenTriggered != true) {
                        scripts["finalshard"].hasBeenTriggered = true
                        performScript(state, scripts["finalshard"])
                    }
                }
            }
        }
    },
    "shrub": {
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/shrub.png"),
        },
    },
    "goal": {
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/tiles/pedestal_withsword.png"),
            "empty": require("assets/images/tiles/pedestal.png"),
        },
        "getImage": function(state) {
            if(scripts["sword1"].hasBeenTriggered == true
            && scripts["sword2"].hasBeenTriggered != true) {
                return this.images.empty
            } else {
                return this.images.standard
            }
        },
        "handleAttacked": function(state) {
            const collectibles = State.getCollectibleProgress(state)
            if(collectibles.current == collectibles.total) {
                if(scripts["sword2"] != undefined
                && scripts["sword2"].hasBeenTriggered != true) {
                    scripts["sword2"].hasBeenTriggered = true
                    performScript(state, scripts["sword2"])
                }
            } else if(scripts["sword1"] != undefined
            && scripts["sword1"].hasBeenTriggered != true) {
                scripts["sword1"].hasBeenTriggered = true
                performScript(state, scripts["sword1"])
            } else {
                performScript(state, scripts["..."])
            }
        }
    },
    "red_slime": {
        "title": "Red Slime",
        "description": "It looks gross.",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_slime.png"),
        },
        "getAnimation": function() {
            if(this.isAttacking) {
                return "strike" + "-" + getDirectionLabel(this.direction)
            }

            if(this.flipflop === true) {
                return "shake"
            } else {
                return "ooze"
            }
        },
        "reaction": function(state) {
            StandardReaction(state, this, () => {
                const action = {"move": {"x": 0, "y": 0}}

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

                    this.direction = {"x": action.move.x, "y": action.move.y}
                }
                return action
            })
        }
    },
    "blue_slime": {
        "title": "Red Slime",
        "description": "It looks gross.",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_slime2.png"),
        },
        "getAnimation": function() {
            if(this.isAttacking) {
                return "strike" + "-" + getDirectionLabel(this.direction)
            }

            if(this.flipflop === true) {
                return "shake"
            } else {
                return "ooze"
            }
        },
        "health": 2,
        "reaction": function(state) {
            StandardReaction(state, this, () => {
                const action = {"move": {"x": 0, "y": 0}}

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

                    this.direction = {"x": action.move.x, "y": action.move.y}
                }
                return action
            })
        }
    },
    "red_bat": {
        "title": "Red Bat",
        "description": "Yikes, where is it going??",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_bat.png"),
        },
        "getAnimation": StrikingAnimation,
        "getAnimation": function() {
            if(this.isAttacking) {
                return "strike" + "-" + getDirectionLabel(this.direction)
            }

            if(this.flipflop === true) {
                return "shake"
            } else {
                return "ooze"
            }
        },
        "reaction": function(state) {
            StandardReaction(state, this, () => {
                const action = {"move": {"x": 0, "y": 0}}

                if(this.flipflop != true) {
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

                    this.direction = {"x": action.move.x, "y": action.move.y}
                }

                return action
            })
        }
    },
    "blue_bat": {
        "title": "Blue Bat",
        "description": "Yikes, where is it going??",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_bat2.png"),
        },
        "getAnimation": StrikingAnimation,
        "reaction": function(state) {
            StandardReaction(state, this, () => {
                const action = {"move": {"x": 0, "y": 0}}

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

                this.direction = {"x": action.move.x, "y": action.move.y}

                return action
            })
        }
    },
    "red_snake": {
        "title": "Red Snake",
        "description": "Ssssss",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_snake.png"),
        },
        "reaction": function(state) {
            const entity = this
            StandardReaction(state, entity, () => {
                const action = {"move": {"x": 0, "y": 0}}

                if(entity.direction == undefined) {
                    entity.direction = Object.keys(directions)
                    entity.direction = entity.direction[Math.floor(Math.random() * entity.direction.length)]
                    entity.direction = entity.direction.split("x")
                    entity.direction = {"x": parseInt(entity.direction[0]), "y": parseInt(entity.direction[1])}
                }
                action.move.x = entity.direction.x // * entity.speed
                action.move.y = entity.direction.y // * entity.speed

                const x = entity.position.x + action.move.x
                const y = entity.position.y + action.move.y
                Objdict.forEach(state.entities, (otherEntity) => {
                    if(entity != otherEntity
                    && otherEntity.isDead != true
                    && otherEntity.hasCollision == true
                    && x == otherEntity.position.x
                    && y == otherEntity.position.y) {
                        entity.direction.x *= -1
                        entity.direction.y *= -1
                    }
                })

                const tile = state.world.tiles[x + "x" + y]
                if(tile != undefined && tile.collision == true) {
                    this.direction.x *= -1
                    this.direction.y *= -1
                }

                return action
            })
        }
    },
    "blue_snake": {
        "title": "Blue Snake",
        "description": "Ssssss",
        "hasCollision": true,
        "images": {
            "standard": require("assets/images/char_snake2.png"),
        },
        "health": 2,
        "reaction": function(state) {
            const entity = this
            StandardReaction(state, entity, () => {
                const action = {"move": {"x": 0, "y": 0}}

                if(entity.direction == undefined) {
                    entity.direction = Object.keys(directions)
                    entity.direction = entity.direction[Math.floor(Math.random() * entity.direction.length)]
                    entity.direction = entity.direction.split("x")
                    entity.direction = {"x": parseInt(entity.direction[0]), "y": parseInt(entity.direction[1])}
                }
                action.move.x = entity.direction.x // * entity.speed
                action.move.y = entity.direction.y // * entity.speed

                const x = entity.position.x + action.move.x
                const y = entity.position.y + action.move.y
                Objdict.forEach(state.entities, (otherEntity) => {
                    if(entity != otherEntity
                    && otherEntity.isDead != true
                    && otherEntity.hasCollision == true
                    && x == otherEntity.position.x
                    && y == otherEntity.position.y) {
                        entity.direction.x *= -1
                        entity.direction.y *= -1
                    }
                })

                const tile = state.world.tiles[x + "x" + y]
                if(tile != undefined && tile.collision == true) {
                    this.direction.x *= -1
                    this.direction.y *= -1
                }

                return action
            })
        }
    },
}

function StandardReaction(state, entity, getActionFromAI) {
    if(Entity.isDead(entity)) return
    if(Entity.isInCamera(state, entity) == false) return

    const action = getActionFromAI() || {}
    action.move = action.move || {}
    action.move.x = action.move.x || 0
    action.move.y = action.move.y || 0

    entity.isAttacking = false

    // COLLISION WITH OTHER ENTITIES
    Objdict.forEach(state.entities, (otherEntity) => {
        if(entity != otherEntity
        && otherEntity.isDead != true
        && otherEntity.hasCollision == true
        && entity.position.x + action.move.x == otherEntity.position.x
        && entity.position.y + action.move.y == otherEntity.position.y) {
            if(otherEntity.key == "player") {
                entity.isAttacking = true
                otherEntity.handleAttacked(state)
            }
            action.move.x = 0
            action.move.y = 0
        }
    })

    // COLLISION WITH MAP
    const x = entity.position.x + action.move.x
    const y = entity.position.y + action.move.y
    const tile = state.world.tiles[x + "x" + y]
    if(tile != undefined && tile.collision == true) {
        action.move.x = 0
        action.move.y = 0
    }

    entity.position.x += action.move.x
    entity.position.y += action.move.y
}

function filterInvalidMovements(state, entity, moves) {
    return moves.filter((move) => {
        const x = entity.position.x + (move.x || 0)
        const y = entity.position.y + (move.y || 0)

        Objdict.forEach(state.entities, (otherEntity) => {
            if(entity != otherEntity
            && otherEntity.isDead != true
            && otherEntity.hasCollision == true
            && otherEntity.key == "player" // THE ONLY ENTITY IT'LL RUN INTO
            && x == otherEntity.position.x
            && y == otherEntity.position.y) {
                return false
            }
        })

        const tile = state.world.tiles[x + "x" + y]
        if(tile != undefined && tile.collision == true) {
            return false
        }

        return true
    })
}
