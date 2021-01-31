import * as Preact from "preact"

import App from "models/App.js"

import "views/UI.view.less"

export default class UI {
    render() {
        if(App.game.state.entities.player == undefined) return
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
                    <span>{App.game.state.entities.player.deathtext || "Game Over"}</span>
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
        for(var i = App.game.state.entities.player.health - 1; i >= 0; i -= 1) {
            if(i >= App.game.state.entities.player.damage) {
                if(App.game.state.entities.player.damage + 1 === App.game.state.entities.player.health) {
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
        const totalCollectibles = Object.values(App.game.state.entities).filter((entity) => entity.type == "collectible")
        const currentCollectibles = totalCollectibles.filter((entity) => entity.status == "collected")
        return (
            <span>
                {currentCollectibles.length} of {totalCollectibles.length}
            </span>
        )
    }
    get flash() {
        if(App.game.state.entities.player.isAttacked) {
            return (
                <div className="blood" key={App.game.state.entities.player.isAttacked}/>
            )
        }
    }
}
