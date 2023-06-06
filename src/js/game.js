import '../css/style.css'
import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Begin } from './scenes/beginscreen'
import { Rules } from './scenes/rules'


export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        this.addScene('rules', new Rules())
        this.addScene('begin', new Begin())
        this.goToScene('rules')
    }

}
new Game()