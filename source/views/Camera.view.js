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
    // get style() {
    //     return {
    //         "left": (frame.width / 2) - (App.game.camera.position.x) + "em",
    //         "top": (frame.height / 2) - (App.game.camera.position.y) + "em",
    //     }
    // }
    get style() {
        return {
            "marginLeft": -1 * App.game.camera.position.x + "em",
            "marginTop": -1 * App.game.camera.position.y + "em",
        }
    }
}
