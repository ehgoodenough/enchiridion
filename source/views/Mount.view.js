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
                    {this.screen}
                </div>
            </div>
        )
    }
    get screen() {
        if(App.screen == undefined) {
            return <Game/>
        }
        if(App.screen == "CreditsScreen") {
            return <CreditsScreen/>
        }
    }
}

function Preload() {
    return (
        <div className="Preload">
            <img src={require("assets/images/adventurer.png")}/>
            <img src={require("assets/images/gravestone.png")}/>
            <img src={require("assets/images/slime_alpha.png")}/>
            <img src={require("assets/images/slime_omega.png")}/>
            <img src={require("assets/images/ui/heart-full-white.png")}/>
            <img src={require("assets/images/ui/heart-half-white.png")}/>
            <img src={require("assets/images/ui/heart-none-white.png")}/>
            <img src={require("assets/images/ui/keyboard.png")}/>
        </div>
    )
}

function CreditsScreen() {
    return (
        <div class="CreditsScreen">
            <div class="Fade"/>
            <h1>Thanks for playing!!</h1>
            <div class="Credits">
                <div class="Credit">
                    <div class="Name">Nick Amlag</div>
                    <div class="Stuff">Art, Writing</div>
                </div>
                <div class="Credit">
                    <div class="Name">Andrew Goodenough</div>
                    <div class="Stuff">Code, Design</div>
                </div>
            </div>
        </div>
    )
}
