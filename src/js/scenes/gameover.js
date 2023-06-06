import {Actor, Color, Font, Input, Label, Scene, Vector,} from "excalibur";
import {Resources} from "../resources";

// import { Resources, ResourceLoader } from "../resources.js";

export class Gameover extends Scene {
    game;
    textScore
    constructor() {
        super({width: 640, height: 480});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Title.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);

        this.enableCapturePointer = true
        this.on('pointerup',
            (ev) => engine.goToScene('gameover', { level: 4, score: 12 }))

        const eindscore = JSON.parse(localStorage.getItem("score"))
        if(eindscore) {console.log(eindscore.score)}

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: `Je hebt ${eindscore.score} secondes overleeft`,
            pos: new Vector(250, 50),

        })
        this.add(this.textScore)

    }
    onActivate(ctx) {
        if(ctx.data) {
            console.log(`LEVEL: ${ctx.data.level}`)
            console.log(`SCORE: ${ctx.data.score}`)
        }
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('rules')
        }
    }


}