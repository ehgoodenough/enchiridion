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
import Render from "library/render.js"
import View from "views/Mount.view.js"

const loop = new Yaafloop((delta) => {
    Render(View)
})
