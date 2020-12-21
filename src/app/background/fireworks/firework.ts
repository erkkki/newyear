import {Canvas} from '../canvas';
import {Spark} from './spark';

export class Firework {

  position: { x: number, y: number} = { x: 100, y: 100};
  age = 0;
  maxAge = 480;
  explodeState = false;
  explodeHeight = 0;
  sparks: Spark[] = [];
  sparkCount = 40;

  constructor(private canvas: Canvas) {
    this.reset();
    /** Random starting age so they won't start at same time */
    this.age -= Math.floor(Math.random() * 200);
  }

  reset(): void {
    this.position.y = this.canvas.getHeight();
    this.position.x = Math.floor(Math.random() * this.canvas.getWidth());
    this.age = 0;
    this.explodeState = false;
    /** Random explode position between 60%-95% of canvas height. */
    this.explodeHeight = this.canvas.getHeight() - Math.floor((Math.random() * (0.95 - 0.6) + 0.6) * this.canvas.getHeight());
  }

  private generateSparks(): Spark[] {
    const sparks = [];
    const color = Canvas.randomColor();
    [...Array(this.sparkCount)].forEach(() => {
      sparks.push(
        new Spark(this.canvas, this, color)
      );
    });
    return sparks;
  }

  update(): void {
    switch (this.explodeState) {
      case true: {
        /** Update sparks */
        this.sparks.forEach((spark) => {
          spark.update();
        });
        /** Check if sparks are done */
        this.sparks = this.sparks.filter((spark) => {
          return spark.age < spark.maxAge;
        });

        /** When all sparks are done reset firework */
        if (this.sparks.length <= 1) {
          this.reset();
        }
        break;
      }
      default: {
        this.age++;
        this.position.y = this.canvas.getHeight() - Math.floor(this.age / this.maxAge * this.canvas.getHeight());
        /** Check if it's time to explode & generate sparks */
        if (this.position.y < this.explodeHeight) {
          this.explodeState = true;
          this.sparks = this.generateSparks();
        }
        break;
      }
    }
  }

  draw(): void {
    switch (this.explodeState) {
      case true: { /** Draw sparks */
        this.sparks.forEach((spark) => {
          spark.draw();
        });
        break;
      }
      default: { /** Draw firework */
        this.canvas.drawRect(this.position.x, this.position.y, 4, 4);
        break;
      }
    }
  }
}
