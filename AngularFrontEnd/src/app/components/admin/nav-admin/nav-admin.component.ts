import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

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
