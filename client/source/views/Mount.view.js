import Preact from "preact"
import Nimble from "library/Nimble"

import Game from "views/Game.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount" id={this.id}>
                <div className="View">
                    {this.view}
                </div>
            </div>
        )
    }
    get id() {
        return `mounted-as-${Nimble.twitch.extension.mount}`
    }
    get view() {
        if(Nimble.twitch.extension.mount === "config") {
            return (
                <Config model={this.props.model}/>
            )
        }
        return (
            <Game model={this.props.model}/>
        )
    }
}
