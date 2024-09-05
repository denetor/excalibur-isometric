import { Actor, Color, vec } from 'excalibur';
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
  }
}
