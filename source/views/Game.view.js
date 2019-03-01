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
                        <div className="Room"/>
                        {this.entities}
                    </Camera>
                </div>
                <UI/>
                {/*<LeaderboardModal/>*/}
            </div>
        )
    }
    get className() {
        return [
            "Game",
            model.isFocused === false ? "isPaused" : "",
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
