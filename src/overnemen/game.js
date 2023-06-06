import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Player } from '../player'
import { Rock } from '../spacerocks'
import { Lives } from '../lives.js'
import { Background } from "../scrollingBackground.js";

export class Begin extends Scene {
    score = 0
    scoreText

    constructor() {
        super({ width: 640, height: 480 });
    }


    onInitialize(engine) {
        //#region background
        const space = new Background();
        this.add(space);

        //#endregion background

        let player = new Player

        this.add(player)

        this.scoreText = new Label({
            font: new Font({
                // unit: FontUnit.Px,
                family: 'Helvetica',
                size: 28,
                color: Color.White,
            }),
            text: 'Time start!',
            pos: new Vector(250, 100),

        })
        this.add(this.scoreText)

        new Lives()

        const timer = new Timer({
            fcn: () => this.spawnRocks(),
            repeats: true,
            interval: 1000,
        })

        this.add(timer)

        timer.start()

        const timer2 = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval: 1000,
        })

        this.add(timer2)

        timer2.start()
    }

    spawnRocks() {
        let rocks = new Rock();
        this.add(rocks)
        rocks.pos = new Vector(Math.random() * 600, Math.random() * 400);
    }


    updateScore() {
        this.score++
        let data = {
            score : this.score
        }
        this.scoreText.text = `Survival Time: ${this.score}`
        localStorage.setItem("score", JSON.stringify(data))
    }

}