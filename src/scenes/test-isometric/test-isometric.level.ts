import {Engine, Scene, IsometricMap, Random, vec, SceneEvents} from 'excalibur';
import { terrainSpritesheet, spearmanSpritesheet } from '@/resources';
import {SpearmanUnit} from "@/actors/units/spearman-unit.actor";
import {Unit} from "@/actors/units/unit";
import {Alert} from "@/actors/messages/alert";
import {Window} from "@/actors/messages/window";

/**
 * Managed scene
 */
export class TestIsometricLevel extends Scene {
    isoMap: IsometricMap;


    public async onInitialize(engine: Engine) {
        //
        // init map
        //
        this.isoMap = new IsometricMap({
            pos: vec(250, 10),
            tileWidth: 64,
            tileHeight: 32,
            columns: 10,
            rows: 10
        });
        this.add(this.isoMap);
        const rand = new Random(1234)
        for (let tile of this.isoMap.tiles) {
            tile.solid = true;
            const n = rand.integer(0,10);
            switch (n) {
                case 0:
                    tile.addGraphic(terrainSpritesheet.getSprite(2,0));
                    break;
                case 1:
                    tile.addGraphic(terrainSpritesheet.getSprite(3,0));
                    break;
                case 2:
                    tile.addGraphic(terrainSpritesheet.getSprite(0,1));
                    break;
                default:
                    tile.addGraphic(terrainSpritesheet.getSprite(1,0));
            }
        }

        //
        // events
        //
        let lastMouseEvent = vec(0,0);
        this.engine.input.pointers.on('down', (evt) => {
            console.log({evt});
            lastMouseEvent = this.isoMap.worldToTile(evt.worldPos);
            console.log(lastMouseEvent);
            // const alert = new Alert(`Click at cell: ${lastMouseEvent.x},${lastMouseEvent.y}`, 3000);
            // engine.currentScene.add(alert);
            const window = new Window();
            window.pos = vec(evt.worldPos.x, evt.worldPos.y);
            engine.currentScene.add(window);
        });

        //
        // spawn initial units
        //
        const friends: Unit[] = [];
        const foes: Unit[] = [];
        for (let i = 0; i < 4; i++) {
            const spearman = new SpearmanUnit();
            spearman.pos = this.isoMap.tileToWorld(vec(3+i, 7));
            spearman.z = 999;
            friends.push(spearman);
        }
        for (let i = 0; i < 4; i++) {
            const spearman = new SpearmanUnit();
            spearman.pos = this.isoMap.tileToWorld(vec(3+i, 2));
            spearman.z = 999;
            foes.push(spearman);
        }
        for (const friend of friends) {
            engine.currentScene.add(friend);
        }
        for (const foe of foes) {
            engine.currentScene.add(foe);
        }
    }
    public onActivate() {}
    public onDeactivate() {}
}