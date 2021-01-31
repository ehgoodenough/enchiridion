////////////////
// Analytics //
//////////////

import analytics from "library/analytics.js"

////////////
// Frame //
//////////

import frem from "frem"
import frame from "data/frame.js"

frem(frame)


///////////
// Loop //
/////////

import Yaafloop from "yaafloop"

import App from "models/App.js"

import View from "views/Mount.view.js"
import render from "library/render.js"

const loop = new Yaafloop((delta) => {
    App.update(delta)
    render(View)
})
