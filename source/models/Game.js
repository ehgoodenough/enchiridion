import analytics from "library/analytics.js"

import model from "models/.js"
import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"
import MonsterWave from "models/MonsterWave.js"
import World from "models/World.js"

export default class Game {
    constructor(game) {
        game = game || {}
        game.monsters = game.monsters || []
        game.adventurer = game.adventurer || {}
        
        this.score = game.score || 0
        this.add(this.adventurer = new Adventurer(game.adventurer))
        this.monsters = []
        game.monsters.forEach((monster) => this.add(new Monster(monster)))
        
        this.world = new World({"width": 5, "height": 5})
        this.camera = {"position": {"x": 2.5, "y": 2.5}} // new Camera()
        // this.wave = new MonsterWave({"game": this, "wave": {"capacity": 4}})
        // this.room = {"width": 5, "height": 5}
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
        
        // this.wave.onAction()
        
        // Save the state.
        if(this.isDemo !== true) {
            model.saveState()
        }
    }
    onEnd() {
        if(this.hasEndeded !== true) {
            this.hasEnded = true
            analytics.reportEndGame()
            model.deathtime = 0
        }
    }
    get isDone() {
        return this.adventurer.isDead === true
    }
    get isTutorial() {
        if(this.isDemo) {
            return false
        }
        if(model.hasUsedKeyboard) {
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
        }
    }
}
