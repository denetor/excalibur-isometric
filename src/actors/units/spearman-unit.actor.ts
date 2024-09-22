import {Actor, Engine, Sprite} from "excalibur";
import {Unit} from "@/actors/units/unit";
import { spearmanSpritesheet } from '@/resources';

export class SpearmanUnit extends Unit {
    protected idleSprites: Sprite[];


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // caricamento sprite per i vari stati
        this.idleSprites = [spearmanSpritesheet.getSprite(0,0), spearmanSpritesheet.getSprite(1,0)];

        // sprite iniziale
        this.graphics.use(this.idleSprites[0]);
    }


    onPreUpdate(engine: Engine, delta: number) {
        super.onPreUpdate(engine, delta);
        this.graphicsLifeTime += delta;
        if (this.state === 'idle') {
            if (this.graphicsLifeTime > 500) {
                if (this.stateSpriteIndex === this.idleSprites.length-1) {
                    this.stateSpriteIndex = 0;
                } else {
                    this.stateSpriteIndex++;
                }
                this.graphics.use(this.idleSprites[this.stateSpriteIndex]);
                this.graphicsLifeTime = 0;
            }
        }
    }

}