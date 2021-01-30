import * as Preact from "preact"

import App from "models/App.js"

import "views/UI.view.less"

export default class UI {
    render() {
        return (
            <div className="UI">
                <div className="hearts">
                    {this.hearts}
                </div>
                <div className="score">
                    {this.score}
                </div>
                <div className="flash">
                    {this.flash}
                </div>
                <div className="title-banner">
                    <span>Enchiridion</span>
                    <span className="play-prompt">
                        Click to play!
                    </span>
                </div>
                <div className="game-over-banner">
                    <span>{App.game.world.entities["player"].deathtext || "Game Over"}</span>
                </div>
                <div className="pause-banner">
                    <span>PAUSED</span>
                </div>
                <div className="tutorial">
                    <img src={require("assets/images/ui/keyboard.png")}/>
                    <span>MOVE INTO MONSTERS TO SLAY THEM</span>
                </div>
            </div>
        )
    }
    get hearts() {
        var hearts = new Array()
        for(var i = App.game.world.entities["player"].health - 1; i >= 0; i -= 1) {
            if(i >= App.game.world.entities["player"].damage) {
                if(App.game.world.entities["player"].damage + 1 === App.game.world.entities["player"].health) {
                    hearts.push(<span className="final full heart" key={i}/>)
                } else {
                    hearts.push(<span className="full heart" key={i}/>)
                }
            } else {
                hearts.push(<span className="none heart" key={i}/>)
            }
        }
        return hearts
    }
    get score() {
        let score = App.game.world.entities.player.score || 0
        return (
            <span>
                {score} of {window.totalCollectibles || 0}
            </span>
        )
    }
    get flash() {
        if(App.game.world.entities["player"].isAttacked) {
            return (
                <div className="blood" key={App.game.world.entities["player"].isAttacked}/>
            )
        }
    }
}
