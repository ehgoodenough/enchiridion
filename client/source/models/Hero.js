import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

export default class Hero {
    constructor(parameters) {
        this.game = parameters.game
        this.key = shortid.generate()

        this.position = {"x": 0, "y": 0}
        this.prevposition = {"x": 0, "y": 0}

        this.color = colors.yellow
        this.image = require("images/monsters/adventurer.png")

        this.title = "The Hero"
        this.description = "It you!!"
    }
    onTick(delta) {
        if(keyb.isJustDown("W", delta.ms)
        || keyb.isJustDown("<up>", delta.ms)) {
            this.onAction({"move": {"y": -1}})
        }
        if(keyb.isJustDown("S", delta.ms)
        || keyb.isJustDown("<down>", delta.ms)) {
            this.onAction({"move": {"y": +1}})
        }
        if(keyb.isJustDown("A", delta.ms)
        || keyb.isJustDown("<left>", delta.ms)) {
            this.onAction({"move": {"x": -1}})
        }
        if(keyb.isJustDown("D", delta.ms)
        || keyb.isJustDown("<right>", delta.ms)) {
            this.onAction({"move": {"x": +1}})
        }
    }
    onAction(action) {
        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0

        if(this.position.x + action.move.x < 0
        || this.position.y + action.move.y < 0
        || this.position.x + action.move.x >= frame.width
        || this.position.y + action.move.y >= frame.height) {
            action.move.x = 0
            action.move.y = 0
        }

        // game.forEach((entiy) => {
        //     if(entiy != this) {
        //         if(this.position.x + action.move.x == entiy.position.x
        //         && this.position.y + action.move.y == entiy.position.y) {
        //             if(entiy instanceof Monster) {
        //                 if(!!entiy.isAttacked) {
        //                     entiy.isAttacked()
        //                 }
        //             }
        //             action.move.x = 0
        //             action.move.y = 0
        //         }
        //     }
        // })

        if(action.move.x === 0
        && action.move.y === 0) {
            return
        }

        this.prevposition.x = this.position.x
        this.prevposition.y = this.position.y

        this.position.x += action.move.x
        this.position.y += action.move.y

        this.game.onReaction()
    }
    onDamage() {
        // ...
    }
}
