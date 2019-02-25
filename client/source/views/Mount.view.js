import Preact from "preact"

import cursor from "library/cursor.js"
import model from "models/.js"

import Game from "views/Game.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount" id={"mounted-as-none"}>
                <div className="Frame"
                    onClick={this.onClick}
                    onMouseUp={this.onMouseUp}
                    onMouseDown={this.onMouseDown}>
                    <input id="input" onKeyDown={this.onKeyDown}
                        onFocus={this.onFocus} onBlur={this.onBlur}/>
                    <Preload/>
                    {this.view}
                </div>
            </div>
        )
    }
    get view() {
        return (
            <Game model={this.props.model}/>
        )
    }
    get onClick() {
        return (event) => {
            document.getElementById("input").focus()
        }
    }
    get onMouseDown() {
        return (event) => {
            cursor.isDown = true
        }
    }
    get onMouseUp() {
        return (event) => {
            cursor.isDown = false
        }
    }
    onKeyDown(event) {
        event.preventDefault()
    }
    onFocus(event) {
        model.isFocused = true
    }
    onBlur(event) {
        model.isFocused = false
    }
}

function Preload() {
    return (
        <div className="Preload">
            <img src={require("images/monsters/adventurer.png")}/>
            <img src={require("images/monsters/gravestone.png")}/>
            <img src={require("images/monsters/slime_alpha.png")}/>
            <img src={require("images/monsters/slime_omega.png")}/>
            <img src={require("images/ui/heart-full-white.png")}/>
            <img src={require("images/ui/heart-half-white.png")}/>
            <img src={require("images/ui/heart-none-white.png")}/>
            <img src={require("images/ui/keyboard.png")}/>
        </div>
    )
}
