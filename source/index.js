import Yaafloop from "yaafloop"

import analytics from "library/analytics.js"

import model from "models/_.js"
import view from "views/_.js"

const loop = new Yaafloop((delta) => {
    model.update(delta)
    view.update(delta)
})
