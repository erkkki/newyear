import { Canvas } from './canvas';
import { Firework } from "./firework";

import { Color } from '../core/types/background.interface';

export class Spark {

  direction: {vx: number, vy: number} = {vx: 0,vy: 0};
  age: number = 0;
  weight: number = Math.random() * 0.1 + .01;
  max_age: number = 240;

  constructor(
    private canvas: Canvas,
    private firework: Firework,
    private color: Color = Canvas.randomColor())
  {
    this.direction = this.randomDirection();
  }

  /**
   * Generate random direction for spark.
   * @private
   */
  private randomDirection(): {vx: number, vy: number} {
    let direction = {
      vx: Math.random(),
      vy: Math.random(),
    };

    if(Math.random() > .5) direction.vx = - direction.vx;
    if(Math.random() > .5) direction.vy = - direction.vy;

    return direction;
  }

  update():void {
    this.age++;
  }

  draw(): void {
    /** Calculate position */
    /** TODO shade effect */
    let x = this.firework.position.x + (this.direction.vx * this.age);
    let y = this.firework.position.y + (this.direction.vy * this.age);
    y += this.weight * this.age * this.weight * this.age;

    x = Math.floor(x);
    y = Math.floor(y);

    this.canvas.drawRect(x, y, 4,4, this.color);
  }
}
