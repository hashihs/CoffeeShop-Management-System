import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AddOrderService } from '../../../services/add-order.service';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { MenuService} from '../../../services/menu.service';
import { ValidateService} from '../../../services/validate.service';
import { Drink } from './Drink';
import { SnackService} from '../../../services/snack.service';
import { Snack } from './Snack';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  
  public orderForm: FormGroup;
  drinks: Drink[];
  snacks: Snack[];
  
  name: String;
  email:String;
  phone:String;
  date: Date;
  address: String;
  coffee: String;
  cquantity: Number;
  cof :Drink[];

  public orderlist: FormArray;
  public foodlist: FormArray;
  
  coffeeDrinks:[
    {
      coffee: String;
      cquantity: Number;
    }
  ]
 /* foodSnacks:[{
    food: String;
    fquantity: Number;
  }]*/
  loading = false;
  submitted = false;
 
  
  get drinkForms() {
    return this.orderForm.get('coffeeDrinks') as FormArray
  }

 /* get foodForms(){
    return this.orderForm.get('foodsnacks') as FormArray
  }*/

  constructor(
    private router: Router,
    private menuService: MenuService,
    private snackService: SnackService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private validateService: ValidateService,
    private addorderService: AddOrderService
  ) { }
 
  
  ngOnInit() {
    this.menuService
      .getname()
      .subscribe((data: Drink[]) => {
      this.drinks = data;
       // console.log("drink",this.drinks);
     
    });

   /* this.snackService
      .getfood() 
      .subscribe((data: Snack[]) => {
      this.snacks = data;
      console.log("food",this.snacks);
    });*/

   /* this.orderForm = this.fb.group({
      coffeeDrinks: this.fb.array([]),
      foodsnacks: this.fb.array([]),
      name: '',
      email: '',
      phone: '',
      date: '', 
      address: ''
      
    });*/
    this.orderForm = this.fb.group({
      coffeeDrinks: this.fb.array([this.createOrder()]),
      //foodsnacks: this.fb.array([this.createFoodOrder()]),
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])], 
      address: [null, Validators.compose([Validators.required])]
      
    });
    this.orderlist = this.orderForm.get('coffeeDrinks') as FormArray;
   // this.foodlist = this.orderForm.get('foodsnacks') as FormArray;
    
  }

  createOrder(): FormGroup {
    return this.fb.group({
      coffee: [null, Validators.compose([Validators.required])], 
      cquantity: [null, Validators.compose([Validators.required])]
      
    });
  }
  addCof(){
    this.orderlist.push(this.createOrder());
  }
  deleteCof(index){
    this.orderlist.removeAt(index);
  }

  getdrinkForms(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.orderlist.controls[index] as FormGroup;
    return formGroup;
  }

/*  createFoodOrder(): FormGroup {
    return this.fb.group({
      food: [null, Validators.compose([Validators.required])], 
      fquantity: [null, Validators.compose([Validators.required])]
      
    });
  }

  addfoo(){
    this.foodlist.push(this.createFoodOrder());
  }
  deletefood(index){
    this.foodlist.removeAt(index);
  }
  getfoodForms(index) : FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.foodlist.controls[index] as FormGroup;
    return formGroup;
  }*/

  submit(){
    //e.preventDefault();
    this.submitted = true;
    console.log(this.orderForm.value);

    const order = {
      name: this.name,
      email: this.email
     /* phone: this.phone,
      date: this.date,
      address: this.address,
      coffee: this.coffee,
      cquantity: this.cquantity*/

    }

    //Validate email
    if(!this.validateService.validateEmail(order.email)){
      this.flashMessage.show('please provide a valid email', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

    /*if(!this.validateService.validatedrink(order)){
      this.flashMessage.show('please select atleast one drink and other fields to order', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }*/

    // stop here if form is invalid
    if (this.orderForm.invalid) {
      return;
  }

    this.loading = true;
    this.addorderService.doOrder(this.orderForm.value)
        .pipe(first())
        .subscribe(
            data => {
                //this.alertService.success('Concession requested successfully', true,);
                
                this.flashMessage.show('Your order received successfully', {cssClass: 'alert-success', timeout:3000});
                this.router.navigate(['/order_user']);
            },
            error => {
              this.flashMessage.show('Something looks wrong', {cssClass: 'alert-danger', timeout:3000});
              this.router.navigate(['/order_user']);
            });
   
  }

 
}
