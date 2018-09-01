// import Nimble from "library/Nimble"
//
// const ENDPOINT = "https://18l3hoa3a5.execute-api.us-east-1.amazonaws.com/production"
// const CHANNEL_URI = new Nimble.utility.URI(ENDPOINT + "/v1/channels/{channelId}")
// const CHANNEL_SESSION_URI = new Nimble.utility.URI(ENDPOINT + "/v1/channels/{channelId}/session")
//
// module.exports.retrieveChannel = function() {
//     return window.fetch(CHANNEL_URI({
//         "channelId": Nimble.twitch.streamer.channelId
//     }), {
//         "method": "GET",
//         "headers": {
//             "Authorization": Nimble.twitch.viewer.token
//         },
//     }).then((response) => {
//         return response.json().then((response) => {
//             if(response.channel !== undefined) {
//                 Nimble.sparks.sessionId = response.channel.sessionId || "initial-session"
//             }
//         })
//     })
// }
//
// module.exports.resetChannelSession = function() {
//     return window.fetch(CHANNEL_SESSION_URI({
//         "channelId": Nimble.twitch.streamer.channelId
//     }), {
//         "method": "POST",
//         "headers": {
//             "Authorization": Nimble.twitch.viewer.token
//         },
//     }).then((response) => {
//         return response.json().then((response) => {
//             if(response.channel !== undefined) {
//                 // console.log("response", response.channel.sessionId)
//                 Nimble.sparks.sessionId = response.channel.sessionId || "initial-session"
//                 Nimble.sparks.listenToLeaderboard("ENCHIRIDION/session", `TwitchArcade.activity.SNAP.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
//             }
//         })
//     })
// }
//
//
//
//
// import server from "library/server.js"
// import activity from "data/activity.js"
//
// Nimble.twitch.onAuthorized((authorization) => {
//     server.retrieveChannel().then(() => {
//         Nimble.sparks.initialize().then(() => {
//             Nimble.sparks.listenToLeaderboard(`${activity}/session`, `TwitchArcade.activity.${activity}.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
//             Nimble.sparks.listenToLeaderboard(`${activity}/channel`, `ChannelHighScores.activity.${activity}.channelId.${Nimble.twitch.streamer.channelId}`)
//             Nimble.sparks.listenToLeaderboard(`${activity}/global`,  `GlobalHighScores.activity.${activity}`)
//         })
//     })
// })
//
// // window.Twitch.ext.listen("broadcast", (target, type, message) => {
// //     try {
// //         message = JSON.parse(message)
// //     } catch(error) {
// //         console.log(error)
// //     }
// //
// //     if(message.path === "v1/resetChannelSession") {
// //         // console.log("broadcast", message.payload.channel.sessionId)
// //         if(Nimble.sparks.sessionId !== message.payload.channel.sessionId) {
// //             Nimble.sparks.sessionId = message.payload.channel.sessionId || "initial-session"
// //             Nimble.sparks.listenToLeaderboard("SNAP/session", `TwitchArcade.activity.SNAP.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
// //         } else {
// //             Channel.retrieveChannel().then(() => {
// //                 Nimble.sparks.initialize().then(() => {
// //                     Nimble.sparks.listenToLeaderboard("SNAP/session", `TwitchArcade.activity.SNAP.channelId.${Nimble.twitch.streamer.channelId}.sessionId.${Nimble.sparks.sessionId}`)
// //                 })
// //             }).catch((error) => {
// //                 Nimble.utility.log(error)
// //             })
// //         }
// //     }
// // })
