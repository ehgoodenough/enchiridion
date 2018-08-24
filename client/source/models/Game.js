import ShortID from "shortid"
import Nimble from "library/Nimble"
import GameAnalytics from "library/GameAnalytics"

import Hero from "models/Hero.js"

export default class Game {
    constructor(game) {
        this.key = ShortID.generate()

        this.hero = new Hero({"game": this})
        this.entities = [this.hero]
    }
    update(delta) {
        this.hero.update(delta)
    }
    takeAction() {
        this.entities.forEach((entity) => {
            if(entity !== this.hero) {
                if(entity.takeAction instanceof Function) {
                    entity.takeAction()
                }
            }
        })
    }
}
