import keyb from "keyb"
import shortid from "shortid"

import Nimble from "library/Nimble"

import Monster from "models/Monster.js"
import Sprite from "models/Sprite.js"

import ADVENTURER_SHEET from "images/adventurer.sheet.png"
import colors from "data/colors.js"

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

        this.image = new Sprite({
            "image": ADVENTURER_SHEET,
            "animation": Sprite.RALLY_ANIMATION
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

        this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || this.direction || "none"

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
                this.image.animation = Sprite.MOVE_EAST_ANIMATION
            } else if(this.direction === "west") {
                this.image.animation = Sprite.MOVE_WEST_ANIMATION
            } else if(this.direction === "north") {
                this.image.animation = Sprite.MOVE_NORTH_ANIMATION
            } else if(this.direction === "south") {
                this.image.animation = Sprite.MOVE_SOUTH_ANIMATION
            }
        }
        if(action.attack === true) {
            this.image.time = 0
            if(this.direction === "east") {
                this.image.animation = Sprite.ATTACK_EAST_ANIMATION
            } else if(this.direction === "west") {
                this.image.animation = Sprite.ATTACK_WEST_ANIMATION
            } else if(this.direction === "north") {
                this.image.animation = Sprite.ATTACK_NORTH_ANIMATION
            } else if(this.direction === "south") {
                this.image.animation = Sprite.ATTACK_SOUTH_ANIMATION
            }
        }

        this.prevposition.x = this.position.x
        this.prevposition.y = this.position.y

        this.position.x += action.move.x
        this.position.y += action.move.y

        this.game.onReaction()
    }
    beAttacked(monster) {
        if(this.isDead !== true) {
            this.health -= 1
            this.isAttacked = shortid.generate()


            this.image.time = 0
            if(monster.position.y > this.position.y) {
                this.image.animation = Sprite.ATTACKED_SOUTH_ANIMATION
                this.direction = "south"
            } else if(monster.position.x > this.position.x) {
                this.image.animation = Sprite.ATTACKED_EAST_ANIMATION
                this.direction = "east"
            } else if(monster.position.x < this.position.x) {
                this.image.animation = Sprite.ATTACKED_WEST_ANIMATION
                this.direction = "west"
            } else if(monster.position.y < this.position.y) {
                this.image.animation = Sprite.ATTACKED_NORTH_ANIMATION
                this.direction = "north"
            }

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
