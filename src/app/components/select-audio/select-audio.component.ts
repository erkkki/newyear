import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { YoutubeVideo } from '../../core/types/youtubeVideo';
import {Message} from '../../core/types/message.interface';

@Component({
  selector: 'app-select-audio',
  templateUrl: './select-audio.component.html',
  styleUrls: ['./select-audio.component.css']
})
export class SelectAudioComponent implements OnInit {

  placeHolder = 'Happy New Year';
  inputTouched = false;
  loading = false;
  videos: YoutubeVideo[] = [];
  @Output() newVideo: EventEmitter<YoutubeVideo> = new EventEmitter<YoutubeVideo>();

  constructor(private youtubeApiService: YoutubeApiService) { }

  ngOnInit(): void {
    this.handleSearch(this.placeHolder);
  }

  selectVideo(video: YoutubeVideo): void {
    this.newVideo.emit(video);
  }

  handleSearch(inputValue: string): void {
    this.loading = true;
    this.youtubeApiService.getVideos(inputValue)
      .subscribe((items: any) => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }




}
