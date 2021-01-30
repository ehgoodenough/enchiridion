import Keyb from "keyb"
import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"
import Game from "models/Game.js"
const Dev = {"isInGodMode": __STAGE__ == "NONE"}

import colors from "data/colors.js"
import deathtext from "data/deathtext.js"
import GRAVESTONE_IMAGE from "assets/images/gravestone.png"
import ADVENTURER_IMAGE from "assets/images/adventurer.png"
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

export default class Player {
    static update(game, delta) {
        if(Player.isDead(game)) {
            return
        }

        // if(this.game.isDemo) {
        //     this.clock = (this.clock || 0) + delta.s
        //     if(this.clock > DEMO_CLOCK) {
        //         this.clock -= DEMO_CLOCK
        //         let move = Math.random()
        //         Player.performAction(game, {"move": {
        //             "x": move < 0.5 ? 0 : (Math.random() < 0.25 ? (this.position.x !== 0 ? -1 : +1) : (this.position.x !== 5 - 1 ? +1 : -1)),
        //             "y": move >= 0.5 ? 0 : (Math.random() < 0.25 ? (this.position.y !== 0 ? -1 : +1) : (this.position.y !== 5 - 1 ? +1 : -1)),
        //         }})
        //     }
        //     return
        // }

        if(Keyb.isJustDown("W", delta.ms)
        || Keyb.isJustDown("<up>", delta.ms)) {
            Player.performAction(game, {"move": {"y": -1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("S", delta.ms)
        || Keyb.isJustDown("<down>", delta.ms)) {
            Player.performAction(game, {"move": {"y": +1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("A", delta.ms)
        || Keyb.isJustDown("<left>", delta.ms)) {
            Player.performAction(game, {"move": {"x": -1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("D", delta.ms)
        || Keyb.isJustDown("<right>", delta.ms)) {
            Player.performAction(game, {"move": {"x": +1}})
            App.hasUsedKeyboard = true
        }

        if(Dev.isInGodMode) {
            if(Keyb.isJustDown("T", delta.ms)) {
                Player.performAction(game, {"move": {}})
            }
        }
    }
    static performAction(game, action) {
        const player = game.world.entities["player"]

        player.isAttacking = false

        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0
        this.direction = DIRECTIONS[action.move.x + "x" + action.move.y] || "none"

        Objdict.forEach(game.world.entities, (entity) => {
            if(entity != this
            && entity.isDead != true
            && player.position.x + action.move.x == entity.position.x
            && player.position.y + action.move.y == entity.position.y) {
                if(entity.key != player.key) {
                    player.isAttacking = true
                    if(entity.beAttacked instanceof Function) {
                        entity.beAttacked(game)
                    }
                }
                action.move.x = 0
                action.move.y = 0
            }
        })

        const mx = player.position.x + action.move.x
        const my = player.position.y + action.move.y
        const tile = game.world.environment.tiles[mx + "x" + my]
        if(tile != undefined && tile.collision == true) {
            action.move.x = 0
            action.move.y = 0
        }

        player.prevposition = {}
        player.prevposition.x = player.position.x
        player.prevposition.y = player.position.y

        player.position.x += action.move.x
        player.position.y += action.move.y

        Game.performReactions(game)
    }
    static isDead(game) {
        const player = game.world.entities["player"]
        return player == undefined
            || player.damage >= player.health
    }
    // beAttacked() {
    //     if(this.game.isDemo) {
    //         return
    //     }
    //     if(this.isDead !== true) {
    //         this.damage += 1
    //         this.isAttacked = shortid.generate()
    //         if(this.isDead === true) {
    //             this.deathtext = deathtext[0]
    //             deathtext.push(deathtext.shift())
    //             this.game.onEnd()
    //         }
    //     }
    // }
    // get image() {
    //     if(this.isDead === true) {
    //         return GRAVESTONE_IMAGE
    //     } else {
    //         return ADVENTURER_IMAGE
    //     }
    // }
    // toState() {
    //     return {
    //         "damage": this.damage,
    //         "position": this.position,
    //         "prevposition": this.prevposition,
    //         "isDead": this.isDead
    //     }
    // }
}
