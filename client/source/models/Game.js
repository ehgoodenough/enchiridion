import ShortID from "shortid"
import Nimble from "library/Nimble"
import GameAnalytics from "library/GameAnalytics"

import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"
import MonsterWave from "models/MonsterWave.js"
import Room from "models/Room.js"

export default class Game {
    constructor(game) {
        this.key = ShortID.generate()

        this.monsters = []
        this.entities = []

        this.add(this.adventurer = new Adventurer())

        this.wave = new MonsterWave(this, {"capacity": 4})

        this.room = new Room()
        this.camera = {"position": {"x": 0, "y": 0}}
    }
    add(entity) {
        entity.game = this

        this.entities = this.entities || []
        this.entities.push(entity)

        if(entity.group) {
            this[entity.group] = this[entity.group] || []
            this[entity.group].push(entity.group)
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
        this.entities.forEach((entity) => {
            if(entity.update instanceof Function) {
                entity.update(delta)
            }
        })
    }
    onReaction() {
        this.entities.forEach((entity) => {
            if(entity.onReaction instanceof Function) {
                entity.onReaction()
            }
        })
        this.wave.onAction()
    }
}
