import Preact from "preact"

import Entity from "views/Entity.view.js"
import UI from "views/UI.view.js"
import Camera from "views/Camera.view.js"
// import LeaderboardModal from "views/LeaderboardModal.view.js"

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
            model.game.editor.isActive === true && model.game.editor.mode === "tile" ? "isEditingTiles" : "",
            model.game.editor.isActive === true && model.game.editor.mode === "camzone" ? "isEditingCamzones" : "",
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

class World {
    render() {
        return (
            <div class="World">
                {Object.values(model.game.world.tiles).map((tile) => (
                    <Tile tile={tile}/>
                ))}
                {Object.values(model.game.world.camzones).map((camzone) => (
                    <Camzone camzone={camzone}/>
                ))}
            </div>
        )
    }
}

class Tile {
    render() {
        return (
            <div class="Tile" style={this.style}/>
        )
    }
    get style() {
        return {
            "left": this.props.tile.position.x + "em",
            "top": this.props.tile.position.y + "em",
        }
    }
}

class Camzone {
    render() {
        return (
            <div class="Camzone" style={this.style}/>
        )
    }
    get style() {
        return {
            "left": this.props.camzone.position.x + "em",
            "top": this.props.camzone.position.y + "em",
            "width": this.props.camzone.position.w + 1 + "em",
            "height": this.props.camzone.position.h + 1 + "em",
        }
    }
}
