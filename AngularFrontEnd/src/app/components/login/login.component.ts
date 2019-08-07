import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
//import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators,NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: String;
  password: String;
  
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private authService:AuthService,
    private router: Router,
    private flashMessage:FlashMessagesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';

}

/*  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user)

      .pipe(first())
      .subscribe(
        data => {
     this.authService.storeUserData(data.token ,data.user);
      this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout:5000});
      this.router.navigate(['/home']);

     }, error =>{
      
     // this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:5000});
      this.router.navigate(['/login']);
    });
  }*/

  get f() { return this.loginForm.controls; }

    onSubmit() {

      const user = {
        username: this.username,
        password: this.password
      }
      
      if(this.username=='admin'){
        this.authService.authenticateUser(user).subscribe((data: any) =>{
         // console.log("data",data);
          if(data.success){
            this.authService.storeUserData(data.token,data.user);
            this.router.navigate(['/admin']);
          }
          else{
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:5000});
            this.router.navigate(['/login']); 
          }
        });

      }
      else{
      this.authService.authenticateUser(user).subscribe((data: any) =>{
        //console.log("data",data);
        if(data.success){
          this.authService.storeUserData(data.token,data.user);
          this.router.navigate(['/user']);
        }
        else{
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:6000});
          this.router.navigate(['/login']); 
        }
      });
    }
  
        // this.submitted = true;

        // // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }

        // this.loading = true;

        // this.authService.login(this.f.username.value, this.f.password.value)

        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
                   
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}

