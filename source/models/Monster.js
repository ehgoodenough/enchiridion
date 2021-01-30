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
        // 
    }
    toState() {
        return {
            "damage": this.damage,
            "position": this.position,
            "flipflop": this.flipflop,
        }
    }
}
