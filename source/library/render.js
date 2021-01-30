import * as Preact from "preact"

let dom = document.body
let view = undefined

export default function(ViewModel) {
    view = Preact.render(Preact.h(ViewModel), dom, view)
}
