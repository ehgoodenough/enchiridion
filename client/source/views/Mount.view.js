import Preact from "preact"
import Nimble from "library/Nimble"

import Game from "views/Game.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount" id={this.id}>
                <div className="Frame" onClick={this.onClick}>
                    <input id="input" onKeyDown={this.onKeyDown}
                        onFocus={this.onFocus} onBlur={this.onBlur}/>
                    {this.view}
                </div>
            </div>
        )
    }
    get id() {
        return `mounted-as-${Nimble.twitch.extension.mount}`
    }
    get view() {
        return (
            <Game model={this.props.model}/>
        )
        // if(Nimble.twitch.extension.mount === "config") {
        //     return (
        //         <Config model={this.props.model}/>
        //     )
        // }
    }
    onClick(event) {
        document.getElementById("input").focus()
    }
    onKeyDown(event) {
        event.preventDefault()
    }
    onFocus(event) {
        window.model.isFocused = true
    }
    onBlur(event) {
        window.model.isFocused = false
    }
}
