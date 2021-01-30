import "local-json-storage"
import analytics from "library/analytics.js"

import App from "models/App.js"
import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"
import MonsterWave from "models/MonsterWave.js"
import World from "models/World.js"
import Camera from "models/Camera.js"

export default class Game {
    constructor({game}) {
        analytics.reportStartGame()

        game = game || {}
        game.monsters = game.monsters || []
        game.adventurer = game.adventurer || {}

        this.score = game.score || 0
        this.add(this.adventurer = new Adventurer(game.adventurer))
        game.monsters.forEach((monster) => this.add(new Monster(monster)))

        this.world = new World()
        this.camera = new Camera({"game": this})
        this.camera.onReaction()

        this.monsters = []

        this.isDemo = game.isDemo
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
        this.camera.onReaction()

        this.entities.forEach((entity) => {
            if(entity.onReaction instanceof Function) {
                entity.onReaction()
            }
        })

        // this.wave.onAction()

        // Save the state.
        if(this.isDemo !== true) {
            window.localStorage.setJSON("state", {
                "date": Date.now(),
                "game": this.toState(),
                "hasUsedKeyboard": App.hasUsedKeyboard
            })
        }
    }
    onEnd() {
        if(this.hasEndeded !== true) {
            this.hasEnded = true
            analytics.reportEndGame()
            App.deathtime = 0
        }
    }
    get isDone() {
        return this.adventurer.isDead === true
    }
    get isTutorial() {
        if(this.isDemo) {
            return false
        }
        if(App.hasUsedKeyboard) {
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
