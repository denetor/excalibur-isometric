/**
 * This class describes a world where the battle happens.
 *
 */
export class LocalWorld {
    /**
     * Tile size, in pixels (if appliable, this property may be removed or moved to a constant of the tilesheet)
     */
    tileSize: number;


    /**
     * The side size of a tile, in cm (a tile is a cube)
     */
    tileScale: number;

    /**
     * Array with an array of tiles for each level. Each key is the level of the tile
     * Example:
     * {0: Tile[], 1: Tile[], ...}
     */
    tiles: any[];


    /**
     * The actors present in this map.
     * The position is not in pixels but in scale units (cm).
     *
     */
    actors: any[];
}