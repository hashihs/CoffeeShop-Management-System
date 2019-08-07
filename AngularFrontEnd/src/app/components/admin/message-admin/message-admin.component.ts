import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Message } from './Message';
import { MessageService} from '../../../services/message.service';
import { AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-message-admin',
  templateUrl: './message-admin.component.html',
  styleUrls: ['./message-admin.component.css']
})
export class MessageAdminComponent implements OnInit {

  messages: Message[];

  constructor(
    private messageService: MessageService, 
    private router: Router,
    private alertService: AlertService
    ) { }

  deleteMsg(id) {
    this.messageService.deleteMsg(id).subscribe(res =>{
      this.alertService.success('Message Deleted successfully', true,);
      this.router.navigate(['/message_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.messageService
      .getMessages()
      .subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

}
