import {Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit, Input, } from "excalibur";
import {Resources} from "../resources";
// import { Resources, ResourceLoader } from "../resources.js";

export class Gameover extends Scene {
    game;
    textscore = 0;
    constructor() {
        super({ width: 640, height: 480 });
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Title.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('rules')
        }
    }
}