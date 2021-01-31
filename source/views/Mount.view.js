import * as Preact from "preact"

import entries from "data/entries.js"

import "views/Mount.view.less"

export default class Mount {
    render() {
        const entry = entries[0]
        return (
            <div className="Mount" onClick={this.onClick}>
                <div class="Frame">
                    {this.screen}
                </div>
            </div>
        )
    }
    get onClick() {
        return (event) => {
            const route = this.route
            if(route.screen != "video") {
                route.screen = "video"
            } else {
                route.index += 1
                route.screen = "title"
            }
            window.location.hash = "#/" + route.index + "/" + route.screen
        }
    }
    get entry() {
        return entries[this.route.index]
    }
    get route() {
        const hashes = window.location.hash.split("/")
        return {
            "index": parseInt(hashes[1]) || 0,
            "screen": hashes[2] || "title"
        }
    }
    get screen() {
        if(this.entry == undefined) {
            return (
                <div class="EndScreen">
                    Thanks for jamming!!
                </div>
            )
        }
        if(this.route.screen == "title") {
            return (
                <div class="TitleScreen">
                    <div class="Emoji">{this.entry.emoji || "😃"}</div>
                    <div class="Title">{this.entry.title}</div>
                </div>
            )
        }
        if(this.route.screen == "video") {
            return (
                <div class="VideoScreen">
                    <Youtube youtube={this.entry.youtube}/>
                </div>
            )
        }
    }
}

class Youtube {
    render() {
        return (
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtube + "?autoplay=1"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    }
}

// TODO: Transitions between slides?
