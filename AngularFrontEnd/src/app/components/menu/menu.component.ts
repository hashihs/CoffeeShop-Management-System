import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AlertService} from '../../services/alert.service';
import { MenuService} from '../../services/menu.service';
import { Drink } from './Drink';
import { SnackService} from '../../services/snack.service';
import { Snack } from './Snack';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  drinks: Drink[];
  snacks: Snack[];

  constructor(
    private router: Router,
    private menuService: MenuService,
    private snackService: SnackService,
    private flashMessage:FlashMessagesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.menuService
      .getDrinks()
      .subscribe((data: Drink[]) => {
      this.drinks = data;
    });

    this.snackService
      .getSnacks()
      .subscribe((data: Snack[]) => {
      this.snacks = data;
    });
  }

}
