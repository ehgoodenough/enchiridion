
// initialize utility
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

// canvas
const canvas = document.createElement("canvas")
document.getElementById("what").appendChild(canvas)
canvas.id = "render"
canvas.width = 1600
canvas.height = 900

// gl
const gl = canvas.getContext("webgl2")
if(gl === undefined) throw new Error("webgl2 is not supported :(")

// program setup
import fragment2Source from "@frog/source/webgl/shaders/fragment2.glsl"
import vertexSource from "@frog/source/webgl/shaders/vertex.glsl"
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource)
const fragment2Shader = createShader(gl, gl.FRAGMENT_SHADER, fragment2Source)
const spriteprogram = createProgram(gl, vertexShader, fragment2Shader)

// pointers
const positionAttributeLocation = gl.getAttribLocation(spriteprogram, "a_position")
const texCoordAttributeLocation = gl.getAttribLocation(spriteprogram, "a_texCoord")
const resolutionUniformLocation = gl.getUniformLocation(spriteprogram, "u_resolution")
const imageUniformLocation = gl.getUniformLocation(spriteprogram, "u_image")

// vertex array ??
var vao = gl.createVertexArray()
gl.bindVertexArray(vao)

// position
const positionBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
var size = 2          // 2 components per iteration
var type = gl.FLOAT   // the data is 32bit floats
var normalize = false // don't normalize the data
var stride = 0        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0        // start at the beginning of the buffer
gl.enableVertexAttribArray(positionAttributeLocation)
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

// view port
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)


const images = {}
function loadAll(sources) {
    if(sources == undefined) {
        return Promise.resolve([])
    }
    if(sources instanceof Array) {
        return Promise.all(sources.map((source) => {
            return load(source)
        }))
    }
}
function load(source) {
    if(images[source] != undefined) {
        return Promise.resolve(images[source])
    }
    const image = new Image()
    images[source] = image
    image.src = source
    return new Promise((resolve, reject) => {
        image.onload = function() {
            image.isLoaded = true
            resolve(image)
        }
    })
}

function processImageIntoTexture(image) {
    const texCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0,  0.0, 1.0,  0.0, 0.0,  1.0, 0.0,  1.0, 1.0,  0.0, 1.0,  1.0]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(texCoordAttributeLocation)
    var size = 2          // 2 components per iteration
    var type = gl.FLOAT   // the data is 32bit floats
    var normalize = false // don't normalize the data
    var stride = 0        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0        // start at the beginning of the buffer
    gl.vertexAttribPointer(texCoordAttributeLocation, size, type, normalize, stride, offset)

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

export function start() {
    // const sources = [
    //     require("@frog/source/images/units/frog.png").default
    // ]
    const sources = []
    return loadAll(sources).then((images) => {
        images.forEach((image) => {
            processImageIntoTexture(image)
        })
    })
}



export function render(renders) {
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    renders.forEach((render) => {
        if(render.type == "sprite"
        || render.type == undefined) {
            gl.useProgram(spriteprogram)
            gl.bindVertexArray(vao)
            gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)

            // LOAD THE IMAGE?
            if(render.image == undefined) throw new Error("Could not find render.image")
            if(images[render.image] == undefined) {
                load(render.image).then((image) => {
                    processImageIntoTexture(image)
                })
            }
            if(images[render.image].isLoaded != true
            || images[render.image].isProcessedIntoTexture != true) {
                return
            }
            gl.bindTexture(gl.TEXTURE_2D, images[render.image].texture)

            const points = Square(render)
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.uniform1i(imageUniformLocation, images[render.image].index)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
            const primitiveType = gl.TRIANGLES
            const offset = 0
            const count = 6
            gl.drawArrays(primitiveType, offset, count)
        }
        if(render.type == "square") {
            // gl.useProgram(squareprogram)
            // gl.bindVertexArray(vao)
            // gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
            const points = Square(render)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)
            gl.uniform4f(colorUniformLocation, render.color[0], render.color[1], render.color[2], render.color[3])
            const primitiveType = gl.TRIANGLES
            const offset = 0
            const count = 6
            gl.drawArrays(primitiveType, offset, count)
        }
    })
}

function Square(entity) {
    let width, height
    if(entity.image != undefined
    && images[entity.image] != undefined) {
        width = images[entity.image].width
        height = images[entity.image].height
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
