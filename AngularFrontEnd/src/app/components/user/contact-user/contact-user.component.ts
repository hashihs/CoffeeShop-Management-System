import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { MessageService} from '../../../services/message.service';
import { ValidateService} from '../../../services/validate.service';

@Component({
  selector: 'app-contact-user',
  templateUrl: './contact-user.component.html',
  styleUrls: ['./contact-user.component.css']
})
export class ContactUserComponent implements OnInit {

  name: String;
  email: String;
  messages: String;
  messageForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    messages: ['', Validators.required]
  });

  }

  get f() { return this.messageForm.controls; }

  onMessageSubmit() {
    this.submitted = true;

    const reserve = {
      name: this.name,
      email: this.email,
      messages: this.messages
    }

    //Validate email
    if(!this.validateService.validateEmail(reserve.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    // stop here if form is invalid
    if (this.messageForm.invalid) {
        return;
    }


    this.loading = true;
    this.messageService.messaging(this.messageForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Message sending successful', true);
                this.router.navigate(['/contact_user']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
