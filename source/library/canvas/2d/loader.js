const loader = {
    "images": {}
}

loader.getImage = function(imageSource) {
    imageSource = loader.normalizeImageSource(imageSource)

    if(loader.images[imageSource] == undefined) {
        loader.loadImage(imageSource)
        return undefined
    }
    if(loader.images[imageSource] instanceof Promise) {
        return undefined
    }
    return loader.images[imageSource]
}

loader.loadImage = function(imageSource) {
    imageSource = loader.normalizeImageSource(imageSource)

    if(loader.images[imageSource] != undefined) {
        return
    }
    loader.images[imageSource] = {"isLoaded": false}
    return new Promise((resolve, reject) => {
        loader.images[imageSource] = new Image()
        loader.images[imageSource].onload = function() {
            loader.images[imageSource].isLoaded = true
            resolve(loader.images[imageSource])
        }
        loader.images[imageSource].src = imageSource
    })
}

loader.normalizeImageSource = function(imageSource) {
    if(imageSource == undefined) {
        throw new Error("Image source must be defined!")
    }
    if(imageSource.default != undefined) {
        imageSource = imageSource.default
    }
    if(typeof imageSource != "string") {
        throw new Error("Image source must be a string!")
    }
    return imageSource
}

// import * as Canvas from "../index.js"
// TODO: read this from Canvas.preload

let preloaderQueue = []
// import units from "@frog/source/data/units.js"
// Object.values(units).forEach((unit) => {
//     Object.values(unit.images.sprites).forEach((sprite) => {
//         if(sprite instanceof Array) {
//             preloaderQueue = preloaderQueue.concat(sprite.filter((frame) => !!frame.image).map((frame) => frame.image))
//         }
//     })
// })
//
// import encounters from "@frog/source/data/encounters/encounters.js"
// const tiles = encounters["level0"].stage.world.tilesets[0].source.tiles
// preloaderQueue = preloaderQueue.concat(Object.values(tiles).map((tile) => tile.image))
//
// import ActionArrowLayer from "@frog/source/views/app/stage/ActionArrowLayer.view.js"
// preloaderQueue = preloaderQueue.concat(Object.values(ActionArrowLayer.images.block))

Promise.all(preloaderQueue.map((imageSource) => loader.loadImage(imageSource))).then(() => {
    loader.isPreloaded = true
})

export default loader
