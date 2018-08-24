import Preact from "preact"

import Entity from "views/Entity.view.js"
import Version from "views/Version.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className="Game">
                {this.renderEntities()}
                <Version/>
            </div>
        )
    }
    renderEntities() {
        return window.model.game.entities.map((entity) => (
            <Entity entity={entity} key={entity.key}/>
        ))
    }
}
