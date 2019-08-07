import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Event } from './Event';
import { EventService} from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService
      .getEvents()
      .subscribe((data: Event[]) => {
      this.events = data;
    });
  }

}
