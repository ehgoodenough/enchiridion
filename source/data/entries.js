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
console.log(entries)
export default entries
