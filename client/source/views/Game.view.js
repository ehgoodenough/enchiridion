import Preact from "preact"

import Entity from "views/Entity.view.js"
import Version from "views/Version.view.js"
import StatusUI from "views/StatusUI.view.js"
import Camera from "views/Camera.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className="Game">
                <StatusUI/>
                <Camera>
                    {this.worldtiles}
                    {this.entities}
                </Camera>
                <Version/>
            </div>
        )
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
