import Preact from "preact"

import Entity from "views/Entity.view.js"
import StatusUI from "views/StatusUI.view.js"
import Camera from "views/Camera.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className="Frame">
                <div className={this.className}>
                    <Camera>
                        {this.worldtiles}
                        {this.entities}
                    </Camera>
                </div>
                <StatusUI/>
            </div>
        )
    }
    get className() {
        return `Game ${window.model.game.adventurer.isDead ? "isOver" : ""}`
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
