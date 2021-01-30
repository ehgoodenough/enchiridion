import * as Preact from "preact"

import App from "models/App.js"

import Game from "views/Game.view.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <div className="Frame">
                    <Preload/>
                    <Game/>
                </div>
            </div>
        )
    }
}

function Preload() {
    return (
        <div className="Preload">
            <img src={require("assets/images/monsters/adventurer.png")}/>
            <img src={require("assets/images/monsters/gravestone.png")}/>
            <img src={require("assets/images/monsters/slime_alpha.png")}/>
            <img src={require("assets/images/monsters/slime_omega.png")}/>
            <img src={require("assets/images/ui/heart-full-white.png")}/>
            <img src={require("assets/images/ui/heart-half-white.png")}/>
            <img src={require("assets/images/ui/heart-none-white.png")}/>
            <img src={require("assets/images/ui/keyboard.png")}/>
        </div>
    )
}
