import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

// import Adventurer from "models/Adventurer.js"

import SLIME_ALPHA_IMAGE from "assets/images/slime_alpha.png"
import SLIME_OMEGA_IMAGE from "assets/images/slime_omega.png"

const DIRECTIONS = {
    "-1x0": "west",
    "1x0": "east",
    "0x-1": "north",
    "0x1": "south"
}

export default class Monster {
    constructor(parameters = {}) {
        this.key = "monster-" + shortid.generate()

        this.position = parameters.position || {"x": 0, "y": 0}
        this.flipflop = parameters.flipflop || false
        this.damage = parameters.damage || 0

        // this.color = colors.red

        this.title = "Red Slime"
        this.description = "It looks gross."
        this.health = 1

        this.group = "monsters"
        this.stack = 1
    }
    get image() {
        if(this.flipflop === true) {
            return SLIME_OMEGA_IMAGE
        } else {
            return SLIME_ALPHA_IMAGE
        }
    }
    get opacity() {
        if(this.isOutOfRoom) {
            return 0.5
        } else {
            return 1
        }
    }
    get animation() {
        if(this.isAttacking) {
            return "strike" + " " + this.direction
        }

        if(this.flipflop === true) {
            return "shake"
        }

        return "ooze"
    }
    get isOutOfRoom() {
        return this.position.x < 0
            || this.position.y < 0
            || this.position.x >= this.game.room.width
            || this.position.y >= this.game.room.height
    }
    onReaction() {
        if(this.isDead) {
            return
        }

        const action = {"move": {"x": 0, "y": 0}}

        this.isAttacking = false

        if(this.flipflop == false) {
            this.flipflop = true
        } else if(this.flipflop = true) {
            this.flipflop = false

            // move towards the this.game.adventurer, prioritzing whichever vector has a longer magnitude.
            if(Math.abs(this.position.y - ((this.game.adventurer.position.y + this.game.adventurer.prevposition.y) / 2))
            >= Math.abs(this.position.x - ((this.game.adventurer.position.x + this.game.adventurer.prevposition.x) / 2))) {
                if(this.position.y > this.game.adventurer.position.y) {
                    action.move.y = -1
                } else if(this.position.y < this.game.adventurer.position.y) {
                    action.move.y = +1
                }
            } else {
                if(this.position.x > this.game.adventurer.position.x) {
                    action.move.x = -1
                } else if(this.position.x < this.game.adventurer.position.x) {
                    action.move.x = +1
                }
            }

            if(this.isOutOfRoom) {
                if(this.position.x < 0) action.move = {x: +1}
                if(this.position.x >= this.game.room.width) action.move = {x: -1}
                if(this.position.y < 0) action.move = {y: +1}
                if(this.position.y >= this.game.room.height) action.move = {y: -1}
            }
        }

        ///////////
        // MOVE //
        /////////

        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0

        this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || "none"

        if(this.isOutOfRoom !== true) {
            if(this.position.x + action.move.x < 0
            || this.position.y + action.move.y < 0
            || this.position.x + action.move.x >= this.game.room.width
            || this.position.y + action.move.y >= this.game.room.height) {
                action.move.x = 0
                action.move.y = 0
            }
        }

        this.game.entities.forEach((entity) => {
            if(entity !== this
            && this.position.x + action.move.x === entity.position.x
            && this.position.y + action.move.y === entity.position.y) {
                if(entity instanceof Adventurer) {
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
    toState() {
        return {
            "damage": this.damage,
            "position": this.position,
            "flipflop": this.flipflop,
        }
    }
}
