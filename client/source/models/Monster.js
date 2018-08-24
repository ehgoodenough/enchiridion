import keyb from "keyb"
import shortid from "shortid"

import frame from "data/frame.js"
import colors from "data/colors.js"

export default class Monster {
    constructor(parameters) {
        this.game = parameters.game
        this.key = shortid.generate()

        this.position = {"x": 0, "y": 0}

        this.color = colors.red

        this.title = "Red Slime"
        this.description = "It looks gross."
    }
    onReaction() {
        const action = {
            "move": {
                "x": Math.random() < 0.5 ? -1 : +1,
                "y": Math.random() < 0.5 ? -1 : +1,
            }
        }

        if(this.position.x + action.move.x < 0
        || this.position.y + action.move.y < 0
        || this.position.x + action.move.x >= frame.width
        || this.position.y + action.move.y >= frame.height) {
            action.move.x = 0
            action.move.y = 0
        }

        this.position.x += action.move.x
        this.position.y += action.move.y
    }
    takeDamage() {
        // ...
    }
}

// class Monster extends Entity {
//     constructor() {
//         // ...
//         if(!protomonster.position) {
//             if(Math.random() < 0.5) {
//                 protomonster.position = {
//                     x: Math.floor(Math.random() * SIZE),
//                     y: Math.random() < 0.5 ? -1 : SIZE
//                 }
//             } else {
//                 protomonster.position = {
//                     x: Math.random() < 0.5 ? -1 : SIZE,
//                     y: Math.floor(Math.random() * SIZE)
//                 }
//             }
//         }
//         this.isPrepared = Math.random() < 0.5
//     }
//     op() {
//         if(this.isPrepared == false) {
//             this.isPrepared = true
//             this.symbol = "G"
//         } else if(this.isPrepared = true) {
//             this.isPrepared = false
//             this.symbol = "g"
//
//             // move towards the hero, prioritzing
//             // whichever vector has a longer magnitude.
//             if(Math.abs(this.position.y - ((hero.position.y + hero.prevposition.y) / 2))
//             >= Math.abs(this.position.x - ((hero.position.x + hero.prevposition.x) / 2))) {
//                 if(this.position.y > hero.position.y) {this.move({y: -1})}
//                 else if(this.position.y < hero.position.y) {this.move({y: +1})}
//             } else {
//                 if(this.position.x > hero.position.x) {this.move({x: -1})}
//                 else if(this.position.x < hero.position.x) {this.move({x: +1})}
//             }
//         }
//     }
//     move(movement) {
//         movement.x = movement.x || 0
//         movement.y = movement.y || 0
//
//         game.forEach((entity) => {
//             if(entity != this) {
//                 if(this.position.x + movement.x == entity.position.x
//                 && this.position.y + movement.y == entity.position.y) {
//                     if(entity instanceof Hero) {
//                         if(!!entity.isAttacked) {
//                             entity.isAttacked()
//                         }
//                     }
//                     movement.x = 0
//                     movement.y = 0
//                 }
//             }
//         })
//
//         this.position.x += movement.x
//         this.position.y += movement.y
//     }
//     isAttacked() {
//         this.health -= 1
//         if(this.health <= 0) {
//             if(Math.abs(this.position.x - altar.position.x) <= 1
//             && Math.abs(this.position.y - altar.position.y) <= 1) {
//                 hero.score += 2
//                 altar.isActive = true
//                 window.setTimeout(() => {
//                     altar.isActive = false
//                 }, 250)
//             }
//             game.splice(game.indexOf(this), 1)
//             game.push(new Monster())
//             hero.score += 1
//         }
//     }
// }
