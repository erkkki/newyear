import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';

import { MessageService } from '../../../core/services/message.service';
import { Message } from '../../../core/types/message.interface';
import { YouTubePlayer } from '@angular/youtube-player';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges{


  @Input() show: boolean;
  @Input() videoId;
  @ViewChild(YouTubePlayer)
  player: YouTubePlayer;

  playerVars = {
    autoplay: 1,
    loop: 1,
    origin: environment.origin,
  };

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    /* TODO autoplay not working. */
    /* TODO volume control? Mute unmute... */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.videoId);
  }

  playerReady($e): void {
    console.log('player ready, trying to start playback');
    this.player.mute();

    if (this.player.getPlayerState() !== 1) {
      console.log(this.player.getPlayerState());
      this.player.playVideo();
      console.log(this.player.getPlayerState());
      this.player.playVideo();
      console.log(this.player.getPlayerState());
    }

    this.player.unMute();
  }

  setVolume(volume): void {
    this.player.setVolume(volume);
  }

  mute(): void {
    this.player.mute();
  }

  unMute(): void {
    this.player.unMute();
  }
}
