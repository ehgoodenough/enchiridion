const GameAnalytics = require("gameanalytics").GameAnalytics

const GA_GAME_KEY = "###"
const GA_SECRET_KEY = "###"

module.exports.initialize = function() {
    // GameAnalytics.setEnabledInfoLog(true)
    // GameAnalytics.setEnabledVerboseLog(true)

    GameAnalytics.configureBuild(__VERSION__)
    GameAnalytics.configureUserId(Nimble.twitch.viewer.opaqueUserId)
    GameAnalytics.initialize(GA_GAME_KEY, GA_SECRET_KEY)

    GameAnalytics.addDesignEvent(`Mount:${Nimble.twitch.extension.mount}`)
    GameAnalytics.addDesignEvent(`Locale:${Nimble.twitch.extension.locale}`)
}
