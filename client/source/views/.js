import Preact from "preact"

import Root from "views/Mount.view.js"

function update(delta) {
    this.mount = Preact.render(<Root/>, document.body, this.mount)
}

export default {update}
