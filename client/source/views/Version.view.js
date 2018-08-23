import Preact from "preact"

import "views/Version.view.less"

export default class Version {
    render() {
        return (
            <div className="Version">
                {"v" + __VERSION__}
            </div>
        )
    }
}
