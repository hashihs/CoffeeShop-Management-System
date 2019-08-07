import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../services/alert.service';
import { AuthService} from '../../services/auth.service';
import { User } from './User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  

  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    /*this.authService.getProfile().subscribe((profile : any) =>{
      this.users = profile.User;
      console.log("hfcg",this.users);
    },(err) =>{
      console.error(err);
    });*/
  
  }

}
