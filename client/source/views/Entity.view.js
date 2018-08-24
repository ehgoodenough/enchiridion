import Preact from "preact"

import "views/Entity.view.less"

export default class Entity {
    render() {
        return (
            <div className="Entity" style={this.style}/>
        )
    }
    get style() {
        return {
            "top": this.props.entity.position.y + "em",
            "left": this.props.entity.position.x + "em",
            "backgroundColor": this.props.entity.color,
        }
    }
}
