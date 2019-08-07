import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { MenuService} from '../../../services/menu.service';
import { Drink } from './Drink';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8000/api/upload';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  dname: String;
  dprice: Number;
  ddescript:String;
  drinkForm: FormGroup;
  loading = false;
  submitted = false;
  imageName;

  drinks: Drink[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuService: MenuService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService
  ) { }

  //upload
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.drinkForm = this.formBuilder.group({
      dname: ['', Validators.required],
      dprice: ['', Validators.required],
      ddescript: ['', Validators.required]
    }); 

    this.menuService
      .getDrinks()
      .subscribe((data: Drink[]) => {
      this.drinks = data;
    });

    //upload
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;
      this.imageName = file.file.name;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

  get f() { return this.drinkForm.controls; }

  drinkSubmit(){
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.drinkForm.invalid) {
        return;
    }

    this.loading = true;
    this.drinkForm.value.image = this.imageName;
    this.menuService.addDrink(this.drinkForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Drink added successfully', true,);
                //this.flashMessage.show('Event added successfully', {cssClass: 'alert-success', timeout:5000});
                this.router.navigate(['/menu_admin']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  deleteDrink(id) {
    this.menuService.deleteDrink(id).subscribe(res =>{
      this.alertService.success('Drink Deleted successfully', true,);
      this.router.navigate(['/menu_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

  

}
