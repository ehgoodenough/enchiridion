import keyb from "keyb"
import shortid from "shortid"

import colors from "data/colors.js"
import deathtext from "data/deathtext.js"
import isInDevelopment from "data/is-dev.js"

import model from "models/.js"
import Monster from "models/Monster.js"

import GRAVESTONE_IMAGE from "images/monsters/gravestone.png"
import ADVENTURER_IMAGE from "images/monsters/adventurer.png"

const DIRECTIONS = {
    "-1x0": "west",
    "1x0": "east",
    "0x-1": "north",
    "0x1": "south"
}

const DEMO_CLOCK = 0.25 // in seconds
const DEMO_MOVEMENTS = [
    {"movement": {"x": -1}},
    {"movement": {"x": +1}},
    {"movement": {"y": -1}},
    {"movement": {"y": +1}},
]

export default class Adventurer {
    constructor(parameters = {}) {
        this.key = shortid.generate()

        this.position = parameters.position || {"x": 0, "y": 0}
        this.prevposition = parameters.prevposition || {"x": this.position.x, "y": this.position.y}
        this.damage = parameters.damage || 0

        this.title = "The Adventurer"
        this.description = "It you!!"
        this.health = 3

        this.stack = 1
    }
    update(delta) {
        if(this.isDead) {
            return
        }

        if(this.game.isDemo) {
            this.clock = (this.clock || 0) + delta.s
            if(this.clock > DEMO_CLOCK) {
                this.clock -= DEMO_CLOCK
                let move = Math.random()
                // this.onAction({"move": {
                //     "x": move < 0.5 ? 0 : (Math.random() < 0.25 ? (this.position.x !== 0 ? -1 : +1) : (this.position.x !== this.game.room.width - 1 ? +1 : -1)),
                //     "y": move >= 0.5 ? 0 : (Math.random() < 0.25 ? (this.position.y !== 0 ? -1 : +1) : (this.position.y !== this.game.room.height - 1 ? +1 : -1)),
                // }})
            }
            return
        }

        if(keyb.wasJustPressed("W", delta.ms)
        || keyb.wasJustPressed("<up>", delta.ms)) {
            this.onAction({"move": {"y": -1}})
            model.hasUsedKeyboard = true
        }
        if(keyb.wasJustPressed("S", delta.ms)
        || keyb.wasJustPressed("<down>", delta.ms)) {
            this.onAction({"move": {"y": +1}})
            model.hasUsedKeyboard = true
        }
        if(keyb.wasJustPressed("A", delta.ms)
        || keyb.wasJustPressed("<left>", delta.ms)) {
            this.onAction({"move": {"x": -1}})
            model.hasUsedKeyboard = true
        }
        if(keyb.wasJustPressed("D", delta.ms)
        || keyb.wasJustPressed("<right>", delta.ms)) {
            this.onAction({"move": {"x": +1}})
            model.hasUsedKeyboard = true
        }
        
        // if(keyb.wasJustPressed("T", delta.ms)) {
        //     this.onAction({"move": {}})
        // }
    }
    onAction(action) {
        this.isAttacking = false
        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0

        this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || "none"

        this.game.entities.forEach((entity) => {
            if(entity !== this
            && entity.isDead !== true
            && entity instanceof Monster
            && this.position.x + action.move.x === entity.position.x
            && this.position.y + action.move.y === entity.position.y) {
                if(entity instanceof Monster
                && entity.beAttacked instanceof Function) {
                    this.isAttacking = true
                    entity.beAttacked()
                }
                action.move.x = 0
                action.move.y = 0
            }
        })

        let tile = this.game.world.getTile({
            "x": this.position.x + action.move.x,
            "y": this.position.y + action.move.y,
        })

        if(tile.hasCollision
        && this.game.isEditing !== true) {
            action.move.x = 0
            action.move.y = 0
            return
        }

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
        if(this.game.isDemo) {
            return
        }
        if(this.isDead !== true) {
            this.damage += 1
            this.isAttacked = shortid.generate()
            if(this.isDead === true) {
                this.deathtext = deathtext[0]
                deathtext.push(deathtext.shift())
                this.game.onEnd()
            }
        }
    }
    get isDead() {
        return this.damage >= this.health
    }
    get image() {
        if(this.isDead === true) {
            return GRAVESTONE_IMAGE
        } else {
            return ADVENTURER_IMAGE
        }
    }
    toState() {
        return {
            "damage": this.damage,
            "position": this.position,
            "prevposition": this.prevposition,
            "isDead": this.isDead
        }
    }
}
