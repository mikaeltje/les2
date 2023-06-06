import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    offset;

    onInitialize(engine) {
        const BackgroundImage = Resources.Background.toSprite();
        this.offset = BackgroundImage.width;

        BackgroundImage.height = 600;

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: BackgroundImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: BackgroundImage,
                    pos: new Vector(BackgroundImage.width, 0),
                }
            ]
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(-100, 0);
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0);
        }
    }
}