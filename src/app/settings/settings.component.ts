import {Component, OnInit} from '@angular/core';

import {Message} from '../core/types/message.interface';
import {MessageService} from '../core/services/message.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit  {
  message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((data) => {
      this.message = data;
    });
  }
}
