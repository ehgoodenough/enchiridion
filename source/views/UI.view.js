import Preact from "preact"

import model from "models/_.js"

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
                    <span>{model.game.adventurer.deathtext}</span>
                </div>
                <div className="pause-banner">
                    <span>PAUSED</span>
                </div>
                <div className="tutorial">
                    <img src={require("images/ui/keyboard.png")}/>
                    <span>MOVE INTO MONSTERS TO SLAY THEM</span>
                </div>
            </div>
        )
    }
    get hearts() {
        var hearts = new Array()
        for(var i = model.game.adventurer.health - 1; i >= 0; i -= 1) {
            if(i >= model.game.adventurer.damage) {
                if(model.game.adventurer.damage + 1 === model.game.adventurer.health) {
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
        let score = model.game.score
        return (
            <span>
                {score < 100 ? <i>0</i> : undefined}
                {score < 10 ? <i>0</i> : undefined}
                {score === 0 ? <i>{score}</i> : score}
            </span>
        )
    }
    get flash() {
        if(model.game.adventurer.isAttacked) {
            return (
                <div className="blood" key={model.game.adventurer.isAttacked}/>
            )
        }
    }
}
