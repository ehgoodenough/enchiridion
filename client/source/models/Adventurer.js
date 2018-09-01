import keyb from "keyb"
import shortid from "shortid"

import Nimble from "library/Nimble"

import colors from "data/colors.js"

import Monster from "models/Monster.js"

import GRAVESTONE_IMAGE from "images/monsters/gravestone.png"
import ADVENTURER_IMAGE from "images/monsters/adventurer.png"
import ADVENTURER_SHEET from "images/adventurer.sheet.png"

const DEATH_MESSAGES = [
    "you died",
    "you died",
    "you died again",
    "you died",
    "you died",
    "PJSalt",
    "you died",
    "press f",
    "you died",
    "ouch",
    "dang it",
    "not like this",
    "you died",
    // "rest in peace",
    // "that's rough buddy",
    // "everyone is dead",
    // "you have died",
    // "game over",
]

const DIRECTIONS = {
    "-1x0": "west",
    "1x0": "east",
    "0x-1": "north",
    "0x1": "south"
}

export default class Adventurer {
    constructor(parameters = {}) {
        this.key = shortid.generate()

        this.position = parameters.position || {"x": 0, "y": 0}
        this.prevposition = {"x": this.position.x, "y": this.position.y}

        this.title = "The Adventurer"
        this.description = "It you!!"

        this.maxhealth = 3 // 16
        this.health = this.maxhealth
        this.score = 0
        this.stack = 1
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

        if(keyb.isJustDown("T", delta.ms)) {
            this.onAction({"move": {}})
        }
    }
    onAction(action) {
        this.isAttacking = false
        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0

        this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || "none"

        this.game.entities.forEach((entity) => {
            if(entity !== this
            && entity.isDead !== true
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

        if(this.position.x + action.move.x < 0
        || this.position.y + action.move.y < 0
        || this.position.x + action.move.x >= this.game.room.width
        || this.position.y + action.move.y >= this.game.room.height) {
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
        if(this.isDead !== true) {
            this.health -= 1
            this.isAttacked = shortid.generate()
            if(this.health <= 0) {
                this.isDead = true
                this.deathmessage = DEATH_MESSAGES[0]
                DEATH_MESSAGES.unshift(DEATH_MESSAGES.pop())
                this.game.onEnd()
                if(Nimble.sparks.isInitialized === true) {
                    Nimble.twitchsparks.submitLeaderboardEntry({
                        "sessionId": Nimble.arcade.store.sessionId,
                        "activity": ACTIVITY,
                        "score": this.score,
                    })
                }
            }
        }
    }
    get image() {
        return ADVENTURER_SHEET
        // if(this.isDead === true) {
        //     return GRAVESTONE_IMAGE
        // } else {
        //     return ADVENTURER_IMAGE
        // }
    }
}
