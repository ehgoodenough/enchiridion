import Keyb from "keyb"
import * as Objdict from "objdict"
import shortid from "shortid"

import App from "models/App.js"
import Game from "models/Game.js"
import State from "models/State.js"
import Entity from "models/Entity.js"
import Dev from "library/Dev.js"

import scripts from "data/scripts.js"
import directions from "data/directions.js"
import deathtext from "data/deathtext.js"

const MIN_DIALOGUE_TIME = 100 // in ms

export default class Player {
    static update(state, delta) {
        if(Entity.isDead(state, state.entities.player)) {
            return
        }

        if(state.script != undefined) {
            if(Date.now() - state.script.time > MIN_DIALOGUE_TIME) {
                if(Keyb.isJustDown("W", delta.ms)
                || Keyb.isJustDown("S", delta.ms)
                || Keyb.isJustDown("A", delta.ms)
                || Keyb.isJustDown("D", delta.ms)
                || Keyb.isJustDown("<up>", delta.ms)
                || Keyb.isJustDown("<down>", delta.ms)
                || Keyb.isJustDown("<left>", delta.ms)
                || Keyb.isJustDown("<right>", delta.ms)) {
                    state.script.time = Date.now()
                    state.script.dialogue.shift() // this mutates the source!!

                    if(state.script.dialogue[0] == undefined) {
                        if(state.script.goto != undefined) {
                            App.screen = state.script.goto // THIS WILL TELEPORT YOU TO THIS SCREEN AFTER THE DIALOGUE FINISHES
                        }
                        delete state.script
                        return
                    }
                }
            }
            return
        }

        if(Keyb.isJustDown("W", delta.ms)
        || Keyb.isJustDown("<up>", delta.ms)) {
            Player.performAction(state, {"move": {"y": -1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("S", delta.ms)
        || Keyb.isJustDown("<down>", delta.ms)) {
            Player.performAction(state, {"move": {"y": +1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("A", delta.ms)
        || Keyb.isJustDown("<left>", delta.ms)) {
            Player.performAction(state, {"move": {"x": -1}})
            App.hasUsedKeyboard = true
        }
        if(Keyb.isJustDown("D", delta.ms)
        || Keyb.isJustDown("<right>", delta.ms)) {
            Player.performAction(state, {"move": {"x": +1}})
            App.hasUsedKeyboard = true
        }

        if(Dev.isEnabled) {
            if(Keyb.isJustDown("T", delta.ms)) {
                Player.performAction(state, {"move": {}})
            }
        }
    }
    static performAction(state, action) {
        const player = state.entities.player

        player.isAttacking = false

        action.move.x = action.move.x || 0
        action.move.y = action.move.y || 0
        player.direction = {"x": action.move.x, "y": action.move.y}

        Objdict.forEach(state.entities, (entity) => {
            if(entity != this
            && entity.isDead != true
            && player.position.x + action.move.x == entity.position.x
            && player.position.y + action.move.y == entity.position.y) {
                if(entity.hasCollision == true) {
                    if(entity.key != player.key) {
                        // player.isAttacking = true // REMOVED CUZ IT BAD
                        // (entity.type == "goal" || scripts["sword1"].hasBeenTriggered == true)
                        if(entity.handleAttacked instanceof Function) {
                            entity.handleAttacked(state)
                        }
                    }
                    action.move.x = 0
                    action.move.y = 0
                } else if(entity.hasCollision == false) {
                    entity.handleSquished(state)
                }
            }
        })

        const mx = player.position.x + action.move.x
        const my = player.position.y + action.move.y
        const tile = state.world.tiles[mx + "x" + my]
        if(tile != undefined && tile.collision == true) {
            action.move.x = 0
            action.move.y = 0
            return
        }

        player.prevposition = {}
        player.prevposition.x = player.position.x
        player.prevposition.y = player.position.y

        player.position.x += action.move.x
        player.position.y += action.move.y

        State.performReactions(state)
    }
    static isDead(state) {
        const player = state.entities.player
        return player == undefined
            || player.damage >= player.health
    }
    // toState() {
    //     return {
    //         "damage": this.damage,
    //         "position": this.position,
    //         "prevposition": this.prevposition,
    //         "isDead": this.isDead
    //     }
    // }
}
