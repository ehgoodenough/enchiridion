import * as view from "../view.js"

function calculateRelativePosition({x, y}, dom) {
    if(dom == undefined) return {"x": 0, "y": 0}
    const bounds = dom.getBoundingClientRect()
    x = ((x - bounds.left) / bounds.width) * view.sizes.canvas.width
    y = ((y - bounds.top) / bounds.height) * view.sizes.canvas.height
    return {x, y}
}

const events = []

const dom = document.getElementById("frame")

dom.addEventListener("mousedown", function(event) {
    const position = calculateRelativePosition({"x": event.clientX, "y": event.clientY}, dom)
    events.push({"type": "touchdown", "position": position})
})

dom.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})

export function handleEvents(renderable) {
    while(events.length > 0) {
        const event = events.shift()
        if(event.type == "touchdown") {
            eventsearch(renderable, event)
        }
    }
}

function eventsearch(renderable, event) {
    if(renderable.events != undefined
    && renderable.events[event.type] != undefined
    && renderable.events[event.type] instanceof Function
    && renderable.bounds != undefined
    && renderable.bounds.x1 <= event.position.x
    && renderable.bounds.x2 >= event.position.x
    && renderable.bounds.y1 <= event.position.y
    && renderable.bounds.y2 >= event.position.y) {
        return renderable.events[event.type](event)
    }
    if(renderable.children != undefined) {
        Object.values(renderable.children).forEach((child) => {
            eventsearch(child, event)
        })
    }
}
