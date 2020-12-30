import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.value) {
      this.value = '#ffffff';
    }
  }

  updateValue(value): void{
    console.log();
    this.value = value.color.hex;
    this.valueChange.emit(value.color.hex);
  }

}
