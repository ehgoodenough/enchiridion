import * as Objdict from "objdict"

let renderables = []

import {performer, loader} from "./gl/render.js"
import * as events from "./events.js"

export default new class Canvas {
    constructor() {
        this.size = {"width": 0, "height": 0},
        this.preload = []
    }
    start(settings) {
        Object.keys(settings).forEach((key) => {
            this[key] = settings[key]
        })

        performer.start()
        loader.start(settings.preload)
    }
    render(ViewModel) {
        if(renderables != undefined) {
            events.handleEvents(renderables)
        }

        performer.clear()

        renderables = ViewModel()
        if(renderables == undefined) return
        renderables = convert(renderables)
        recurse(renderables)
    }
}

///////////////////////////////
// CONVERTING FOR RENDERING //
/////////////////////////////

function convert(root) {
    if(root == undefined) {
        return undefined
    }

    root.key = root.key || "Root"

    let queue = []
    queue.push(root)

    while(queue.length > 0)  {
        const parent = queue.shift()

        if(parent.children instanceof Array) {
            const childrenByKey = {}
            let index = 0
            while(parent.children.length > 0) {
                const child = parent.children.shift()
                index += 1

                if(child == undefined) continue

                // Support array as new siblings.
                if(child instanceof Array) {
                    parent.children = parent.children.concat(child)
                    continue
                }

                // Default and extend the key.
                child.key = child.key || index
                child.key = parent.key + "/" + child.key

                child.position = child.position || {}
                child.position.x = child.position.x || 0
                child.position.y = child.position.y || 0
                child.position.stack = child.position.stack || 0

                parent.position = parent.position || {}
                parent.position.x = parent.position.x || 0
                parent.position.y = parent.position.y || 0
                parent.position.stack = parent.position.stack || 0

                child.position.x += parent.position.x
                child.position.y += parent.position.y

                // Index by the key.
                if(childrenByKey[child.key] != undefined) {
                    console.log("Overwriting", childrenByKey[child.key], "with", child)
                }
                childrenByKey[child.key] = child

                // Recurse.
                queue.push(child)
            }

            parent.children = childrenByKey
        }
    }

    window.root = root
    return root
}

////////////////
// RECURSING //
//////////////

function recurse(renderable) {
    performer.render(renderable)

    if(renderable.children != undefined) {
        Object.values(renderable.children).sort((a, b) => {
            a = a.position ? a.position.stack : 0
            b = b.position ? b.position.stack : 0
            return a - b
        }).forEach((subrenderable) => {
            recurse(subrenderable)
        })

        // // Note! Can only sort siblings; does not handle z-stacking of cousins.
        // // If the parent does not have a stack, it is assumed at 0, regardless
        // // of that parent's children.
    }
}
