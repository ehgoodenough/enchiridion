import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

export default class Monster {
    constructor(parameters) {
        this.game = parameters.game
        this.key = shortid.generate()

        this.position = {"x": 0, "y": 0}

        this.color = colors.red

        this.title = "Red Slime"
        this.description = "It looks gross."
    }
    onReaction() {
        const action = {
            "move": {
                "x": Math.random() < 0.5 ? -1 : +1,
                "y": Math.random() < 0.5 ? -1 : +1,
            }
        }

        if(this.position.x + action.move.x < 0
        || this.position.y + action.move.y < 0
        || this.position.x + action.move.x >= frame.width
        || this.position.y + action.move.y >= frame.height) {
            action.move.x = 0
            action.move.y = 0
        }

        this.position.x += action.move.x
        this.position.y += action.move.y
    }
    takeDamage() {
        // ...
    }
}
