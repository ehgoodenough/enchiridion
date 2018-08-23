import ShortID from "shortid"
import Nimble from "library/Nimble"
import GameAnalytics from "library/GameAnalytics"

export default class Game {
    constructor(game) {
        this.key = ShortID.generate()
    }
    update(delta) {
        // console.log(delta)
    }
}
