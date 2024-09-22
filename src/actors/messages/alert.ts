import {Actor, Color, Engine, Rectangle, Timer, vec, Vector} from "excalibur";

export class Alert extends Actor {
    text: string = 'Hello world';
    timeout: number;
    size = vec(500, 40);


    constructor(text: string, timeout: number) {
        super();
        this.text = text;
        this.timeout = timeout;
    }

    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        this.graphics.anchor = Vector.Zero;
        this.graphics.use(new Rectangle({
            width: this.size.x,
            height: this.size.y,
            color: Color.Gray,
        }))
        this.pos = vec(engine.canvasWidth / 2 - this.size.x / 2, 0);
        this.z = 999999;

        const hideTimer = new Timer({
            fcn: () => {
                this.kill();
            },
            repeats: false,
            interval: this.timeout,
        });
        engine.currentScene.add(hideTimer);
        hideTimer.start();
    }
}