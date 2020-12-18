import { Component, OnInit } from '@angular/core';

import { MessageService } from '../core/services/message.service';
import { Message } from '../core/types/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Message;
  edit: boolean;

  constructor(
    private messageService: MessageService,
  ) {
    this.edit = false;
    this.messageService.getEditState().subscribe(state => {
      console.log(state);
      this.edit = state;
    });
  }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data) => {
      this.message = data;
    });
  }

  updateMessage(): void {
    this.messageService.setMessage(this.message);
  }

}
