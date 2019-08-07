import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ValidateService} from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { ConcessionService} from '../../../services/concession.service';

@Component({
  selector: 'app-conce-user',
  templateUrl: './conce-user.component.html',
  styleUrls: ['./conce-user.component.css']
})
export class ConceUserComponent implements OnInit {

  name: String;
  post: String;
  institute:String;
  email:String;
  phone:String;
  event:String;
  detail:String;
  concessionForm:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private concessionService: ConcessionService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.concessionForm = this.formBuilder.group({
      name: ['', Validators.required],
      post: ['', Validators.required],
      institute: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      event: ['', Validators.required],
      detail: ['', Validators.required]
    }); 
  }

  get f() { return this.concessionForm.controls; }

  concessionSubmit(){
    this.submitted = true;

    const conce = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }

    //Validate email
    if(!this.validateService.validateEmail(conce.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    // stop here if form is invalid
    if (this.concessionForm.invalid) {
      return;
  }

  this.loading = true;
    this.concessionService.concessioning(this.concessionForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.alertService.success('Concession requested successfully', true,);
                this.flashMessage.show('Concession requested successfully', {cssClass: 'alert-success', timeout:5000});
                this.router.navigate(['/conce_user']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }


}
