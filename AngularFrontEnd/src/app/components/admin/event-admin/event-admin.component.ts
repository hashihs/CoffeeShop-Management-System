import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { EventService} from '../../../services/event.service';
import { Event } from './Event';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {

  events: Event[];

  name: String;
  date: Number;
  month:String;
  time:String;
  place:String;
  descript:String;
  eventForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private eventService: EventService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      month: ['', Validators.required],
      time: ['', Validators.required],
      place: ['', Validators.required],
      descript: ['', Validators.required]
    }); 

    this.eventService
      .getEvents()
      .subscribe((data: Event[]) => {
      this.events = data;
    });
  }

  get f() { return this.eventForm.controls; }

  eventSubmit(){
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.eventForm.invalid) {
        return;
    }

    this.loading = true;
    this.eventService.addEvent(this.eventForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Event added successfully', true,);
                //this.flashMessage.show('Event added successfully', {cssClass: 'alert-success', timeout:5000});
                this.router.navigate(['/event_admin']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id).subscribe(res =>{
      this.alertService.success('Event Deleted successfully', true,);
      this.router.navigate(['/event_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

}
