import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Order } from './Order';
import { OrderService} from '../../../services/order.service';
import { AlertService} from '../../../services/alert.service';
import { AuthService} from '../../../services/auth.service';
import { User } from './User';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  styleUrls: ['./cart-user.component.css']
})
export class CartUserComponent implements OnInit {

  orders: Order[] = [];
  //users: User[];
  email1: String;
  email:String;

  constructor(
    private orderService: OrderService, 
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService
  ) { }

  deleteOrder(id) {
    this.orderService.deleteOrder(id).subscribe(res =>{
      this.alertService.success('Order detail successfully', true,);
      this.router.navigate(['/order_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
   /* this.orderService
    .getOrders()
    .subscribe((data: Order[]) => {
    this.orders = data;
    // Object.assign(this.orders,data);
    console.log("dsa",this.orders);
    this.authService.getProfile().subscribe((profile: any)=>{
        this.email1 = profile.User.email;
      },err =>{
        console.error(err);
      });
    
  });*/

  // this.authService.getProfile().subscribe((profile: any)=>{
  //   this.email1 = profile.User.email;
  // },err =>{
  //   return false;
  // });

  // if(this.email1 == this.orderService.{}
  // for(var i=0;i<this.orders.length;i++){
    // console.log("dksa",this.orders);
  // }
  
  }

}
