import Nimble from "library/Nimble"
import analytics from "library/analytics.js"

import activity from "data/activity.js"

import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"
import MonsterWave from "models/MonsterWave.js"
import Room from "models/Room.js"

export default class Game {
    constructor(parameters) {
        this.model = parameters.model

        analytics.reportStartGame()

        parameters.game = parameters.game || {}
        parameters.game.monsters = parameters.game.monsters || []
        parameters.game.adventurer = parameters.game.adventurer || {}
        
        this.score = parameters.game.score || 0
        this.add(this.adventurer = new Adventurer(parameters.game.adventurer))
        parameters.game.monsters.forEach((monster) => this.add(new Monster(monster)))
        
        this.room = new Room({"width": 5, "height": 5})
        this.camera = {"position": {"x": 2.5, "y": 2.5}} // new Camera()
        this.wave = new MonsterWave({"game": this, "wave": {"capacity": 4}})
        
        this.isDemo = parameters.game.isDemo
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
            this.model.deathtime = 0
            if(Nimble.sparks.isInitialized === true) {
                Nimble.sparks.submitLeaderboardEntry({
                    "activity": activity,
                    "score": this.score,
                })
            }
        }
    }
    get isDone() {
        return this.adventurer.isDead === true
    }
    get isTutorial() {
        if(this.isDemo) {
            return false
        }
        if(window.hasInputted) {
            return false
        }
        return true
    }
    toState() {
        return {
            "score": this.score,
            "adventurer": this.adventurer.toState(),
            "monsters": this.monsters.map((monster) => monster.toState()),
            // "camera": this.camera,
            // "wave": this.wave.toState(),
            // "room": this.room.toState(),
        }
    }
}
