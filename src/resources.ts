import { ImageSource } from 'excalibur';
import sword from './images/sword.png';
import actorWarrior from './images/actor-warrior.png';
import grassTileImage from './images/tile-erba.png';
import waterTileImage from './images/tile-acqua.png';
import dirtTile from './images/tiles/dirt_128.png';
import stoneTile from './images/tiles/stone_128.png';
import planksTile from './images/tiles/planks_128.png';

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new ImageSource(sword),
    ActorWarrior: new ImageSource(actorWarrior),
    GrassTile: new ImageSource(grassTileImage),
    WaterTile: new ImageSource(waterTileImage),
    DirtTile: new ImageSource(dirtTile),
    StoneTile: new ImageSource(stoneTile),
    PlanksTile: new ImageSource(planksTile),
}

export { Resources }
