import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../js/resources.js";

export class Victory extends Scene {
    score = 0
    scoreText

    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        console.log ("bruh i won!!!")

        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        const previous = JSON.parse(localStorage.getItem("score"))
        if(previous) {console.log(previous.score)}

        let textField = new Label({
            text: "Goodjob!!",
            pos: new Vector(170, 100),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 70,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(textField);

        this.scoreText = new Label({
            text: `You killed Sans in: ${previous.score} S`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.White,
            }),
            pos: new Vector(200, 200)
        })
        this.add(this.scoreText)

        let thirdText = new Label({
            text: "...it do be a demo for school....",
            pos: new Vector(150, 300),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 15,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(thirdText);

        let thanksText = new Label({
            text: "Thanks for playing!",
            pos: new Vector(120, 400),
            font: new Font({
                family: "Determination Mono Web Regular",
                size: 26,
                color: Color.White,
                unit: FontUnit.Px
            }),
        });
        this.add(thanksText);

        const victoryImage = new Actor();
        victoryImage.graphics.use(Resources.victoryImage.toSprite());
        victoryImage.pos = new Vector(500, 300);
        victoryImage.scale = new Vector(0.5, 0.5);
        this.add(victoryImage);



    }


}