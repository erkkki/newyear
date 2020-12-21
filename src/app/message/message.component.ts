import {Component, Input, OnInit} from '@angular/core';

import {MessageService} from '../core/services/message.service';
import {Message} from '../core/types/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() edit: boolean;
  message: Message;

  constructor(
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data) => {
      this.message = data;
    });
  }

  messageChange($event): void {
    this.message.message = $event;
    this.messageService.setMessage(this.message);
  }
}
