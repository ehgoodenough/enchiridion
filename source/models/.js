import Model from "models/Model.js"

const model = new Model()

import isInDevelopment from "data/is-dev.js"
if(isInDevelopment === true) {
    window.model = model
}

export default model
