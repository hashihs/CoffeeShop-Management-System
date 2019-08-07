import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../../services/alert.service';
import { SnackService} from '../../../services/snack.service';
import { Snack } from './Snack';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8000/api/upload';

@Component({
  selector: 'app-snack-admin',
  templateUrl: './snack-admin.component.html',
  styleUrls: ['./snack-admin.component.css']
})
export class SnackAdminComponent implements OnInit {

  sname: String;
  sprice: Number;
  sdescript:String;
  snackForm: FormGroup;
  loading = false;
  submitted = false;
  imageName;

  snacks: Snack[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackService: SnackService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService
  ) { }

  //upload
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.snackForm = this.formBuilder.group({
      sname: ['', Validators.required],
      sprice: ['', Validators.required],
      sdescript: ['', Validators.required]
    }); 

    this.snackService
      .getSnacks()
      .subscribe((data: Snack[]) => {
      this.snacks = data;
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

  get f() { return this.snackForm.controls; }

  snackSubmit(){
    this.submitted = true;
    this.snackForm.value.image = this.imageName;
    
    // stop here if form is invalid
    if (this.snackForm.invalid) {
        return;
    }

    this.loading = true;
    this.snackService.addSnack(this.snackForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Snack added successfully', true,);
                //this.flashMessage.show('Event added successfully', {cssClass: 'alert-success', timeout:5000});
                this.router.navigate(['/snack_admin']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

  deleteSnack(id) {
    this.snackService.deleteSnack(id).subscribe(res =>{
      this.alertService.success('Snack Deleted successfully', true,);
      this.router.navigate(['/snack_admin']);
    }, (err) =>{
      console.log(err);
    });
  }

}
