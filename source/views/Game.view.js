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
            model.game.isEditing === true ? "isEditing" : "",
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
