const fs = require("fs")
const path = require("path")
const yargs = require("yargs")
const chalk = require("chalk")

const data = require("./tilemap.json")

console.log(data.layers[3].objects)

data.layers[3].objects.forEach((object) => {
    object.x *= 2
    object.y *= 2
})

// animation.frames.sort((a, b) => a.time - b.time)
//
// animation.frames.push({
//     "time": animation.frames[animation.frames.length - 1].time + DEFAULT_DURATION
// })
//
const filename = path.resolve("tilemap2.json")
console.log("Writing to " + filename)
fs.writeFileSync(filename, JSON.stringify(data, null, 4))
