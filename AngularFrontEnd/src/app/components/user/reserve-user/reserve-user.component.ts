import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ValidateService} from '../../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { ReserveService} from '../../../services/reserve.service';


@Component({
  selector: 'app-reserve-user',
  templateUrl: './reserve-user.component.html',
  styleUrls: ['./reserve-user.component.css']
})
export class ReserveUserComponent implements OnInit {

  date: Date;
  hour: String;
  tableNo: Number;
  persons:String;
  name: String;
  email:String;
  phone:String;
  reserveForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reserveService: ReserveService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.reserveForm = this.formBuilder.group({
      date: ['', Validators.required],
      hour: ['', Validators.required],
      tableNo: ['', Validators.required],
      persons: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    }); 
  }

  get f() { return this.reserveForm.controls; }

  onReserveSubmit(){
    this.submitted = true;

    const reserve = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }
  
    //Validate email
    if(!this.validateService.validateEmail(reserve.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }
    //Validate phone
   /* if(!this.validateService.validatePhone(reserve.phone)){
      this.flashMessage.show('please provide a valid phone number', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }*/
    
    // stop here if form is invalid
    if (this.reserveForm.invalid) {
        return;
    }
    

    this.loading = true;
    this.reserveService.reserving(this.reserveForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Your table reserved successfully', true,);
                this.router.navigate(['/reserve_user']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
