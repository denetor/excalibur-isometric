import {Actor, Engine} from "excalibur";

export class Unit extends Actor {
    // actor state
    protected state: string;
    // time, in ms, from when the actor images has changed last time. Useful to animate a state
    protected graphicsLifeTime: number;
    // index of the currently displaying frame of a state. Useful to cycle trough state frames)
    protected stateSpriteIndex: number;

    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        this.state = 'idle';
        this.graphicsLifeTime = 0;
        this.stateSpriteIndex = 0;
    }
}