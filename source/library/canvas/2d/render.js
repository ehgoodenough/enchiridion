import * as Canvas from "../index.js"
import loader from "./loader.js"

let dom, context

export function start() {
    dom = document.createElement("canvas")
    dom.id = "render"
    dom.width = Canvas.size.width
    dom.height = Canvas.size.height
    document.getElementById("frame").appendChild(dom)

    context = dom.getContext("2d")
}

export function clear() {
    context.clearRect(0, 0, dom.width, dom.height)
}

export function render(renderable) {
    // {"type": "sprite", "position": {"x": 0, "y": 0}, "width": 100, "height": 100, "image": require("@frog/source/images/units/fegba/assassin.png").default}
    // anchor optional
    if(renderable.type == undefined
    || renderable.type == "sprite") {
        if(renderable.image == undefined) {
            // console.log("invalid sprite", renderable)
            return
        }

        const image = loader.getImage(renderable.image)
        if(image == undefined) {
            return
        }

        renderable.position.x = renderable.position.x || 0
        renderable.position.y = renderable.position.y || 0

        renderable.anchor = renderable.anchor || {}
        if(renderable.anchor.x === undefined) renderable.anchor.x = Canvas.defaultAnchor.x || 0
        if(renderable.anchor.y === undefined) renderable.anchor.y = Canvas.defaultAnchor.y || 0

        if(renderable.width === undefined) renderable.width = image.width
        if(renderable.height === undefined) renderable.height = image.height

        const x = Math.floor(renderable.position.x - (renderable.anchor.x * renderable.width))
        const y = Math.floor(renderable.position.y - (renderable.anchor.y * renderable.height))

        renderable.bounds = {}
        renderable.bounds.x1 = x
        renderable.bounds.x2 = x + renderable.width
        renderable.bounds.y1 = y
        renderable.bounds.y2 = y + renderable.height

        if(renderable.width != undefined && renderable.height != undefined) {
            context.drawImage(image, x, y, renderable.width, renderable.height)
        } else {
            context.drawImage(image, x, y)
        }
    }

    // {"type": "circle", "position": {"x": 0, "y": 0}, "radius": 100, "color": 0xFFFFFF}
    if(renderable.type == "circle") {
        if(renderable.radius == undefined
        || renderable.position == undefined
        || renderable.position.x == undefined
        || renderable.position.y == undefined) {
            console.log("invalid circle", renderable)
            return
        }

        const x = Math.floor(renderable.position.x)
        const y = Math.floor(renderable.position.y)

        if(renderable.color === undefined) renderable.color = "#FF69B4"
        if(isNaN(renderable.color) == false) renderable.color = "#" + renderable.color.toString(16)

        renderable.bounds = {}
        renderable.bounds.x1 = x - renderable.radius
        renderable.bounds.x2 = x + renderable.radius
        renderable.bounds.y1 = y - renderable.radius
        renderable.bounds.y2 = y + renderable.radius

        context.fillStyle = renderable.color
        context.beginPath()
        context.arc(x, y, renderable.radius, 0, Math.PI * 2)
        context.fill()
    }

    // {"type": "rectangle", "position": {"x": 0, "y": 0}, "width": 100, "height": 100, "color": 0xFFFFFF}
    if(renderable.type == "rectangle") {
        if(renderable.width == undefined
        || renderable.height == undefined
        || renderable.position == undefined
        || renderable.position.x == undefined
        || renderable.position.y == undefined) {
            console.log("invalid rectangle", renderable)
            return
        }

        const x = Math.floor(renderable.position.x)
        const y = Math.floor(renderable.position.y)

        renderable.bounds = {}
        renderable.bounds.x1 = x
        renderable.bounds.x2 = x + renderable.width
        renderable.bounds.y1 = y
        renderable.bounds.y2 = y + renderable.height

        if(renderable.color === undefined) renderable.color = "#FF69B4"
        if(isNaN(renderable.color) == false) renderable.color = "#" + renderable.color.toString(16)

        context.fillStyle = renderable.color
        context.fillRect(x, y, renderable.width, renderable.height)
    }
}
