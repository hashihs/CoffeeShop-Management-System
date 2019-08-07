import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { AuthService} from '../../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: String;
  email: String;
  messages: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onMsgSubmit(){
    const message = {
      name: this.name,
      email: this.email,
      messages: this.messages
    }
    //console.log("ffd",message);
     //required fields
     if(!this.validateService.validateMsg(message)){
      this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(message.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    //send massage
     this.authService.sendMsg(message).subscribe(data =>{
      
      this.flashMessage.show('Your massage was sent', {cssClass: 'alert-success', timeout:3000});
      this.router.navigate(['/contact']);
    }, error =>{
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
      this.router.navigate(['/contact']);
    });
  }
}
