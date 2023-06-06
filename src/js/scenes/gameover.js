import {Actor, Color, Font, Input, Label, Scene, Vector,} from "excalibur";
import {Resources} from "../resources";


export class Gameover extends Scene {
    game;
    textScore
    constructor() {
        super({width: 640, height: 480});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Eind.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);


        const eindscore = JSON.parse(localStorage.getItem("score"))
        if(eindscore) {console.log(eindscore.score)}

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
                bold: true,
    }),
            text: `Je hebt ${eindscore.score} secondes overleeft`,
            pos: new Vector(200, 150),

        })
        this.add(this.textScore)

    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('rules')
        }
    }


}