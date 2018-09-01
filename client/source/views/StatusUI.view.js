import Preact from "preact"

import "views/StatusUI.view.less"

export default class StatusUI {
    render() {
        return (
            <div className="StatusUI">
                <div className="hearts">
                    {this.hearts}
                </div>
                <div className="score">
                    {this.score}
                </div>
                <div className="message">
                    {window.model.game.message}
                </div>
                <div className="flash">
                    {this.flash}
                </div>
                <div className="you-died-banner">
                    <span>you died</span>
                </div>
                <div className="pause-prompt">
                    <span>paused</span>
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
        let score = window.model.game.adventurer.score
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
