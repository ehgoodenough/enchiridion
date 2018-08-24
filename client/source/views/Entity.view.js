import Preact from "preact"

import "views/Entity.view.less"

export default class Entity {
    render() {
        return (
            <div className={this.className} style={this.style}/>
        )
    }
    get className() {
        return `Entity ${this.props.entity.animation}`
    }
    get style() {
        return {
            "top": this.props.entity.position.y + "em",
            "left": this.props.entity.position.x + "em",
            "backgroundImage": `url(${this.props.entity.image})`,
            "display": this.props.entity.isDead ? "none" : undefined
        }
    }
}
