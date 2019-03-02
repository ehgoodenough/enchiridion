import Preact from "preact"

import model from "models/.js"

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
            "marginLeft": -1 * (model.game.camera.position.x + 0.5) + "em",
            "marginTop": -1 * (model.game.camera.position.y + 0.5) + "em",
        }
    }
}
