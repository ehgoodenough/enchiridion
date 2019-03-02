export default class World {
    constructor(world) {
        
        this.tiles = {}
        for(let x = 0; x < 5; x += 1) {
            for(let y = 0; y < 5; y += 1) {
                this.tiles[x + "x" + y] = {
                    "position": {"x": x, "y": y},
                    "key": x + "x" + y,
                    // "color": "#191923"
                }
            }
        }
    }
    getTile(position) {
        const key = position.x + "x" + position.y
        return this.tiles[key] || {
            "position": position,
            "key": key,
            "hasCollision": true,
        }
    }
}
