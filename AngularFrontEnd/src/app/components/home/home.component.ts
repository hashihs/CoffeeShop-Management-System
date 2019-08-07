import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  flash(){
    this.flashMessage.show('Please sign in to continue..', {cssClass: 'alert-danger', timeout:3000});
  }

}
