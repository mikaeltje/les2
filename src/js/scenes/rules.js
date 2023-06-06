import { Actor,Scene, Input, Vector,} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
export class Rules extends Scene {
    game;

    constructor() {
        super({width: 640, height: 480});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.Begin.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.game.goToScene('begin')
        }
    }
}