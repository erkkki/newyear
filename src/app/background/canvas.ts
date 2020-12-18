import { Color } from '../core/types/background.interface';

export class Canvas {

  context: CanvasRenderingContext2D;
  color: Color = {red:255,green:0,blue:0,alpha:1};

  constructor(private canvasElement: HTMLCanvasElement) {
    this.context = canvasElement.getContext('2d');
  }

  public static randomColor(): Color {
    return {
      red: Math.floor(Math.random() * (255)),
      green: Math.floor(Math.random() * (255)),
      blue: Math.floor(Math.random() * (255)),
      alpha: 1
    };
  }


  getHeight():number {
    return this.canvasElement.height;
  }

  getWidth():number {
    return this.canvasElement.width;
  }

  resize() {
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;
    this.context = this.canvasElement.getContext("2d")!;
  }

  drawRect(x:number,y:number,w:number,h:number, color: Color = this.color) {
    this.context.beginPath();
    this.context.fillStyle = 'rgba('+color.red+','+color.green+','+color.blue+','+color.alpha+')';
    this.context.rect(x, y, w, h);
    this.context.fill();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

}
