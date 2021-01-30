import * as Preact from "preact"

import "views/Entity.view.less"

export default class Entity {
    render() {
        return (
            <div className="Entity" animation={this.animation} style={this.style}/>
        )
    }
    get animation() {
        if(this.props.entity.getAnimation instanceof Function) {
            return this.props.entity.getAnimation()
        }
    }
    get style() {
        let style = {}

        if(this.props.entity.position) {
            style.top = this.props.entity.position.y + "em"
            style.left = this.props.entity.position.x + "em"
        }

        if(this.props.entity.images) {
            if(this.props.entity.getImage instanceof Function) {
                style.backgroundImage = "url(" + this.props.entity.getImage() + ")"
            } else {
                style.backgroundImage = "url(" + this.props.entity.images.standard + ")"
            }
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
