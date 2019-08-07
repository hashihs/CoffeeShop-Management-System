import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router,
    private flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You have signed out',{cssClass:'alert-success',timeout:1500});
    this.router.navigate(['/']);
    return false;
  }
}
