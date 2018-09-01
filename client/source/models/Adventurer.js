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

const IDLE_ANIMATION = {
    "y": 0,
    "x": [
        {"time": 640*1.5, "frame": 0},
        {"time": 80, "frame": 1},
        {"time": 640, "frame": 2},
        {"time": 80, "frame": 1}
    ],
}
const IDLE_NORTH_ANIMATION = {"x": 3, "y": 10}
const IDLE_SOUTH_ANIMATION = {"x": 3, "y": 8}
const IDLE_EAST_ANIMATION = {"x": 3, "y": 9}
const IDLE_WEST_ANIMATION = {"x": 3, "y": 9, "isFlipped": true}
const RALLY_ANIMATION = {
    "y": 1,
    "x": [
        {"time": 640, "frame": 0},
        {"time": 80, "frame": 1},
        {"time": 640, "frame": 2},
        {"time": 80, "frame": 1}
    ],
}
const MOVE_TIME = 60
const MOVE_SOUTH_ANIMATION = {
    "y": 2,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": IDLE_ANIMATION,
    "next": IDLE_SOUTH_ANIMATION,
}
const MOVE_EAST_ANIMATION = {
    "y": 3,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": IDLE_ANIMATION,
    "next": IDLE_EAST_ANIMATION,
}
const MOVE_WEST_ANIMATION = {
    "y": 3,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3},
    ],
    "isFlipped": true,
    "next": IDLE_ANIMATION,
    "next": IDLE_WEST_ANIMATION,
}
const MOVE_NORTH_ANIMATION = {
    "y": 4,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": IDLE_ANIMATION,
    "next": IDLE_NORTH_ANIMATION,
}

class Sprite {
    constructor(sprite) {
        this.image = sprite.image
        this.time = 0

        this.animation = IDLE_ANIMATION
    }
    toString() {
        return this.image
    }
    get x() {
        if(this.animation.x instanceof Array) {
            let animationtime = 0
            for(var i in this.animation.x) {
                animationtime += this.animation.x[i].time
                if(this.time < animationtime) {
                    return this.animation.x[i].frame
                }
            }
            this.time %= animationtime
            if(this.animation.next !== undefined) {
                this.animation = this.animation.next
                console.log("!")
            }
        } else {
            return this.animation.x || 0
        }
    }
    get y() {
        return this.animation.y
    }
    get isFlipped() {
        return this.animation.isFlipped
    }
    update(delta) {
        this.time += delta.ms
    }
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

        this.image = new Sprite({
            "image": ADVENTURER_SHEET,
        })
    }
    update(delta) {
        if(this.isDead) {
            return
        }

        if(this.image.update instanceof Function) {
            this.image.update(delta)
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
                action.attack = true
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

        if(action.move.x !== 0
        || action.move.y !== 0) {
            this.image.time = 0
            if(this.direction === "east") {
                this.image.animation = MOVE_EAST_ANIMATION
            } else if(this.direction === "west") {
                this.image.animation = MOVE_WEST_ANIMATION
            } else if(this.direction === "north") {
                this.image.animation = MOVE_NORTH_ANIMATION
            } else if(this.direction === "south") {
                this.image.animation = MOVE_SOUTH_ANIMATION
            }
        }

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
    // get image() {
    //     if(this.isDead === true) {
    //         return GRAVESTONE_IMAGE
    //     } else {
    //         return ADVENTURER_IMAGE
    //     }
    // }
}
