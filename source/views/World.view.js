import Preact from "preact"

import model from "models/.js"

import "views/World.view.less"

const IMAGES = {
    "floor": require("images/tiles/floor.png"),
    "wall": require("images/tiles/wall.png"),
}

export default class World {
    render() {
        return (
            <div class="World">
                {Object.values(model.game.world.tiles).map((tile) => (
                    <Tile tile={tile}/>
                ))}
                {Object.values(model.game.world.camzones).map((camzone) => (
                    <Camzone camzone={camzone}/>
                ))}
            </div>
        )
    }
}

class Tile {
    render() {
        return (
            <div class="Tile" style={this.style}/>
        )
    }
    get style() {
        return {
            "left": this.props.tile.position.x + "em",
            "top": this.props.tile.position.y + "em",
            "background-image": `url(${IMAGES[this.props.tile.type]})`,
        }
    }
}

class Camzone {
    render() {
        return (
            <div class="Camzone" style={this.style}/>
        )
    }
    get style() {
        return {
            "left": this.props.camzone.position.x + "em",
            "top": this.props.camzone.position.y + "em",
            "width": this.props.camzone.position.w + 1 + "em",
            "height": this.props.camzone.position.h + 1 + "em",
        }
    }
}
