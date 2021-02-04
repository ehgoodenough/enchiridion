import App from "models/App.js"

const sizes = {
    "tile": {
        "width": 16,
        "height": 16,
    }
}

export default function Root(stage) {
    // if(loader.isPreloaded != true) {
    //     return undefined
    //     // return {
    //     //     "key": "Loading",
    //     //     "type": "rectangle",
    //     //     "width": 10,
    //     //     "height": 10,
    //     //     "color": "#FFFFFF",
    //     //     "position": {"x": 5, "y": 5},
    //     // }
    // }
    if(App.screen == undefined) {
        return {
            "key": "Root",
            "type": "container",
            "children": [
                GameScreen()
            ],
        }
    }
    if(App.screen == "CreditsScreen") {
        // return (
        //     <div class="CreditsScreen">
        //         <div class="Fade"/>
        //         <h1>Thanks for playing!!</h1>
        //         <div class="Credits">
        //             <div class="Credit">
        //                 <div class="Name">Nick Amlag</div>
        //                 <div class="Stuff">Art, Writing</div>
        //             </div>
        //             <div class="Credit">
        //                 <div class="Name">Andrew Goodenough</div>
        //                 <div class="Stuff">Code, Design</div>
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}

function GameScreen() {
    return {
        "key": "GameScreen",
        "type": "container",
        "children": [
            Interface(App.game.state),
            Scene(App.game.state),
        ]
    }
}

function Interface(state) {
    return undefined
}

function Scene(state) {
    return {
        "key": "Scene",
        "type": "container",
        "position": CameraPosition(state),
        "children": [
            Object.values(state.entities).map((entity) => Entity(state, entity)),
            World(state),
        ]
    }
}

const CAMZONE_WIDTH = 10
const CAMZONE_HEIGHT = 10
function CameraPosition(state) {
    const player = state.entities.player
    if(player == undefined) return
    const x = Math.floor(player.position.x / CAMZONE_WIDTH) * CAMZONE_WIDTH
    const y = Math.floor(player.position.y / CAMZONE_HEIGHT) * CAMZONE_HEIGHT
    return {
        "x": -1 * x * sizes.tile.width,
        "y": -1 * y * sizes.tile.height,
    }
}

function Entity(state, entity) {
    return {
        "key": "Entity/" + entity.key,
        "type": "container",
        "position": {
            "x": entity.position.x * sizes.tile.width || 0,
            "y": entity.position.y * sizes.tile.height || 0,
        },
        "children": [
            {
                "key": "Sprite",
                "position": {"stack": 1},
                "image": EntityImage(state, entity),
                "opacity": EntityOpacity(state, entity),
                "tint": entity.key == "player" ? {"intensity": 0.5, "color": "#0000FF"} : undefined,
                "outline": entity.key == "player" ? {"thickness": 0.5, "color": "#00FF00"} : undefined,
                // "grayscale": UnitGrayscale(stage, unit),
                // "rotation": entity.rotation,
            },
            // HealthBar(state, entity),
        ]
    }
}

function EntityImage(state, entity) {
    if(entity.images != undefined) {
        if(entity.getImage instanceof Function) {
            return entity.getImage()
        } else {
            return entity.images.standard
        }
    }
}

function EntityOpacity(state, entity) {
    if(entity.getOpacity instanceof Function) {
        return entity.getOpacity()
    }
    if(entity.opacity != undefined) {
        return entity.opacity
    }
}

function World(state) {
    //if(state.entities.player == undefined) return
    return {
        "key": "World",
        "type": "container",
        "children": [
            Object.values(state.world.tiles).map((tile) => {
                // if(Math.abs(state.entities.player.position.x - tile.position.x) > 12) return
                // if(Math.abs(state.entities.player.position.y - tile.position.y) > 12) return
                return {
                    "key": "Tile/" + tile.position.x + "x" + tile.position.y,
                    "type": "container",
                    "position": {
                        "x": tile.position.x * sizes.tile.width,
                        "y": tile.position.y * sizes.tile.height,
                    },
                    "children": [
                        (tile.images || []).map((image, index) => {
                            return {
                                "key": "Image/" + index,
                                // "position": {"stack": image.stack},
                                "image": image.source,
                            }
                        })
                    ]
                }
            })
        ]
    }
}
