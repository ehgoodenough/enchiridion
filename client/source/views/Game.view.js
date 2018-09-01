import Preact from "preact"

import Entity from "views/Entity.view.js"
import StatusUI from "views/StatusUI.view.js"
import Camera from "views/Camera.view.js"
import LeaderboardModal from "views/LeaderboardModal.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className={this.className}>
                <div className="Scene">
                    <Camera>
                        {this.worldtiles}
                        {this.entities}
                    </Camera>
                </div>
                <StatusUI/>
                <LeaderboardModal/>
            </div>
        )
    }
    get className() {
        return [
            "Game",
            window.model.isFocused === false ? "isPaused" : "",
            window.model.game.adventurer.isDead === true ? "isOver" : "",
        ].join(" ")
    }
    get entities() {
        return window.model.game.entities.map((entity) => (
            <Entity entity={entity} key={entity.key}/>
        ))
    }
    get worldtiles() {
        return Object.values(window.model.game.room.tiles).map((tile) => (
            <Entity entity={tile} key={tile.key}/>
        ))
    }
}
