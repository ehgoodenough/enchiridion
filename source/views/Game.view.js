import Preact from "preact"

import Camera from "views/Camera.view.js"
import Entity from "views/Entity.view.js"
import World from "views/World.view.js"
import UI from "views/UI.view.js"

import model from "models/.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className={this.className}>
                <div className="Scene">
                    <Camera>
                        <World/>
                        {this.entities}
                    </Camera>
                </div>
                <UI/>
            </div>
        )
    }
    get className() {
        return [
            "Game",
            model.game.editor.isActive === true ? "isEditing" : "",
            model.game.editor.isActive === true && model.game.editor.mode === "tiles" ? "isEditingTiles" : "",
            model.game.editor.isActive === true && model.game.editor.mode === "camzones" ? "isEditingCamzones" : "",
            model.game.isDone === true ? "isDone" : "",
            model.game.isDemo === true ? "isDemo" : "",
            model.game.isTutorial ? "isTutorial" : "",
        ].join(" ")
    }
    get entities() {
        return model.game.entities.map((entity) => (
            <Entity entity={entity} key={entity.key}/>
        ))
    }
}
