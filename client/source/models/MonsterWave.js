// This class is responsible for spawning the
// monsters to attack the adventurer. Each wave
// is given a limit of how many monsters it can
// spawn at any given time, how many monsters it
// can spawn before the wave is done, and an
// array of monsters to spawn.

// Someday, if we decide to pivot away from
// the arcade-like beat-em-up gameplay, we'll
// rewrite the dungeons to be responsible for
// instantiating the monsters. At that time,
// we can deprecate this class. But until
// then, enjoy the waves of monsters. :]

import frame from "data/frame.js"
import Monster from "models/Monster.js"

export default class MonsterWave {
    constructor(game, wave) {
        this.game = game

        // TODO: Change capacity from a variable
        // to a function of how many monsters have
        // already been killed, so the wave can
        // become more difficult during the wave.
        this.capacity = wave.capacity || 4
        this.killcount = wave.killcount || Infinity
    }
    onAction() {
        // If attached to a game...
        if(this.game != undefined) {
            // If there are still monsters left to kill...
            if(this.game.monsters.length < this.killcount) {
                // If, at the moment, the number of monsters is
                // less than the intended capacity of monsters...
                while(this.game.monsters.length < this.capacity) {
                    // Then spawn a new monster in the game!
                    this.game.add(new Monster({
                        "position": this.getRandomPosition(),
                    }))
                }
            }
        }
    }
    // Returns a random position to
    // spawn a monster, which should
    // generally be a position that
    // is just off-screen.
    getRandomPosition() {
        // TODO: Update this method to consult the
        // bounds of either a DungeonRoom or Camera.
        // TODO: Update this method to ensure it won't
        // collide with an already existing monster.
        if(Math.random() < 0.5) {
            return {
                x: Math.random() < 0.5 ? -1 : this.game.room.width,
                y: Math.floor(Math.random() * this.game.room.height),
            }
        } else {
            return {
                x: Math.floor(Math.random() * this.game.room.width),
                y: Math.random() < 0.5 ? -1 : this.game.room.height,
            }
        }
    }
    // // Returns a random monster
    // // to be spawned. It randomizes
    // // from the static pool of monsters
    // // that was given for this wave.
    // getRandomMonster() {
    //     // TODO: Update this method to optionally
    //     // use weighted randomness if a weight is
    //     // assigned to each monster in the wave.
    //     var index = Math.floor(Math.random() * this.monsters.length)
    //     return this.monsters[index]
    // }
    // bumpCount() {
    //     this.killcount -= 1
    //     if(this.killcount <= 0) {
    //         console.log("you win!!")
    //     }
    // }
}
