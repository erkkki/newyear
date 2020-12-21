import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {MessageService} from './core/services/message.service';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  editState: boolean;

  constructor(
    private route: Router,
    public messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.editState = false;
    /** Check if id exist and send id to message service */
    this.route.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        if (params.id) {
          console.log(params.id);
          this.messageService.setMessageById(params.id);
        }
      });
  }
}
