import Preact from "preact"

import Entity from "views/Entity.view.js"
import UI from "views/UI.view.js"
import Camera from "views/Camera.view.js"
import LeaderboardModal from "views/LeaderboardModal.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className={this.className}>
                <div className="Scene">
                    <Camera>
                        <div className="Room"/>
                        {this.entities}
                    </Camera>
                </div>
                <UI/>
                <LeaderboardModal/>
            </div>
        )
    }
    get className() {
        return [
            "Game",
            window.model.isFocused === false ? "isPaused" : "",
            window.model.game.isDone === true ? "isDone" : "",
            window.model.game.isDemo === true ? "isDemo" : "",
        ].join(" ")
    }
    get entities() {
        return window.model.game.entities.map((entity) => (
            <Entity entity={entity} key={entity.key}/>
        ))
    }
}
