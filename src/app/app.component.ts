import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {MessageService} from './core/services/message.service';
import {filter, map} from 'rxjs/operators';
import { Message } from './core/types/message.interface';
import {YoutubeVideo} from './core/types/youtubeVideo';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  editMessageState: boolean;
  selectAudioState: boolean;
  shareState: boolean;
  colorState: boolean;
  message: Message;
  environment: any;

  constructor(
    private route: Router,
    public messageService: MessageService,
  ) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.editMessageState = false;
    this.selectAudioState = false;
    this.shareState = false;
    this.colorState = false;
    /** Check if uuid exist and send id to message service */
    this.route.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        if (params.uuid) {
          this.messageService.setMessageById(params.uuid);
        }
      });

    this.messageService.getMessage().subscribe((message) => {
      this.message = message;
    });
  }

  updateMessage(message: Message): void {
    this.messageService.setMessage(message);
  }

  updateColor(color: string): void {
    const message = this.message;
    message.color = color;
    this.updateMessage(message);
  }

  updateVideo(video: YoutubeVideo): void {
    this.message.videoId = video.videoId;
    this.updateMessage(this.message);
  }

  url(): string {
    return this.message.uuid;
  }
}
