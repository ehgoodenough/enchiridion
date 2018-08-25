import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

import Adventurer from "models/Adventurer.js"

const SLIME_ALPHA_IMAGE = require("images/monsters/slime_alpha.png")
const SLIME_OMEGA_IMAGE = require("images/monsters/slime_omega.png")

export default class Monster {
    constructor(parameters = {}) {
        this.key = "monster-" + shortid.generate()

        this.position = parameters.position || {"x": 0, "y": 0}

        this.color = colors.red

        this.title = "Red Slime"
        this.description = "It looks gross."

        this.health = 1

        this.group = "monsters"
    }
    get image() {
        if(this.isReady === true) {
            return SLIME_OMEGA_IMAGE
        } else {
            return SLIME_ALPHA_IMAGE
        }
    }
    get animation() {
        if(this.isReady === true) {
            return "shake"
        } else {
            return "ooze"
        }
    }
    onReaction() {
        if(this.isDead) {
            return
        }

        const action = {"move": {"x": 0, "y": 0}}

        if(this.isReady == false) {
            this.isReady = true
        } else if(this.isReady = true) {
            this.isReady = false

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
        }

        ///////////
        // MOVE //
        /////////

        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0

        if(this.position.x + action.move.x < 0
        || this.position.y + action.move.y < 0
        || this.position.x + action.move.x >= frame.width
        || this.position.y + action.move.y >= frame.height) {
            action.move.x = 0
            action.move.y = 0
        }

        this.game.entities.forEach((entity) => {
            if(entity !== this
            && entity.isDead !== true
            && this.position.x + action.move.x === entity.position.x
            && this.position.y + action.move.y === entity.position.y) {
                if(entity instanceof Adventurer
                && entity.beAttacked instanceof Function) {
                    entity.beAttacked()
                }
                action.move.x = 0
                action.move.y = 0
            }
        })

        this.position.x += action.move.x
        this.position.y += action.move.y
    }
    beAttacked() {
        this.health -= 1
        if(this.health <= 0) {
            this.isDead = true
            this.game.adventurer.score += 1
            this.game.wave.killcount -= 1
            this.game.remove(this)
            // if(Math.abs(this.position.x - altar.position.x) <= 1
            // && Math.abs(this.position.y - altar.position.y) <= 1) {
            //     this.game.adventurer.score += 2
            //     altar.isBloody = this.id
            // }
        }
    }
}
