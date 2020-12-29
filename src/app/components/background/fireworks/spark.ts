import {Canvas} from '../canvas';
import {Firework} from './firework';

import {Color} from '../../../core/types/background.interface';

export class Spark {

  direction: {vx: number, vy: number} = {vx: 0, vy: 0};
  age = 0;
  weight: number = Math.random() * 0.1 + .01;
  maxAge = 2000;
  createTime: number;

  constructor(
    private canvas: Canvas,
    private firework: Firework,
    private color: Color = Canvas.randomColor())
  {
    this.direction = this.randomDirection();
    this.createTime = Date.now();
  }

  /**
   * Generate random direction for spark.
   * @private
   */
  private randomDirection(): {vx: number, vy: number} {
    const direction = {
      vx: Math.random(),
      vy: Math.random(),
    };

    if (Math.random() > .5) { direction.vx = - direction.vx; }
    if (Math.random() > .5) { direction.vy = - direction.vy; }

    return direction;
  }

  update(): void {
    const time = Date.now();
    this.age = time - this.createTime;
  }

  draw(): void {
    /** Calculate position */
    /** TODO shade effect */
    const age = this.age / 4;
    let x = this.firework.position.x + (this.direction.vx * age);
    let y = this.firework.position.y + (this.direction.vy * age);
    y += this.weight * age * this.weight;

    x = Math.floor(x);
    y = Math.floor(y);

    this.canvas.drawRect(x, y, 4, 4, this.color);
  }
}
