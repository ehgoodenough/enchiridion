import Preact from "preact"

import Version from "views/Version.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className="Game">
                <Version/>
            </div>
        )
    }
}
