import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { YoutubeVideo } from '../../../core/types/youtubeVideo';

@Component({
  selector: 'app-youtube-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() list: YoutubeVideo[];
  @Output() videoChange = new EventEmitter();
  displayedColumns: string[] = ['title'];

  constructor() { }

  ngOnInit(): void {
  }

  selectVideo(video: YoutubeVideo): void {
    this.videoChange.emit(video);
  }

}
