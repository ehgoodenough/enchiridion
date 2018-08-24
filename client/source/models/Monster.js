import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

const SLIME_ALPHA_IMAGE = require("images/monsters/slime_alpha.png")
const SLIME_OMEGA_IMAGE = require("images/monsters/slime_omega.png")

export default class Monster {
    constructor(parameters) {
        this.game = parameters.game
        this.key = shortid.generate()

        this.position = {"x": 0, "y": 0}

        this.color = colors.red

        this.title = "Red Slime"
        this.description = "It looks gross."
    }
    get image() {
        if(this.isReady === true) {
            return SLIME_OMEGA_IMAGE
        } else {
            return SLIME_ALPHA_IMAGE
        }
    }
    onReaction() {
        const action = {"move": {"x": 0, "y": 0}}

        if(this.isReady == false) {
            this.isReady = true
        } else if(this.isReady = true) {
            this.isReady = false

            // move towards the this.game.hero, prioritzing whichever vector has a longer magnitude.
            if(Math.abs(this.position.y - ((this.game.hero.position.y + this.game.hero.prevposition.y) / 2))
            >= Math.abs(this.position.x - ((this.game.hero.position.x + this.game.hero.prevposition.x) / 2))) {
                if(this.position.y > this.game.hero.position.y) {
                    action.move.y = -1
                } else if(this.position.y < this.game.hero.position.y) {
                    action.move.y = +1
                }
            } else {
                if(this.position.x > this.game.hero.position.x) {
                    action.move.x = -1
                } else if(this.position.x < this.game.hero.position.x) {
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

        this.position.x += action.move.x
        this.position.y += action.move.y
    }
    takeDamage() {
        // ...
    }
}

//     isAttacked() {
//         this.health -= 1
//         if(this.health <= 0) {
//             if(Math.abs(this.position.x - altar.position.x) <= 1
//             && Math.abs(this.position.y - altar.position.y) <= 1) {
//                 this.game.hero.score += 2
//                 altar.isActive = true
//                 window.setTimeout(() => {
//                     altar.isActive = false
//                 }, 250)
//             }
//             game.splice(game.indexOf(this), 1)
//             game.push(new Monster())
//             this.game.hero.score += 1
//         }
//     }
