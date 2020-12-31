import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './github-fork.css']
})
export class AboutComponent implements OnInit {

  @Output() closeAbout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
