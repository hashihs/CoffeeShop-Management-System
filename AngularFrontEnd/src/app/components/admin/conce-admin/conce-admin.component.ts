import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Concession } from './Concession';
import { ConcessionService} from '../../../services/concession.service';
import { AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-conce-admin',
  templateUrl: './conce-admin.component.html',
  styleUrls: ['./conce-admin.component.css']
})
export class ConceAdminComponent implements OnInit {

  concessions: Concession[];

  constructor(
    private concessionService: ConcessionService, 
    private router: Router,
    private alertService: AlertService
    ) { }

  deleteConcession(id) {
    this.concessionService.deleteConcession(id).subscribe(res =>{
      this.alertService.success('Concession Deleted successfully', true,);
      this.router.navigate(['/conce_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.concessionService
      .getConcession()
      .subscribe((data: Concession[]) => {
      this.concessions = data;
    });
  }

}
