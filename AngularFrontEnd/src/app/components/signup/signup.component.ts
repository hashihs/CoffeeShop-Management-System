import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService} from '../../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { AlertService} from '../../services/alert.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  signForm: FormGroup;
  loading = false;
  submitted = false;
   
  constructor(
    private formBuilder: FormBuilder,
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['',[ Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.signForm.controls; }

  onSignupSubmit(){
    this.submitted = true;

    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
  
    //required fields
    // if(!this.validateService.validateSignup(user)){
    //   this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
    //   return false;
    // }

    //Validate email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    // stop here if form is invalid
    if (this.signForm.invalid) {
      return;
  }

    //signup users
    // this.authService.signupUser(user).subscribe(data =>{
      
    //     //this.flashMessage.show('You are now registerd and can log in', {cssClass: 'alert-success', timeout:5000});
    //     this.alertService.success('You are now registerd and can log in', true);
    //     this.router.navigate(['/login']);
    //   }, error =>{
    //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
    //     this.router.navigate(['/signup']);
    //   });
    
      this.loading = true;
      this.authService.signupUser(this.signForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('You are now registerd and can log in', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
   
}
