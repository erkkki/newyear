import {Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

import { Canvas } from './canvas';
import { Background } from './background';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements AfterViewInit {

  @ViewChild('backGround')
  myCanvas: ElementRef;
  canvas: Canvas;
  background: Background;

  constructor() { }

  ngAfterViewInit(): void {
    /* Init canvas */
    this.canvas = new Canvas(this.myCanvas.nativeElement);
    this.canvas.resize();

    /* Init background and start run */
    this.background = new Background(this.canvas);
    this.background.run();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.canvas.resize();
  }
}
