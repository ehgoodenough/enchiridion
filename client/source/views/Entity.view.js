import Preact from "preact"

import "views/Entity.view.less"

export default class Entity {
    render() {
        return (
            <div className={this.className} style={this.style}>
                <div className="image" style={{
                    backgroundImage: `url(${this.props.entity.image})`,
                    // backgroundPosition: "-1em -0em",
                }}/>
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
}
