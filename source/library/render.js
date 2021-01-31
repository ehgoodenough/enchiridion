import * as Preact from "preact"

let dom = document.getElementById("view")
let view = undefined

export default function(ViewModel) {
    view = Preact.render(Preact.h(ViewModel), dom, view)
}
