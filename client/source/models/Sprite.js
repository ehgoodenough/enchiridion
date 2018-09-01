export default class Sprite {
    constructor(sprite) {
        this.image = sprite.image
        this.time = 0

        this.animation = sprite.animation
    }
    toString() {
        return this.image
    }
    get x() {
        if(this.animation.x instanceof Array) {
            let animationtime = 0
            for(var i in this.animation.x) {
                animationtime += this.animation.x[i].time
                if(this.time < animationtime) {
                    return this.animation.x[i].frame
                }
            }
            this.time %= animationtime
            if(this.animation.next !== undefined) {
                this.animation = this.animation.next
            }
        } else {
            return this.animation.x || 0
        }
    }
    get y() {
        return this.animation.y
    }
    get isFlipped() {
        return this.animation.isFlipped
    }
    update(delta) {
        this.time += delta.ms
    }
}

Sprite.IDLE_ANIMATION = {
    "y": 0,
    "x": [
        {"time": 640*1.5, "frame": 0},
        {"time": 80, "frame": 1},
        {"time": 640, "frame": 2},
        {"time": 80, "frame": 1}
    ],
}
Sprite.IDLE_NORTH_ANIMATION = {"x": 3, "y": 10}
Sprite.IDLE_SOUTH_ANIMATION = {"x": 3, "y": 8}
Sprite.IDLE_EAST_ANIMATION = {"x": 3, "y": 9}
Sprite.IDLE_WEST_ANIMATION = {"x": 3, "y": 9, "isFlipped": true}
Sprite.RALLY_ANIMATION = {
    "y": 1,
    "x": [
        {"time": 350, "frame": 0},
        {"time": 50, "frame": 1},
        {"time": 700, "frame": 2},
        {"time": 50, "frame": 1}
    ],
}
const MOVE_TIME = 50
const ATTACK_TIME = 50
Sprite.MOVE_SOUTH_ANIMATION = {
    "y": 2,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": Sprite.IDLE_SOUTH_ANIMATION,
}
Sprite.MOVE_EAST_ANIMATION = {
    "y": 3,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": Sprite.IDLE_EAST_ANIMATION,
}
Sprite.MOVE_WEST_ANIMATION = {
    "y": 3,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3},
    ],
    "isFlipped": true,
    "next": Sprite.IDLE_WEST_ANIMATION,
}
Sprite.MOVE_NORTH_ANIMATION = {
    "y": 4,
    "x": [
        {"time": MOVE_TIME, "frame": 0},
        {"time": MOVE_TIME, "frame": 1},
        {"time": MOVE_TIME, "frame": 2},
        {"time": MOVE_TIME, "frame": 3}
    ],
    "next": Sprite.IDLE_NORTH_ANIMATION,
}
Sprite.ATTACK_SOUTH_ANIMATION = {
    "y": 5,
    "x": [
        {"time": ATTACK_TIME, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME * 2, "frame": 3}
    ],
    "next": Sprite.IDLE_SOUTH_ANIMATION,
}
Sprite.ATTACK_NORTH_ANIMATION = {
    "y": 7,
    "x": [
        {"time": ATTACK_TIME, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME * 2, "frame": 3}
    ],
    "next": Sprite.IDLE_NORTH_ANIMATION,
}
Sprite.ATTACK_EAST_ANIMATION = {
    "y": 6,
    "x": [
        {"time": ATTACK_TIME, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME * 2, "frame": 3}
    ],
    "next": Sprite.IDLE_EAST_ANIMATION,
}
Sprite.ATTACK_WEST_ANIMATION = {
    "y": 6,
    "x": [
        {"time": ATTACK_TIME, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME * 2, "frame": 3}
    ],
    "isFlipped": true,
    "next": Sprite.IDLE_WEST_ANIMATION,
}
Sprite.ATTACKED_SOUTH_ANIMATION = {
    "y": 8,
    "x": [
        {"time": ATTACK_TIME * 1.25, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME, "frame": 0}
    ],
    "isFlipped": true,
    "next": Sprite.IDLE_SOUTH_ANIMATION,
}
Sprite.ATTACKED_WEST_ANIMATION = {
    "y": 9,
    "x": [
        {"time": ATTACK_TIME * 1.25, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME, "frame": 0}
    ],
    "isFlipped": true,
    "next": Sprite.IDLE_WEST_ANIMATION,
}
Sprite.ATTACKED_EAST_ANIMATION = {
    "y": 9,
    "x": [
        {"time": ATTACK_TIME * 1.25, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME, "frame": 0}
    ],
    "next": Sprite.IDLE_EAST_ANIMATION,
}
Sprite.ATTACKED_NORTH_ANIMATION = {
    "y": 10,
    "x": [
        {"time": ATTACK_TIME * 1.25, "frame": 0},
        {"time": ATTACK_TIME, "frame": 1},
        {"time": ATTACK_TIME, "frame": 2},
        {"time": ATTACK_TIME, "frame": 0}
    ],
    "next": Sprite.IDLE_NORTH_ANIMATION,
}
