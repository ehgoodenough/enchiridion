import keyb from "keyb"

import isInDevelopment from "data/is-dev.js"

export default class Editor {
    constructor() {
        this.isActive = false

        this.mode = "tile"

        if(isInDevelopment === true) {
            window.export = () => {
                copy(this.game.toStruct())
                return "📋 Copied the game struct to the clipboard!!"
            }
        }
    }
    update(delta) {
        if(isInDevelopment === false) {
            return
        }

        if(keyb.wasJustPressed("`", delta.ms)) {
            this.isActive = !this.isActive
        }

        if(keyb.wasJustPressed("1", delta.ms)) {
            this.isActive = true
            this.mode = "tile"
        }

        if(keyb.wasJustPressed("2", delta.ms)) {
            this.isActive = true
            this.mode = "camera"
        }
    }
}

// To remove:
// - Remove this class from the `game`.
// - Remove all checks for `game.editor.isActive`.
// - Remove the Editor UI.
