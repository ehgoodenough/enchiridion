import keyb from "keyb"
import shortid from "shortid"

import Nimble from "library/Nimble"
import analytics from "library/analytics.js"

import activity from "data/activity.js"

import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"
import MonsterWave from "models/MonsterWave.js"
import Room from "models/Room.js"

export default class Game {
    constructor(game) {
        this.model = game.model
        this.key = shortid.generate()

        analytics.reportStartGame()

        this.monsters = []
        this.entities = []

        this.wave = new MonsterWave(this, {"capacity": 4})
        this.room = new Room({"width": 5, "height": 5})
        this.camera = {"position": {"x": 2.5, "y": 2.5}}
        this.add(this.adventurer = new Adventurer({
            "position": {"x": 2, "y": 2}
        }))

        this.deadtimer = 0
        this.score = 0
    }
    add(entity) {
        entity.game = this

        this.entities = this.entities || []
        this.entities.push(entity)

        if(entity.group) {
            this[entity.group] = this[entity.group] || []
            this[entity.group].push(entity)
        }
    }
    remove(entity) {
        entity.game = this

        this.entities.splice(this.entities.indexOf(entity), 1)

        if(entity.group) {
            this[entity.group] = this[entity.group] || []
            this[entity.group].splice(this[entity.group].indexOf(entity), 1)
        }
    }
    update(delta) {
        if(this.adventurer.isDead) {
            this.deadtimer += delta.s
            if(this.deadtimer > 1.5) {
                if(keyb.isJustDown("W", delta.ms)
                || keyb.isJustDown("<up>", delta.ms)
                || keyb.isJustDown("S", delta.ms)
                || keyb.isJustDown("<down>", delta.ms)
                || keyb.isJustDown("<left>", delta.ms)
                || keyb.isJustDown("D", delta.ms)
                || keyb.isJustDown("<right>", delta.ms)
                || keyb.isJustDown("<space>", delta.ms)) {
                    this.model.startNewGame()
                }
            }
        }

        this.adventurer.update(delta)
    }
    onReaction() {
        this.entities.forEach((entity) => {
            if(entity.onReaction instanceof Function) {
                entity.onReaction()
            }
        })
        this.wave.onAction()
    }
    onEnd() {
        if(this.hasEndeded !== true) {
            this.hasEnded = true
            analytics.reportEndGame()
            if(Nimble.sparks.isInitialized === true) {
                Nimble.twitchsparks.submitLeaderboardEntry({
                    "sessionId": Nimble.arcade.store.sessionId,
                    "activity": activity,
                    "score": this.score,
                })
            }
        }
    }
}
