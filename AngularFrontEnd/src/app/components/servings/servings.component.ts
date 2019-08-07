import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-servings',
  templateUrl: './servings.component.html',
  styleUrls: ['./servings.component.css']
})
export class ServingsComponent implements OnInit {

  constructor(private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  flash(){
    this.flashMessage.show('Please sign in to continue..', {cssClass: 'alert-danger', timeout:3000});
  }
}
