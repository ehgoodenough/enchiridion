import Preact from "preact"

import Mount from "views/Mount.view.js"
const mount = Preact.render(<Mount/>, document.body)

function update(delta) {
    Preact.render(<Mount/>, document.body, mount)
}

export default {update}
