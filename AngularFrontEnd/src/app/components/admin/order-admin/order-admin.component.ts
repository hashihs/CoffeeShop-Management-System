import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Order } from './Order';
import { AddOrderService} from '../../../services/add-order.service';
import { AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  orders: Order[];

  constructor(
    private addOrderService: AddOrderService, 
    private router: Router,
    private alertService: AlertService
  ) { }

  deleteOrder(id) {
    this.addOrderService.deleteOrder(id).subscribe(res =>{
      this.alertService.success('Order Deleted successfully', true,);
      this.router.navigate(['/order_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.addOrderService
      .getOrder()
      .subscribe((data: Order[]) => {
      this.orders = data;
     // console.log("rtf",data);
    });
  }

}
