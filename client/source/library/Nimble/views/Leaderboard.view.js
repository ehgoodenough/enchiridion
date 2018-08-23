// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

const Preact = require("preact")
const Nimble = require("../.")

require("./Leaderboard.view.less")

const LEADERBOARD_RENDER_LENGTH = 10
const LEADERBOARD_TOP_RENDER_LENGTH = 1
const LEADERBOARD_AROUND_ME_RENDER_LENGTH = 1

const BIG_ROW_COUNT = 9
const SMALL_ROW_COUNT = 5

module.exports = class NimbleLeaderboard {
    render() {
        return (
            <div className={this.className}>
                <div className="entries">
                    {this.entries}
                </div>
            </div>
        )
    }
    get className() {
        return `NimbleLeaderboard scoped-to-${this.props.scope}`
    }
    get leaderboardKey() {
        return this.props.activity + "/" + this.props.scope
    }
    get entries() {
        let topEntries = Nimble.sparks.leaderboards[this.leaderboardKey + "/top"]
        let aroundEntries = Nimble.sparks.leaderboards[this.leaderboardKey + "/around"]

        let entries = []
        for(var i = 0; i < (this.props.size === "small" ? SMALL_ROW_COUNT : BIG_ROW_COUNT); i += 1) {
            entries[i] = entries[i] || undefined
        }

        if(topEntries !== undefined
        && aroundEntries !== undefined) {
            let viewerName = Nimble.twitch.viewer.name || "@" + Nimble.twitch.viewer.opaqueUserId
            let viewerEntry = aroundEntries.find((entry) => {
                return entry.name === viewerName
            })
            if(viewerEntry !== undefined
            && this.props.doNotHighlightMe !== true) {
                if(this.props.size === "small") {
                    if(viewerEntry.rank >= SMALL_ROW_COUNT - 1) {
                        entries[0] = topEntries[0]
                        entries[1] = "..."
                        entries[2] = aroundEntries[1]
                        entries[3] = aroundEntries[2]
                        entries[4] = aroundEntries[3]
                    } else {
                        entries[0] = topEntries[0]
                        entries[1] = topEntries[1]
                        entries[2] = topEntries[2]
                        entries[3] = topEntries[3]
                        entries[4] = topEntries[4]
                    }
                } else {
                    if(viewerEntry.rank >= BIG_ROW_COUNT - 2) {
                        entries[0] = topEntries[0]
                        entries[1] = topEntries[1]
                        entries[2] = topEntries[2]
                        entries[3] = "..."
                        entries[4] = aroundEntries[0]
                        entries[5] = aroundEntries[1]
                        entries[6] = aroundEntries[2]
                        entries[7] = aroundEntries[3]
                        entries[8] = aroundEntries[4]
                    } else {
                        entries[0] = topEntries[0]
                        entries[1] = topEntries[1]
                        entries[2] = topEntries[2]
                        entries[3] = topEntries[3]
                        entries[4] = topEntries[4]
                        entries[5] = topEntries[5]
                        entries[6] = topEntries[6]
                        entries[7] = topEntries[7]
                        entries[8] = topEntries[8]
                    }
                }
            } else {
                if(this.props.size === "small") {
                    entries[0] = topEntries[0]
                    entries[1] = topEntries[1]
                    entries[2] = topEntries[2]
                    entries[3] = topEntries[3]
                    entries[4] = topEntries[4]
                } else {
                    entries[0] = topEntries[0]
                    entries[1] = topEntries[1]
                    entries[2] = topEntries[2]
                    entries[3] = topEntries[3]
                    entries[4] = topEntries[4]
                    entries[5] = topEntries[5]
                    entries[6] = topEntries[6]
                    entries[7] = topEntries[7]
                    entries[8] = topEntries[8]
                }
            }
        }

        // // Waiting for localization before uncommenting this.
        // if(topEntries !== undefined && topEntries.length === 0
        // && aroundEntries !== undefined && aroundEntries.length === 0) {
        //     entries[1] = "No entries... yet!!"
        // }

        return entries.map((entry, index) => {
            if(entry === undefined) {
                return (
                    <div className="entry isEmpty" key={index}/>
                )
            } else if(typeof entry === "string") {
                return (
                    <div className="entry isString" key={index}>
                        {entry}
                    </div>
                )
            } else {
                return <LeaderboardEntry entry={entry} key={index} doNotHighlightMe={this.props.doNotHighlightMe}/>
            }
        })
    }
}

class LeaderboardEntry {
    render() {
        return (
            <div className={`entry ${this.isYou ? "isYou" : ""}`} onMouseDown={this.onMouseDown}
                title={this.isYou && this.isPrivate ? "Grant us your Twitch ID!" : ""}>
                <span className="rank">
                    {this.props.entry.rank}
                </span>
                <span className="name">
                    {this.name} {this.prompt}
                </span>
                <span className="score">
                    {this.props.entry.score}
                </span>
            </div>
        )
    }
    get name() {
        if(this.isPrivate) {
            return "private player" + (this.isYou ? "?" : "")
        } else {
            return this.props.entry.name
        }
    }
    get isPrivate() {
        return this.props.entry.name[0] === "@"
    }
    get isYou() {
        if(this.props.doNotHighlightMe === true) {
            return false
        }
        return this.props.entry.name === Nimble.twitch.viewer.name
            || this.props.entry.name === "@" + Nimble.twitch.viewer.opaqueUserId
    }
    get prompt() {
        if(this.isYou && this.isPrivate) {
            return (
                <span className="prompt">
                    <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><path d="M7 9C5.346 9 4 7.654 4 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm5.526 2.947a.86.86 0 0 1 .474.767v3.428a.858.858 0 0 1-.858.858H1.857A.857.857 0 0 1 1 16.142v-3.428c0-.325.183-.62.473-.767C1.551 11.91 3.41 11 7 11s5.45.91 5.526.947zm3.784-6.909a.5.5 0 0 1 .544.107l2 2.503a.495.495 0 0 1 0 .703l-2 2.503a.5.5 0 0 1-.853-.35V8.997h-3.502a.499.499 0 0 1-.5-.497V7.51c0-.275.225-.497.5-.497H16V5.497c0-.2.122-.382.309-.459z" fill-rule="evenodd"></path></svg>
                </span>
            )
        }
    }
    get onMouseDown() {
        return (event) => {
            if(this.isYou && this.isPrivate) {
                window.Twitch.ext.actions.requestIdShare()
            }
        }
    }
}
