let entries = require("data/GGJ2020 - Final Presentations (Please Stop Editing This Doc) - Sheet1.csv")
let headers = entries.shift()

entries = entries.map((entry) => {
    const entry2 = {}
    headers.forEach((header, index) => {
        if(header == "") return
        entry2[header] = entry[index]
    })
    return entry2
})

entries.forEach((entry) => {
    entry.title = entry["Game Name"]
    entry.emoji = entry["Emoji"]
    entry.youtube = parseYoutube(entry["Youtube Link"])
})

// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function parseYoutube(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return (match&&match[7].length==11)? match[7] : false
}

export default entries
