import * as view from "../view.js"



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


import fragmentSource from "./shaders/fragment2.glsl"
import vertexSource from "./shaders/vertex.glsl"

let gl = undefined
const things = {}
performer.start = function() {
    // canvas
    const dom = document.createElement("canvas")
    document.getElementById("frame").appendChild(dom)
    dom.id = "render"
    dom.width = view.sizes.canvas.width
    dom.height = view.sizes.canvas.height

    // gl
    gl = dom.getContext("webgl2")
    if(gl === undefined) throw new Error("webgl2 is not supported :(")

    // program setup
    things.vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource)
    things.fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource)
    things.spriteprogram = createProgram(gl, things.vertexShader, things.fragmentShader)

    // pointers
    const positionAttributeLocation = gl.getAttribLocation(things.spriteprogram, "a_position")
    things.texCoordAttributeLocation = gl.getAttribLocation(things.spriteprogram, "a_texCoord")
    things.resolutionUniformLocation = gl.getUniformLocation(things.spriteprogram, "u_resolution")
    things.imageUniformLocation = gl.getUniformLocation(things.spriteprogram, "u_image")

    // vertex array ??
    things.vao = gl.createVertexArray()
    gl.bindVertexArray(things.vao)

    // position
    things.positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, things.positionBuffer)
    var size = 2          // 2 components per iteration
    var type = gl.FLOAT   // the data is 32bit floats
    var normalize = false // don't normalize the data
    var stride = 0        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0        // start at the beginning of the buffer
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

    // view port
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
}


//////////////
// LOADING //
////////////

loader.start = function(preloadQueue) {
    return loader.loadAll(preloadQueue).then((images) => {
        images.forEach((image) => {
            performer.processImageIntoTexture(image)
        })
    })
}

loader.loadAll = function(sources) {
    if(sources == undefined) {
        return Promise.resolve([])
    }
    if(sources instanceof Array) {
        return Promise.all(sources.map((source) => {
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
    gl.enableVertexAttribArray(things.texCoordAttributeLocation)
    var size = 2          // 2 components per iteration
    var type = gl.FLOAT   // the data is 32bit floats
    var normalize = false // don't normalize the data
    var stride = 0        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0        // start at the beginning of the buffer
    gl.vertexAttribPointer(things.texCoordAttributeLocation, size, type, normalize, stride, offset)

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

        gl.useProgram(things.spriteprogram)
        gl.bindVertexArray(things.vao)
        gl.uniform2f(things.resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
        gl.bindTexture(gl.TEXTURE_2D, loader.images[renderable.image].texture)

        const points = Square(renderable)
        gl.bindBuffer(gl.ARRAY_BUFFER, things.positionBuffer)
        gl.uniform1i(things.imageUniformLocation, loader.images[renderable.image].index)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
        const primitiveType = gl.TRIANGLES
        const offset = 0
        const count = 6
        gl.drawArrays(primitiveType, offset, count)
    }
    // if(renderable.type == "square") {
    //     // gl.useProgram(squareprogram)
    //     // gl.bindVertexArray(things.vao)
    //     // gl.uniform2f(things.resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
    //     const points = Square(renderable)
    //     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
    //     gl.uniform4f(colorUniformLocation, renderable.color[0], renderable.color[1], renderable.color[2], renderable.color[3])
    //     const primitiveType = gl.TRIANGLES
    //     const offset = 0
    //     const count = 6
    //     gl.drawArrays(primitiveType, offset, count)
    // }
}

function Square(entity) {
    let width, height
    if(entity.image != undefined
    && loader.images[entity.image] != undefined) {
        width = loader.images[entity.image].width
        height = loader.images[entity.image].height
        // TODO: When you move this into gldo, make sure it supports this auto-detecting width/height from the image
    }
    if(entity.width != undefined) width = entity.width
    if(entity.height != undefined) height = entity.height
    // TODO: consider anchor
    const x1 = entity.position.x
    const y1 = entity.position.y
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
