import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from './Product';
import { ProductService} from '../../../services/product.service';
import { AlertService} from '../../../services/alert.service';


@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService, 
    private router: Router,
    private alertService: AlertService
  ) { }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(res =>{
      this.alertService.success('product detail Deleted successfully', true,);
      this.router.navigate(['/product_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
    this.productService
      .getProduct()
      .subscribe((data: Product[]) => {
      this.products = data;
     // console.log("rtf",data);
    });
  }

}
