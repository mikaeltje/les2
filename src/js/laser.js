import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Rock } from "./spacerocks.js"

export class Laser extends Actor{
    constructor() {
        super({
            width: Resources.Laser.width,
            height: Resources.Laser.height
        });
        this.graphics.use(Resources.Laser.toSprite());
        this.pos = new Vector(200, 200);
        this.vel = new Vector(500,0);
        this.scale = new Vector(0.1, 0.1);
    }
    onInitialize(){
        this.on('collisionstart', (event) => this.hitRock(event))
        this.pointer.useGraphicsBounds = true;
        this.on("pointerup", function (e) {
            this.kill();
        });
    }
    hitRock(event) {

        if (event.other instanceof Rock) {
            event.other.kill()
        }
    }


}