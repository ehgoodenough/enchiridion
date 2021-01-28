// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

const Preact = require("preact")
const Nimble = require("../")

require("./BrowsableLeaderboard.view.less")

module.exports = class NimbleBrowsableLeaderboard {
    constructor(props) {
        this.state = {}
    }
    render() {
        return (
            <div className="NimbleBrowsableLeaderboard">
                <Nimble.views.Leaderboard activity={this.props.activity} scope={this.state.selectedScope || "session"} size={this.props.size || "big"}/>
                <div className="scopes">
                    <div className="session scope" onMouseOver={this.onSelectScope("session")}>for session</div>
                    <div className="separator"/>
                    <div className="channel scope" onMouseOver={this.onSelectScope("channel")}>for channel</div>
                    <div className="separator"/>
                    <div className="global scope" onMouseOver={this.onSelectScope("global")}>for twitch</div>
                </div>
            </div>
        )
    }
    onSelectScope(scope) {
        return (event) => {
            this.state.selectedScope = scope
        }
    }
}
