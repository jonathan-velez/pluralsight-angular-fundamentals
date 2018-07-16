import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  someFn() {
    console.log('something here');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  getStartTimeClass() {
    // ngClass example
    
    // // return object
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return { green: isEarlyStart, bold: isEarlyStart }

    // // return string
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';

    // return array
    const returnArray = [];
    if (this.event && this.event.time === '8:00 am') {
      returnArray.push('green');
      returnArray.push('bold');
    }

    return returnArray;

  }

}
