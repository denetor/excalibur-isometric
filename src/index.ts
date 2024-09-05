import { Engine, Loader, DisplayMode } from 'excalibur';
import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';
import {TestIsometricLevel} from "@/scenes/test-isometric/test-isometric.level";

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  private testIsometricLevel: TestIsometricLevel;

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public start() {
    this.testIsometricLevel = new TestIsometricLevel();
    this.player = new Player();
    this.testIsometricLevel.add(this.player);
    game.add('testIsometricLevel', this.testIsometricLevel);



    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader);
  }
}

const game = new Game();
game.start().then(() => {
  game.goToScene('testIsometricLevel');
});
