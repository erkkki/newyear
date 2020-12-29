import {Canvas} from './canvas';
import {Firework} from './fireworks/firework';

export class Background {

  private fireworks: Firework[] = [];
  updateIntervalMs = 10;
  fireworkCount = 40;

  constructor(private canvas: Canvas) {
    /** Generate Fireworks */
    [...Array(this.fireworkCount)].forEach(() => {
      this.fireworks.push(
        new Firework(this.canvas)
      );
    });
  }

  /**
   * Main loops
   * Update all objects 240 times in second.
   * Draw loop to draw when browser is ready.
   */
  run(): void {
    this.update();
    this.draw();
  }

  update(): void {

    /** Update all fireworks */
    this.fireworks.forEach((firework) => {
      firework.update();
    });

    setTimeout(() => this.update(), this.updateIntervalMs);
  }

  draw(): void {
    /** Clear canvas */
    this.canvas.clearCanvas();
    /** Draw all fireworks */
    this.fireworks.forEach((firework) => {
      firework.draw();
    });
    requestAnimationFrame(() => this.draw());
  }

}
