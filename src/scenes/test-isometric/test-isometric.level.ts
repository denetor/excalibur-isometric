import { Engine, Scene, ImageSource, IsometricMap, Random, vec } from 'excalibur';
import { Resources } from '@/resources';

/**
 * Managed scene
 */
export class TestIsometricLevel extends Scene {
    isoMap: IsometricMap;
    // grassTileImage;
    // waterTileImage;
    grassTileSprite;
    waterTileSprite;


    public async onInitialize(engine: Engine) {
        // this.grassTileImage = new ImageSource('./../../../../images/tile-erba.png');
        // this.waterTileImage = new ImageSource('./images/tile-acqua.png');
        // await this.grassTileImage.load(engine);
        // await this.waterTileImage.load(engine);
        this.grassTileSprite = Resources.GrassTile.toSprite();
        this.waterTileSprite = Resources.WaterTile.toSprite();
        this.isoMap = new IsometricMap({
            pos: vec(250, 10),
            tileWidth: 64,
            tileHeight: 32,
            columns: 15,
            rows: 15
        });
        this.add(this.isoMap);

        const rand = new Random(1234)
        for (let tile of this.isoMap.tiles) {
            if (rand.bool(0.8)) {
                tile.addGraphic(this.grassTileSprite);
            } else {
                tile.addGraphic(this.waterTileSprite);
            }
        }
    }
    public onActivate() {}
    public onDeactivate() {}
}