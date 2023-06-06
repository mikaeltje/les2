import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Player } from '../player'
import { Rock } from '../spacerocks'
import { Background } from "../scrollingBackground.js";

export class Begin extends Scene {
    score = 0
    textScore


    onInitialize(engine) {

        this.enableCapturePointer = true
        this.on('pointerup',
            (ev) => engine.goToScene('gameover', { level: 4, score: 12 }))

        const space = new Background();
        this.add(space);

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: 'Start the Timer!',
            pos: new Vector(250, 50),

        })
        const rockTimer = new Timer({
            fcn: () => this.spawnRocks(),
            repeats: true,
            interval: 800,
        })

        this.add(rockTimer)

        rockTimer.start()

        const scoreTimer = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval: 1000,
        })

        this.add(scoreTimer)

        scoreTimer.start()
        this.add(this.textScore)

    }
    onActivate(_context) {
        this.score = 0;

        let player = new Player

        this.add(player)
    }

    spawnRocks() {
        let rocks = new Rock();
        this.add(rocks)
        rocks.pos = new Vector(800, Math.random() * 600);
    }

    updateScore() {
        this.score++
        let data = {
            score: this.score
        }
        this.textScore.text = `Survival Time: ${this.score}`
        localStorage.setItem("score", JSON.stringify(data))
    }
}