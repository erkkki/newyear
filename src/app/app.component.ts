import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MessageService} from './core/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';

  constructor(
    private route: ActivatedRoute,
    public messageService: MessageService,
  ) {}

  ngOnInit() {
    /** Check if id exist and send id to message service */
    this.route.params.subscribe((params) => {
      if(params.id) {
        this.messageService.setMessageById(params.id);
      }
    });
  }



}
