import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  edit: boolean;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getEditState().subscribe(value => {
      this.edit = value;
    });
  }

  editMessage(): void {
    this.messageService.edit.next(!this.edit);
  }

}
