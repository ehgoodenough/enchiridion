import * as Preact from "preact"

import App from "models/App.js"

import "views/World.view.less"

export default class World {
    render() {
        if(App.game.state.entities.player == undefined) return
        return (
            <div class="World">
                <div class="Tiles">
                    {Object.values(App.game.state.world.tiles).map((tile) => {
                        if(Math.abs(App.game.state.entities.player.position.x - tile.position.x) > 12) return
                        if(Math.abs(App.game.state.entities.player.position.y - tile.position.y) > 12) return
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
