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
import Canvas from "library/canvas/index.js"

Canvas.start({
    "size": {
        "width": 10 * 16,
        "height": 10 * 16,
    },
    "preload": [
        require("assets/images/lofi/slime_alpha.png"),
        require("assets/images/lofi/slime_omega.png"),
    ]
})

const loop = new Yaafloop((delta) => {
    Dev.atStartOfLoop()

    App.update(delta)
    Canvas.render(ViewModel)

    Dev.atEndOfLoop()
})
