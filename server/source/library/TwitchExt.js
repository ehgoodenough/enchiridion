const JWT = require("jsonwebtoken")
const request = require("request-promise-native")

const SEND_EXPIRATION_TIME = 2 * 24 * 60 * 60 * 1000
const SEND_PERMISSIONS = {"send": ["*"]}
const SEND_API_URI = "https://api.twitch.tv/extensions/message/:channelId"

const TwitchExt = module.exports

// Example usage:
// TwitchExt.broadcast({
//     channelId: "88171886",
//     clientId: CLIENT,
//     secret: SECRET,
//     message: "Hello World!!"
// })

TwitchExt.broadcast = function(parameters) {
    parameters.targets = ["broadcast"]
    TwitchExt.send(parameters)
}


TwitchExt.send = function(parameters) {
    let uri = SEND_API_URI.replace(":channelId", parameters.channelId)

    let authorization = JWT.sign({
        "role": "external",
        "pubsub_perms": SEND_PERMISSIONS,
        "exp": Date.now() + SEND_EXPIRATION_TIME,
        "channel_id": parameters.channelId,
        "user_id": "186376434"
    }, parameters.secret)

    let body = {
        "targets": parameters.targets,
        // "targets": ["whisper-U136770106"],
        // "targets": ["whisper-Upc0Rw-2BL4M96XPR2q12"],
        "message": JSON.stringify(parameters.message),
        "content_type": "application/json"
    }

    let headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authorization}`,
        "Client-Id": parameters.clientId,
    }

    return request({
        "resolveWithFullResponse": true,
        "uri": uri,
        "method": "POST",
        "headers": headers,
        "json": true,
        "body": body,
    })
}
