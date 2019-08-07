import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { ValidateService} from '../../../services/validate.service';

@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent implements OnInit {

  public productForm: FormGroup;
  name: String;
  email:String;
  phone:String;
  date: Date;
  address: String;

  public productlist: FormArray;

  coffeeProducts:[
    {
      cof: String;
      pquantity: Number;
    }
  ]

  loading = false;
  submitted = false;

  get productForms() {
    return this.productForm.get('coffeeProducts') as FormArray
  }

  constructor(
    private router: Router,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private validateService: ValidateService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      coffeeProducts: this.fb.array([this.createProductOrder()]),
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])], 
      address: [null, Validators.compose([Validators.required])]
      
    });
    this.productlist = this.productForm.get('coffeeProducts') as FormArray;
  }

  createProductOrder(): FormGroup {
    return this.fb.group({
      cof: [null, Validators.compose([Validators.required])], 
      pquantity: [null, Validators.compose([Validators.required])]
      
    });
  }
  addPro(){
    this.productlist.push(this.createProductOrder());
  }
  deleteproduct(index){
    this.productlist.removeAt(index);
  }
  getproductForms(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.productlist.controls[index] as FormGroup;
    return formGroup;
  }

  prosubmit(){
    //e.preventDefault();
    this.submitted = true;
    console.log(this.productForm.value);

    const product = {
      name: this.name,
      email: this.email
     /* phone: this.phone,
      date: this.date,
      address: this.address,
      coffee: this.coffee,
      cquantity: this.cquantity*/

    }

    //Validate email
    if(!this.validateService.validateEmail(product.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }


    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
  }

    this.loading = true;
    this.productService.productOrder(this.productForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.alertService.success('Concession requested successfully', true,);
                this.router.navigate(['/servings_user']);
                this.flashMessage.show('Your order received successfully', {cssClass: 'alert-success', timeout:3000});
            },
            error => {
              this.flashMessage.show('Something looks wrong', {cssClass: 'alert-danger', timeout:3000});
              this.router.navigate(['/product_user']);
            });
   
  }


}
