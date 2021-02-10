import Canvas from "../index.js"
import * as Objdict from "objdict"

const loader = {"images": {}}
const performer = {}

export {loader, performer}

function createShader(gl, type, source) {
    var shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    const hasCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if(hasCompiled == false) {
        console.log(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return
    }

    return shader
}
function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram()
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    var hasCompiled = gl.getProgramParameter(program, gl.LINK_STATUS)
    if(hasCompiled == false) {
        console.log(gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return
    }
    return program
}

// input
// {
//     "shaders": {
//         "vertex": "GLSL SOURCE CODE",
//         "fragment": "GLSL SOURCE CODE",
//     },
//     "attributes": ["ARRAY", "OF", "NAMES"],
//     "uniforms": ["ARRAY", "OF", "NAMES"],
// }
// output
// {
//     "program": WEBGL PROGRAM,
//     "shaders": {
//         "vertex": WEBGL SHADER,
//         "fragment": WEBGL SHADER,
//     },
//     "attributes": {
//         "ARRAY": WEBGL LOCATION,
//         "OF": WEBGL LOCATION,
//         "NAMES": WEBGL LOCATION
//     },
//     "uniforms": {
//         ...
//     }
// }
function createBundle(bundle) {
    bundle.shaders.vertex = createShader(gl, gl.VERTEX_SHADER, bundle.shaders.vertex)
    bundle.shaders.fragment = createShader(gl, gl.FRAGMENT_SHADER, bundle.shaders.fragment)
    bundle.program = createProgram(gl, bundle.shaders.vertex, bundle.shaders.fragment)

    bundle.attributes = bundle.attributes.map((attribute) => {
        return {"key": attribute, "location": gl.getAttribLocation(bundle.program, attribute)}
    })
    bundle.uniforms = bundle.uniforms.map((uniform) => {
        return {"key": uniform, "location": gl.getUniformLocation(bundle.program, uniform)}
    })

    bundle.attributes = Objdict.map(Objdict.convert(bundle.attributes), (attribute) => attribute.location)
    bundle.uniforms = Objdict.map(Objdict.convert(bundle.uniforms), (uniform) => uniform.location)

    return bundle
}

////////////////////
// INSTANTIATING //
//////////////////

let gl = undefined
const _ = {}
performer.start = function() {
    // canvas
    const dom = document.createElement("canvas")
    Canvas.dom.appendChild(dom)
    dom.width = Canvas.size.width
    dom.height = Canvas.size.height
    dom.style.width = "100%"
    dom.style.height = "100%"
    dom.style.position = "absolute"
    dom.style.imageRendering = "pixelated" // "-moz-crisp-edges"

    // gl
    gl = dom.getContext("webgl2")
    if(gl === undefined) throw new Error("webgl2 is not supported :(")

    // program setup
    // pointers
    _.bundles = {
        "sprite": createBundle({
            "shaders": {
                "vertex": require("./shaders/sprite.vertex.glsl").default,
                "fragment": require("./shaders/sprite.fragment.glsl").default,
            },
            "attributes": ["position", "textureCoord"],
            "uniforms": ["resolution", "tintIntensity", "tintColor", "outlineColor", "outlineThickness", "imageSize"],
        }),
        "rectangle": createBundle({
            "shaders": {
                "vertex": require("./shaders/rectangle.vertex.glsl").default,
                "fragment": require("./shaders/rectangle.fragment.glsl").default,
            },
            "attributes": ["position"],
            "uniforms": ["resolution", "color"],
        }),
    }

    // vertex array ??
    _.vao = gl.createVertexArray()
    gl.bindVertexArray(_.vao)

    // position
    _.positionBuffer = gl.createBuffer()

    // view port
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
}


//////////////
// LOADING //
////////////

loader.start = function() {
    return loader.loadAll(Canvas.preload || []).then((images) => {
        images.forEach((image) => {
            if(image == undefined) return
            performer.processImageIntoTexture(image)
        })
        loader.isPreloaded = true
    })
}

loader.loadAll = function(sources) {
    if(sources == undefined) {
        return Promise.resolve([])
    }
    if(sources instanceof Array) {
        return Promise.all(sources.map((source) => {
            if(source == undefined) return Promise.resolve()
            return loader.load(source)
        }))
    }
}
loader.load = function(source) {
    if(loader.images[source] != undefined) {
        return Promise.resolve(loader.images[source])
    }
    const image = new Image()
    loader.images[source] = image
    image.src = source
    return new Promise((resolve, reject) => {
        image.onload = function() {
            image.isLoaded = true
            resolve(image)
        }
    })
}

performer.processImageIntoTexture = function(image) {
    const texCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0,  0.0, 1.0,  0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,  1.0]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(_.bundles["sprite"].attributes["textureCoord"])
    var size = 2          // 2 components per iteration
    var type = gl.FLOAT   // the data is 32bit floats
    var normalize = false // don't normalize the data
    var stride = 0        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0        // start at the beginning of the buffer
    gl.vertexAttribPointer(_.bundles["sprite"].attributes["textureCoord"], size, type, normalize, stride, offset)

    // Create a texture.
    var texture = gl.createTexture()

    // make unit 0 the active texture uint
    // (ie, the unit all other texture commands will affect
    gl.activeTexture(gl.TEXTURE0 + 0)
    image.index = 0

    // Bind it to texture unit 0' 2D bind point
    gl.bindTexture(gl.TEXTURE_2D, texture)

    // Set the parameters so we don't need mips and so we're not filtering
    // and we don't repeat
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

    // Upload the image into the texture.
    var mipLevel = 0               // the largest mip
    var internalFormat = gl.RGBA   // format we want in the texture
    var srcFormat = gl.RGBA        // format of data we are supplying
    var srcType = gl.UNSIGNED_BYTE  // type of data we are supplying
    gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, image)
    image.isProcessedIntoTexture = true
    image.texture = texture
}

