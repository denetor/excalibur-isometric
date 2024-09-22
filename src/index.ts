import {DisplayMode, Engine, Loader, PointerScope} from 'excalibur';
import {Player} from './actors/player/player';
import {Resources} from './resources';
import {TestIsometricLevel} from "@/scenes/test-isometric/test-isometric.level";

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  private testIsometricLevel: TestIsometricLevel;

  constructor() {
    super({
      displayMode: DisplayMode.FitScreen,
      pointerScope: PointerScope.Canvas,
    });
  }

  public start() {
    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    this.testIsometricLevel = new TestIsometricLevel();
    game.add('testIsometricLevel', this.testIsometricLevel);

    return super.start(loader);
  }
}

const game = new Game();
game.start().then(() => {
  game.goToScene('testIsometricLevel');
});
