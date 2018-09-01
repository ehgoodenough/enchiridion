import Preact from "preact"

import "views/Entity.view.less"

export default class Entity {
    render() {
        return (
            <div className={this.className} style={this.style}>
                <div className="image" style={this.imagestyle}/>
            </div>
        )
    }
    get className() {
        return `Entity ${this.props.entity.animation}`
    }
    get style() {
        let style = {}

        if(this.props.entity.position) {
            style.top = this.props.entity.position.y + "em"
            style.left = this.props.entity.position.x + "em"
        }
        if(this.props.entity.stack) {
            style.zIndex = (this.props.entity.stack * 100) + this.props.entity.position.y
        }

        if(this.props.entity.color) {
            style.backgroundColor = this.props.entity.color
        }

        if(this.props.entity.opacity) {
            style.opacity = this.props.entity.opacity
        }

        return style
    }
    get imagestyle() {
        let style = {}

        style.backgroundImage = `url(${this.props.entity.image})`
        style.backgroundPosition = [
            -1 * this.props.entity.image.x * 3 + "em",
            -1 * this.props.entity.image.y * 3 + "em",
        ].join(" ")

        if(this.props.entity.image.isFlipped) {
            style.transform = "scaleX(-1)"
        }

        return style
    }
}
