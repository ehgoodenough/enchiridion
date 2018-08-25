import Preact from "preact"

import "views/StatusUI.view.less"

export default class Status {
    render() {
        return (
            <div className="Status">
                <div className="hearts">
                    {this.hearts}
                </div>
                <div className="score">
                    {window.model.game.adventurer.score}
                </div>
                <div className="message">
                    {window.model.game.message}
                </div>
            </div>
        )
    }
    get hearts() {
        var hearts = new Array()
        for(var i = 0; i < window.model.game.adventurer.maxhealth; i++) {
            if(i < window.model.game.adventurer.health) {
                hearts.push(<span className="full heart" key={i}/>)
            } else {
                hearts.push(<span className="none heart" key={i}/>)
            }
        }
        return hearts
    }
}
