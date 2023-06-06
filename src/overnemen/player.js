import { Actor, DisplayMode, ExitViewPortEvent, Input, Vector } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);
    }

    onPreUpdate(engine) {
        let xmove = 0;
        let ymove = 0;

        if
        (engine.input.keyboard.isHeld(Input.Keys.Up) ||
            engine.input.keyboard.isHeld(Input.Keys.W))
        {
            ymove = -150;
        }

        else if
        (engine.input.keyboard.isHeld(Input.Keys.Down) ||
            engine.input.keyboard.isHeld(Input.Keys.S))
        {
            ymove = 150;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Right) ||
            engine.input.keyboard.isHeld(Input.Keys.D))
        {
            xmove = 150;
        }
        else if
        (engine.input.keyboard.isHeld(Input.Keys.Left) ||
            engine.input.keyboard.isHeld(Input.Keys.A))
        {
            xmove = -150;
        }

        this.vel.x = xmove;
        this.vel.y = ymove;
    }
}