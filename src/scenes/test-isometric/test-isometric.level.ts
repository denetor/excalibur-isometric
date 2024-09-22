import {Engine, Scene, IsometricMap, Random, vec} from 'excalibur';
import { terrainSpritesheet, spearmanSpritesheet } from '@/resources';

/**
 * Managed scene
 */
export class TestIsometricLevel extends Scene {
    isoMap: IsometricMap;


    public async onInitialize(engine: Engine) {
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
    }
    public onActivate() {}
    public onDeactivate() {}
}