import * as Preact from "preact"

import App from "models/App.js"

import "views/Camera.view.less"

import frame from "data/frame.js"
const CAMZONE_WIDTH = 10
const CAMZONE_HEIGHT = 10

export default class Camera {
    render() {
        return (
            <div className="Camera" style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get style() {
        const player = App.game.state.entities.player
        if(player == undefined) return
        const x = Math.floor(player.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH
        const y = Math.floor(player.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
        return {
            "left": -1 * x + "em",
            "top": -1 * y + "em",
        }
    }
}