/////////////////
// PERFORMING //
///////////////

performer.clear = function() {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
}

performer.render = function(renderable) {
    // {
    //     "type": "sprite", // if type is left off, it assumes sprite.
    //     "position": {"x": 0, "y": 0},
    //     // "anchor": {"x": 0, "y": 0}, // if x or y is left of, defaulted to 0. if left off entirely, it checks the Canvas.defaultAnchor
    //     // "width": 8,
    //     // "height": 8, // if width or height is left off, it'll use the default px width or height of the original image.
    //     "image": "url", // if it isn't loaded, it'll load it. if it can't find it, it'll ignore(?). if this is undefined, it'll error.
    //     "tint": {"color": 0xFFFFFF, "intensity": 1},
    //     "outline": {"color": "#FFFFFF", "thickness": 1}, // i don't think thickness is supported yet.
    // }
    if(renderable.type == "sprite"
    || renderable.type == undefined) {

        // LOAD THE IMAGE?
        if(renderable.image == undefined) {
            console.log(renderable)
            throw new Error("Could not find renderable.image")
        }

        if(loader.images[renderable.image] == undefined) {
            loader.load(renderable.image).then((image) => {
                performer.processImageIntoTexture(image)
            })
        }
        if(loader.images[renderable.image].isLoaded != true
        || loader.images[renderable.image].isProcessedIntoTexture != true) {
            return
        }

        gl.useProgram(_.bundles["sprite"].program)
        gl.bindVertexArray(_.vao)

        gl.bindTexture(gl.TEXTURE_2D, loader.images[renderable.image].texture)
        gl.uniform2f(_.bundles["sprite"].uniforms["resolution"], gl.canvas.width, gl.canvas.height)
        gl.uniform2f(_.bundles["sprite"].uniforms["imageSize"], loader.images[renderable.image].width, loader.images[renderable.image].height)
        // gl.uniform1i(_.imageUniformLocation, loader.images[renderable.image].index)

        if(renderable.tint != undefined) {
            renderable.tint.color = parseColor(renderable.tint.color)
            if(renderable.tint.alpha == undefined) renderable.tint.alpha = 1
            if(renderable.tint.intensity == undefined) renderable.tint.intensity = 1
            gl.uniform4f(_.bundles["sprite"].uniforms["tintColor"], ...renderable.tint.color, renderable.tint.alpha)
            gl.uniform1f(_.bundles["sprite"].uniforms["tintIntensity"], renderable.tint.intensity)
        } else {
            gl.uniform4f(_.bundles["sprite"].uniforms["tintColor"], 0, 0, 0, 0)
            gl.uniform1f(_.bundles["sprite"].uniforms["tintIntensity"], 0)
        }

        if(renderable.outline != undefined) {
            renderable.outline.color = parseColor(renderable.outline.color)
            if(renderable.outline.alpha == undefined) renderable.outline.alpha = 1
            if(renderable.outline.thickness == undefined) renderable.outline.thickness = 1
            gl.uniform4f(_.bundles["sprite"].uniforms["outlineColor"], ...renderable.outline.color, renderable.outline.alpha)
            gl.uniform1f(_.bundles["sprite"].uniforms["outlineThickness"], renderable.outline.thickness)
        } else {
            gl.uniform4f(_.bundles["sprite"].uniforms["outlineColor"], 0, 0, 0, 0)
            gl.uniform1f(_.bundles["sprite"].uniforms["outlineThickness"], 0)
        }

        const points = getRectanglePoints(renderable)
        gl.bindBuffer(gl.ARRAY_BUFFER, _.positionBuffer)
        gl.enableVertexAttribArray(_.bundles["sprite"].attributes["position"])
        gl.vertexAttribPointer(_.bundles["sprite"].attributes["position"], 2, gl.FLOAT, false, 0, 0)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    // {
    //     "type": "rectangle",
    //     "position": {"x": 0, "y:" 0} // if left off, skips.
    //     "color": 0xFFFFFF, // "#FFFFFF". if left off, defaults to hot pink.
    //     "alpha": 1, // if left off, defaults to 1.
    //     "width": 8, // if left off, skips.
    //     "height": 8, // if left off, skips.
    // }
    if(renderable.type == "rectangle") {
        gl.useProgram(_.bundles["rectangle"].program)
        gl.bindVertexArray(_.vao)

        gl.uniform2f(_.bundles["rectangle"].uniforms["resolution"], gl.canvas.width, gl.canvas.height)

        if(renderable.color == undefined) renderable.color = "#FF69B4"
        renderable.color = parseColor(renderable.color)
        if(renderable.alpha == undefined) renderable.alpha = 1
        gl.uniform4f(_.bundles["rectangle"].attributes["color"], ...renderable.color, renderable.alpha)

        if(renderable.width == undefined
        || renderable.height == undefined) {
            return
        }

        const points = getRectanglePoints(renderable)
        gl.bindBuffer(gl.ARRAY_BUFFER, _.positionBuffer)
        gl.enableVertexAttribArray(_.bundles["rectangle"].attributes["position"])
        gl.vertexAttribPointer(_.bundles["rectangle"].attributes["position"], 2, gl.FLOAT, false, 0, 0)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
    }
}

function parseColor(color = "#000000") {
    if(isNaN(color) == false) {
        color = "#" + color.toString(16) // assuming this is a hex number.
        while(color.length < 7) {
            color += "0"
        }
    }
    if(color[0] != "#"
    || color.length != "7") {
        throw "Not sure how to parse this: " + color
    }
    return [
        color.substring(1, 3),
        color.substring(3, 5),
        color.substring(5, 7),
    ].map((colorpart) => {
        return parseInt(colorpart, 16) / 255
    })
}

function getRectanglePoints(entity) {
    let width, height
    if(entity.image != undefined
    && loader.images[entity.image] != undefined) {
        width = loader.images[entity.image].width
        height = loader.images[entity.image].height
    }
    if(entity.width != undefined) width = entity.width
    if(entity.height != undefined) height = entity.height
    entity.anchor = entity.anchor || Canvas.defaultAnchor || {}
    entity.anchor.x = entity.anchor.x || 0
    entity.anchor.y = entity.anchor.y || 0

    entity.position = entity.position || {}
    entity.position.x = entity.position.x || 0
    entity.position.y = entity.position.y || 0
    const x1 = Math.floor(entity.position.x - (entity.anchor.x * width))
    const y1 = Math.floor(entity.position.y - (entity.anchor.y * height))
    const x2 = x1 + width
    const y2 = y1 + height
    return [
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2
    ]
}
