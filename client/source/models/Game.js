import ShortID from "shortid"
import Nimble from "library/Nimble"
import GameAnalytics from "library/GameAnalytics"

import Adventurer from "models/Adventurer.js"
import Monster from "models/Monster.js"

export default class Game {
    constructor(game) {
        this.key = ShortID.generate()

        this.adventurer = new Adventurer({"game": this})
        this.entities = [
            this.adventurer,
            new Monster({"game": this}),
        ]
    }
    onTick(delta) {
        this.entities.forEach((entity) => {
            if(entity.onTick instanceof Function) {
                entity.onTick(delta)
            }
        })
    }
    onReaction() {
        this.entities.forEach((entity) => {
            if(entity.onReaction instanceof Function) {
                entity.onReaction()
            }
        })
    }
}
