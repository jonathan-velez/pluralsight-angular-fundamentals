import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
@Component({
  selector: 'events-list',
  templateUrl: 'events-list-template.html'
})
export class EventsListComponent implements OnInit {
  events:any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
    
  }

  ngOnInit() { // sort of like componentDidMount() - ajax calls go here
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(eventData) {
    console.log('inside handleEventClicked', eventData);
    this.toastr.success(eventData);
  }
}