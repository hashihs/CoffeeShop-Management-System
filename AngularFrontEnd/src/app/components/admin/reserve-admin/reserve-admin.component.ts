import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Table } from './Table';
import { ReserveService} from '../../../services/reserve.service';
import { AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-reserve-admin',
  templateUrl: './reserve-admin.component.html',
  styleUrls: ['./reserve-admin.component.css']
})
export class ReserveAdminComponent implements OnInit {

  tables: Table[];

  constructor(private reserveService: ReserveService, 
    private router: Router, 
    private alertService: AlertService) { }

  deleteTable(id) {
    this.reserveService.deleteTable(id).subscribe(res =>{
      this.alertService.success('Reservation Deleted successfully', true,);
      this.router.navigate(['/reserve_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.reserveService
      .getTables()
      .subscribe((data: Table[]) => {
      this.tables = data;
    });
  }

}
