////////////////
// Analytics //
//////////////

import analytics from "library/analytics.js"

////////////
// Frame //
//////////

import frem from "frem"

frem({
    "width": 10,
    "height": 10,
})


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
