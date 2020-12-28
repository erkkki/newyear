import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Message} from '../../core/types/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() edit: boolean;
  @Input() message: Message;
  @Output() newMessage: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() {}

  ngOnInit(): void {}

  updateMessage($event): void {
    this.newMessage.emit(this.message);
  }
}
