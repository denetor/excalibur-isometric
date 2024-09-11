import {Engine, Scene, IsometricMap, Random, vec, Shape} from 'excalibur';
import { Resources } from '@/resources';

/**
 * Managed scene
 */
export class TestIsometricLevel extends Scene {
    isoMap: IsometricMap;
    dirtTileSprite;
    stoneTileSprite;
    planksTileSprite;
    waterTileSprite;


    public async onInitialize(engine: Engine) {
        this.dirtTileSprite = Resources.DirtTile.toSprite();
        this.stoneTileSprite = Resources.StoneTile.toSprite();
        this.planksTileSprite = Resources.PlanksTile.toSprite();
        this.waterTileSprite = Resources.WaterTile.toSprite();
        this.isoMap = new IsometricMap({
            pos: vec(250, 10),
            tileWidth: 128,
            tileHeight: 64,
            columns: 10,
            rows: 10
        });
        this.add(this.isoMap);

        const rand = new Random(1234)
        for (let tile of this.isoMap.tiles) {
            // tile.addGraphic(this.planksTileSprite);
            if (rand.bool(0.1)) {
                // tile with full cell collider
                tile.addGraphic(this.waterTileSprite);
                tile.solid = true;
                tile.addCollider(Shape.Polygon([vec(0, 95), vec(63, -32 + 95), vec(127, 95), vec(63, 32 + 95)]));
            } else {
                if (rand.bool(0.6)) {
                    tile.addGraphic(this.dirtTileSprite);
                } else {
                    tile.addGraphic(rand.bool(0.5) ?
                        this.stoneTileSprite : this.planksTileSprite
                    );
                }
            }
        }
    }
    public onActivate() {}
    public onDeactivate() {}
}