import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Rock } from "./spacerocks"
import { Laser } from './laser'
import { Gameover } from './scenes/gameover.js'

export class Player extends Laser {
    game;

    // constructor() {
    //     super();
    //
    // }

    onInitialize(engine){
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);

        this.game = engine;
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.game.addScene('Gameover', new Gameover())

    }

    hitSomething(event) {
        if (event.other instanceof Rock) {
            event.other.kill()
            this.game.goToScene('Gameover')
        }
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        let laser = new Laser();

        if (engine.input.keyboard.isHeld(Input.Keys.W) ||
            engine.input.keyboard.isHeld(Input.Keys.Up))
        {
            yspeed = -250
        }else if (engine.input.keyboard.isHeld(Input.Keys.S) ||
            engine.input.keyboard.isHeld(Input.Keys.Down))
        {
            yspeed = 250
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) ||
            engine.input.keyboard.isHeld(Input.Keys.Right))
        {
            xspeed = 250;
        }
        else if
        (engine.input.keyboard.isHeld(Input.Keys.A) ||
            engine.input.keyboard.isHeld(Input.Keys.Left))
        {
            xspeed = -250;
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            engine.currentScene.add(laser)
            laser.pos = this.pos;
        }
        if (this.pos.y < 0){
            this.pos = new Vector(400,400);
        }if (this.pos.x < 0 || this.pos.x > 800){
            this.pos = new Vector(400,400);
        }
        this.vel = new Vector(xspeed, yspeed)
    }
}