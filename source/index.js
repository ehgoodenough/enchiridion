////////////////
// Analytics //
//////////////

import analytics from "library/analytics.js"

/////////////////
// Stylesheet //
///////////////

import "index.less"

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
import Dev from "library/Dev.js"

import ViewModel from "views/ViewModel.js"
import render from "library/render/render.js"

const loop = new Yaafloop((delta) => {
    Dev.atStartOfLoop()

    App.update(delta)
    render(ViewModel)

    Dev.atEndOfLoop()
})
