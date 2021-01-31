import * as Preact from "preact"
import * as Objdict from "objdict"

import App from "models/App.js"

import World from "views/World.view.js"
import Entity from "views/Entity.view.js"
import Camera from "views/Camera.view.js"
import UI from "views/UI.view.js"

import "views/Game.view.less"

export default class Game {
    render() {
        return (
            <div className={this.className}>
                <Camera>
                    <World/>
                    {this.entities}
                </Camera>
                <UI/>
            </div>
        )
    }
    get className() {
        return [
            "Game",
            App.game.state.hasEnded === true ? "hasEnded" : "",
            App.game.isDemo === true ? "isDemo" : "",
            App.game.isTutorial ? "isTutorial" : "",
        ].join(" ")
    }
    get entities() {
        return Object.values(App.game.state.entities).map((entity) => (
            <Entity entity={entity} key={entity.key}/>
        ))
    }
}
