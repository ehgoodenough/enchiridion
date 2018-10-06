import Preact from "preact"

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
                    <span>{window.model.game.adventurer.deathtext}</span>
                </div>
                <div className="pause-banner">
                    <span>PAUSED</span>
                </div>
            </div>
        )
    }
    get hearts() {
        var hearts = new Array()
        for(var i = 0; i < window.model.game.adventurer.maxhealth; i++) {
            if(i < window.model.game.adventurer.health) {
                if(window.model.game.adventurer.health === 1) {
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
        let score = window.model.game.score
        return (
            <span>
                {score < 100 ? <i>0</i> : undefined}
                {score < 10 ? <i>0</i> : undefined}
                {score === 0 ? <i>{score}</i> : score}
            </span>
        )
    }
    get flash() {
        if(window.model.game.adventurer.isAttacked) {
            return (
                <div className="blood" key={window.model.game.adventurer.isAttacked}/>
            )
        }
    }
}
