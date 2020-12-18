import { Canvas } from './canvas';
import { Spark } from './spark';

export class Firework {

  position: { x: number, y: number} = { x: 100, y: 100};
  age: number = 0;
  max_age: number = 480;
  explode_state: boolean = false;
  explode_height: number = 0;
  sparks: Spark[] = [];
  sparkCount = 40;

  constructor(private canvas: Canvas) {
    this.reset();
    /** Random starting age so they won't start at same time */
    this.age -= Math.floor(Math.random() * 200);
  }

  reset():void {
    this.position.y = this.canvas.getHeight();
    this.position.x = Math.floor(Math.random() * this.canvas.getWidth());
    this.age = 0;
    this.explode_state = false;
    /** Random explode position between 60%-95% of canvas height. */
    this.explode_height = this.canvas.getHeight() - Math.floor((Math.random() * (0.95 - 0.6) + 0.6) * this.canvas.getHeight());
  }

  private generateSparks(): Spark[] {
    let sparks = [];
    let color = Canvas.randomColor();
    [...Array(this.sparkCount)].forEach(() => {
      sparks.push(
        new Spark(this.canvas,this,color)
      );
    });
    return sparks;
  }

  update():void {
    switch (this.explode_state) {
      case true: {
        /** Update sparks */
        this.sparks.forEach((spark) => {
          spark.update();
        });
        /** Check if sparks are done */
        this.sparks = this.sparks.filter((spark) => {
          return spark.age < spark.max_age;
        })

        /** When all sparks are done reset firework */
        if(this.sparks.length <= 1) {
          this.reset();
        }
        break;
      }
      default: {
        this.age++;
        this.position.y = this.canvas.getHeight() - Math.floor(this.age / this.max_age * this.canvas.getHeight());
        /** Check if it's time to explode & generate sparks */
        if(this.position.y < this.explode_height) {
          this.explode_state = true;
          this.sparks = this.generateSparks();
        }
        break;
      }
    }
  }

  draw(): void {
    switch (this.explode_state) {
      case true: { /** Draw sparks */
        this.sparks.forEach((spark) => {
          spark.draw();
        });
        break;
      }
      default: { /** Draw firework */
        this.canvas.drawRect(this.position.x, this.position.y, 4,4);
        break;
      }
    }
  }
}
