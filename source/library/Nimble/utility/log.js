const Nimble = require("../.")

module.exports = function() {
    if(Nimble.twitch.extension.state !== "in_review"
    || Nimble.twitch.extension.state !== "ready_for_review"
    || Nimble.twitch.extension.state !== "released") {
        console.log.apply(console, arguments)
    }
}
