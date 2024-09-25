import {Actor, Color, Engine, Font, GraphicsGroup, Rectangle, Text, vec, Vector} from "excalibur";

export class Window extends Actor {
    static TitleHeight = 12;
    title: string;
    size: Vector;

    constructor() {
        super();
        this.title = 'Window';
        this.size = vec(100,50);
    }

    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        const bg = new Rectangle({
            width: this.size.x,
            height: this.size.y,
            color: Color.Black,
        });
        const bgTitle = new Rectangle({
            width: this.size.x - 2,
            height: Window.TitleHeight + 1,
            color: Color.Blue,
        });
        const title = new Text({
            text: this.title,
            font: new Font({ size: Window.TitleHeight }),
            color: Color.Yellow,
        });
        const btnClose = new GraphicsGroup({
            members: [
                {
                    graphic: new Rectangle({
                        width: Window.TitleHeight,
                        height: Window.TitleHeight,
                        color: Color.Red,
                    }),
                    offset: vec(0,0),
                },
                {
                    graphic: new Text({
                        text: 'X',
                        font: new Font({size: Window.TitleHeight - 2}),
                        color: Color.Yellow,
                    }),
                    offset: vec(1,1),
                }
            ],
        });

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: bg,
                    offset: vec(0,0),
                },
                {
                    graphic: bgTitle,
                    offset: vec(1,1),
                },
                {
                    graphic: title,
                    offset: vec(1,1),
                },
                {
                    graphic: btnClose,
                    offset: vec(this.size.x - 1 - Window.TitleHeight, 2),
                },
            ]
        });
        this.graphics.anchor = Vector.Zero;
        this.graphics.use(group);
        this.z = 999999;

        this.on('mouseup', (e) => {
            console.log('mouseup on actor');
            this.kill();
        });
    }
}