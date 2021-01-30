import * as Preact from "preact"

import frame from "data/frame.js"
import App from "models/App.js"

import "views/Camera.view.less"

export default class Camera {
    render() {
        return (
            <div className="Camera" style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get style() {
        return {
            "left": -1 * App.game.camera.position.x + "em",
            "top": -1 * App.game.camera.position.y + "em",
        }
    }
}
