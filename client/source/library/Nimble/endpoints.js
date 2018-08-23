const Nimble = require(".")

module.exports.TWITCH_USER_URI = new Nimble.utility.URI("https://api.twitch.tv/kraken/users/{userId}")
module.exports.TWITCH_CHANNEL_URI = new Nimble.utility.URI("https://api.twitch.tv/kraken/channels/{channelId}")
module.exports.GAMESPARKS_CREDENTIALS_URI = new Nimble.utility.URI("https://rrna8vhqof.execute-api.us-east-1.amazonaws.com/gamma/v1/gamesparks/{nonce}")
