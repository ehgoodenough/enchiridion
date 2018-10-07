export default class Room {
    constructor(room) {
        this.width = room.width || 5
        this.height = room.height || 5

        // // // this.tiles = {}
        // // // for(let x = 0; x < this.width; x += 1) {
        // // //     for(let y = 0; y < this.height; y += 1) {
        // // //         this.tiles[x + "x" + y] = {
        // // //             "position": {"x": x, "y": y},
        // // //             "key": x + "x" + y,
        // // //             "color": "#191923",
        // // //             "stack": 0
        // // //         }
        // // //     }
        // // // }
    }
    toState() {
        return {
            "width": this.width,
            "height": this.height,
        }
    }
}
