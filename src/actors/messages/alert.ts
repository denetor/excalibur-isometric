import {Actor, Color, Engine, Font, GraphicsGroup, Rectangle, Text, Timer, vec, Vector} from "excalibur";

export class Alert extends Actor {
    text: string = 'Hello world';
    timeout: number;
    size = vec(500, 24);


    constructor(text: string, timeout: number) {
        super();
        this.text = text;
        this.timeout = timeout;
    }

    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        const window = new Rectangle({
            width: this.size.x,
            height: this.size.y,
            color: Color.Black,
        });
        const text = new Text({
            text: this.text,
            font: new Font({ size: 10 }),
            color: Color.Yellow,
        });
        const group = new GraphicsGroup({
            members: [
                {
                    graphic: window,
                    offset: vec(0,0),
                },
                {
                    graphic: text,
                    offset: vec(8, 8),
                }
            ],
        });

        this.graphics.anchor = Vector.Zero;
        this.graphics.use(group);
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