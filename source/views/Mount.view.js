import Preact from "preact"

import model from "models/.js"

import Game from "views/Game.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount" id="mount">
                <div className="Frame" id="frame">
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
    onKeyDown(event) {
        event.preventDefault()
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
