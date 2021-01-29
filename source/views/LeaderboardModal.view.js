import * as Preact from "preact"
import Nimble from "library/Nimble"

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
                    <Nimble.views.BrowsableLeaderboard activity={activity} size="big"/>
                </div>
            )
        } else {
            return (
                <div className="LeaderboardModal isHidden"/>
            )
        }
    }
}
