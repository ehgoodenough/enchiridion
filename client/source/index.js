////////////////////////////////////////////////////////
//    _____         _   _     _   _ _                //
//   |   __|___ ___| |_|_|___|_|_| |_|___ ___       //
//   |   __|   |  _|   | |  _| | . | | . |   |     //
//   |_____|_|_|___|_|_|_|_| |_|___|_|___|_|_|    //
//                                               //
//////////////////////////////////////////////////

import isInDevelopment from "data/is-dev.js"

if(isInDevelopment === true) {
    require("statgrab/do")
}

//////////////
// Looping //
////////////

import Yaafloop from "yaafloop"

import model from "models/.js"
import view from "views/.js"

const loop = new Yaafloop((delta) => {
    model.update(delta)
    view.update(delta)
})

////////////////
// Analytics //
//////////////

import analytics from "library/analytics.js"

if(isInDevelopment === false) {
    window.addEventListener("error", (error) => {
        analytics.reportError(error)
    })
}
