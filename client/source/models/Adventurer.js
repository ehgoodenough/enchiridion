import keyb from "keyb"
import shortid from "shortid"

import colors from "data/colors.js"

import Monster from "models/Monster.js"

export default class Adventurer {
    constructor(parameters = {}) {
        this.key = shortid.generate()

        this.position = {"x": 0, "y": 0}
        this.prevposition = {"x": 0, "y": 0}

        // this.color = colors.yellow
        this.image = require("images/monsters/adventurer.png")

        this.title = "The Adventurer"
        this.description = "It you!!"

        this.maxhealth = 3
        this.health = 3
        this.score = 0
    }
    update(delta) {
        if(this.isDead) {
            return
        }

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
        || this.position.x + action.move.x >= this.game.room.width
        || this.position.y + action.move.y >= this.game.room.height) {
            action.move.x = 0
            action.move.y = 0
        }

        this.game.entities.forEach((entity) => {
            if(entity !== this
            && entity.isDead !== true
            && this.position.x + action.move.x === entity.position.x
            && this.position.y + action.move.y === entity.position.y) {
                if(entity instanceof Monster
                && entity.beAttacked instanceof Function) {
                    entity.beAttacked()
                }
                action.move.x = 0
                action.move.y = 0
            }
        })

        // if(action.move.x === 0
        // && action.move.y === 0) {
        //     return
        // }

        this.prevposition.x = this.position.x
        this.prevposition.y = this.position.y

        this.position.x += action.move.x
        this.position.y += action.move.y

        this.game.onReaction()
    }
    beAttacked() {
        this.health -= 1
        if(this.health <= 0) {
            this.isDead = true
            // if(this.score != 0) {
            //     _game.name = window.prompt(
            //         "You died! Submit your score:",
            //         _game.name || "Bob"
            //     ) || new String()
            //     _game.name = _game.name.trim()
            //     if(_game.name != new String()) {
            //         try {
            //             _game.scores.add({
            //                 name: _game.name,
            //                 score: this.score,
            //                 date: new Date().toString()
            //             })
            //         } catch(error) {
            //             console.log(error)
            //         }
            //     }
            // }
            // window.alert("Top scores:\n" + _game.scores.get().map((entry) => {
            //     return entry.name + ": " + entry.score
            // }).join("\n"))
            // _game.start()
        }
    }
}
