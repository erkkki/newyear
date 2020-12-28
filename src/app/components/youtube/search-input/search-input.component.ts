import {Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-youtube-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements AfterViewInit {

  @ViewChild('input') inputElement: ElementRef;
  @Input() placeHolder: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit(): void {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3),
        map((value) => value)
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }
}
