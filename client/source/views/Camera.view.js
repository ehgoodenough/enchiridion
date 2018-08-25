import Preact from "preact"

import frame from "data/frame.js"

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
            "left": (frame.width / 2) - (window.model.game.room.width / 2) + "em",
            "top": (frame.height / 2) - (window.model.game.room.height / 2) + "em",
        }
    }
}
