import {Actor, Color, Engine, Keys, vec} from 'excalibur';
import { Resources } from '@/resources';

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 64,
      height: 64,
      color: new Color(255, 255, 255)
    });
  }

  onInitialize() {
    this.graphics.use(Resources.ActorWarrior.toSprite());
    this.z = 9999;
    this.vel.x = 0;
    this.vel.y = 0;
  }

  /*update(engine: Engine, delta: number) {*/
  update(engine: Engine, delta: number): void {
    this.manageKeyboardInput(engine);
  }


  /**
   * Manages keyboard input to control the movement of the player entity.
   *
   * @param {Engine} engine - The game engine that handles input.
   * @return {void}
   */
  manageKeyboardInput(engine: Engine): void {
    if (engine.input.keyboard.isHeld(Keys.ArrowRight)) {
      this.moveRight();
      // this.graphics.use(this.spriteRight);
    } else if (engine.input.keyboard.isHeld(Keys.ArrowLeft)) {
      this.moveLeft();
      // this.graphics.use(this.spriteLeft);
    }
    if (engine.input.keyboard.isHeld(Keys.ArrowUp)) {
      this.moveUp();
    }
    if (engine.input.keyboard.isHeld(Keys.ArrowDown)) {
      this.moveDown();
    }
  }


  moveRight(): void {
    this.vel.x = Math.min(50, this.vel.x + 10);
    this.vel.y = Math.min(25, this.vel.y + 5);
  }
  moveLeft(): void {
    this.vel.x = Math.max(-50, this.vel.x - 10);
    this.vel.y = Math.max(-25, this.vel.y - 5);
  }
  moveDown(): void {
    this.vel.x = Math.max(-50, this.vel.x - 10);
    this.vel.y = Math.min(25, this.vel.y + 5);
  }
  moveUp(): void {
    this.vel.x = Math.min(50, this.vel.x + 10);
    this.vel.y = Math.max(-25, this.vel.y - 5);
  }


}
