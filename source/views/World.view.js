import * as Preact from "preact"

import App from "models/App.js"

import "views/World.view.less"

export default class World {
    render() {
        return (
            <div class="World">
                <div class="Tiles">
                    {Object.values(App.game.world.tiles).map((tile) => {
                        return (
                            <div class="Tile" style={{"left": tile.position.x + "em", "top": tile.position.y + "em"}}>
                                {tile.images && tile.images.map((image) => {
                                    return (
                                        <div class="Image" style={{
                                            "background-image": "url(" + image.source + ")"
                                        }}/>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
