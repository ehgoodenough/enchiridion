import * as Preact from "preact"

import activity from "data/activity.js"
import model from "models/_.js"

import "views/LeaderboardModal.view.less"

export default class LeaderboardModal {
    render() {
        if(model.game !== undefined
        && model.game.adventurer !== undefined
        && model.game.adventurer.isDead === true) {
            return (
                <div className="LeaderboardModal">
                    <header>High Scores</header>
                </div>
            )
        } else {
            return (
                <div className="LeaderboardModal isHidden"/>
            )
        }
    }
}
