import Keyb from "keyb"

import FRAME from "config/FRAME.js"

export default class Hero {
    constructor(parameters) {
        this.game = parameters.game
        this.position = {"x": 0, "y": 0}
        this.prevposition = {"x": 0, "y": 0}
        this.glance = "It You!!"
    }
    update(delta) {
        if(Keyb.isJustDown("W", delta.ms)
        || Keyb.isJustDown("<up>", delta.ms)) {
            this.move({"y": -1})
        }
        if(Keyb.isJustDown("S", delta.ms)
        || Keyb.isJustDown("<down>", delta.ms)) {
            this.move({"y": +1})
        }
        if(Keyb.isJustDown("A", delta.ms)
        || Keyb.isJustDown("<left>", delta.ms)) {
            this.move({"x": -1})
        }
        if(Keyb.isJustDown("D", delta.ms)
        || Keyb.isJustDown("<right>", delta.ms)) {
            this.move({"x": +1})
        }
    }
    move(movement) {
        movement.x = movement.x || 0
        movement.y = movement.y || 0

        if(this.position.x + movement.x < 0
        || this.position.y + movement.y < 0
        || this.position.x + movement.x >= FRAME.WIDTH
        || this.position.y + movement.y >= FRAME.HEIGHT) {
            movement.x = 0
            movement.y = 0
        }

        // game.forEach((entiy) => {
        //     if(entiy != this) {
        //         if(this.position.x + movement.x == entiy.position.x
        //         && this.position.y + movement.y == entiy.position.y) {
        //             if(entiy instanceof Monster) {
        //                 if(!!entiy.isAttacked) {
        //                     entiy.isAttacked()
        //                 }
        //             }
        //             movement.x = 0
        //             movement.y = 0
        //         }
        //     }
        // })

        if(movement.x === 0
        && movement.y === 0) {
            return
        }

        this.prevposition.x = this.position.x
        this.prevposition.y = this.position.y

        this.position.x += movement.x || 0
        this.position.y += movement.y || 0

        this.game.takeAction()
    }
}
