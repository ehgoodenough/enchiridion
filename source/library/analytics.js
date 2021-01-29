const GA_GAME_KEY = "9387130595a40e9374321119f6ef2f73"
const GA_SECRET_KEY = "41653dad84e4f8df3671cafb2fe0d9117d47dddf"

const GameAnalytics = require("gameanalytics")
GameAnalytics._ = GameAnalytics.GameAnalytics

const analytics = module.exports = {}
analytics.isInitialized = false

analytics.initialize = function() {
    // GameAnalytics._.setEnabledInfoLog(true)
    // GameAnalytics._.setEnabledVerboseLog(true)

    GameAnalytics._.configureBuild(__VERSION__)
    GameAnalytics._.initialize(GA_GAME_KEY, GA_SECRET_KEY)

    analytics.isInitialized = true
}

analytics.reportError = function(error) {
    if(analytics.isInitialized === true) {
        GameAnalytics._.addErrorEvent(GameAnalytics.EGAErrorSeverity.Error, error.message)
    }
}

analytics.reportStartGame = function() {
    if(analytics.isInitialized === false) analytics.initialize()
    GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Start, "game")
}

analytics.reportEndGame = function() {
    if(analytics.isInitialized === false) analytics.initialize()
    GameAnalytics._.addProgressionEvent(GameAnalytics.EGAProgressionStatus.Complete, "game")
}
