import * as Preact from "preact"

import App from "models/App.js"
import State from "models/State.js"

import "views/UI.view.less"

export default class UI {
    render() {
        if(App.game.state.entities.player == undefined) return
        return (
            <div class="UI">
                <div class="hearts">
                    {this.hearts}
                </div>
                <div class="score">
                    {this.score}
                </div>
                <div class="flash">
                    {this.flash}
                </div>
                <div class="title-banner">
                    <span>Enchiridion</span>
                    <span class="play-prompt">
                        Click to play!
                    </span>
                </div>
                <div class="game-over-banner">
                    <span>{App.game.state.entities.player.deathtext || "YOU HAVE PERISHED"}</span>
                </div>
                {this.dialogue}
            </div>
        )
    }
    get dialogue() {
        if(App.game.state.script != undefined) {
            return (
                <div class="Dialogue">
                    {App.game.state.script.dialogue[0].map((text) => (
                        <div class="Text">{text}</div>
                    ))}
                </div>
            )
        }
    }
    get hearts() {
        var hearts = new Array()
        for(var i = App.game.state.entities.player.health - 1; i >= 0; i -= 1) {
            if(i >= App.game.state.entities.player.damage) {
                if(App.game.state.entities.player.damage + 1 === App.game.state.entities.player.health) {
                    hearts.push(<span class="final full heart" key={i}/>)
                } else {
                    hearts.push(<span class="full heart" key={i}/>)
                }
            } else {
                hearts.push(<span class="none heart" key={i}/>)
            }
        }
        return hearts
    }
    get score() {
        const collectibles = State.getCollectibleProgress(App.game.state)
        return (
            <span>
                {collectibles.current} of {collectibles.total}{collectibles.current == collectibles.total ? "!!" : ""}
            </span>
        )
    }
    get flash() {
        if(App.game.state.entities.player.isAttacked) {
            return (
                <div class="blood" key={App.game.state.entities.player.isAttacked}/>
            )
        }
    }
}
