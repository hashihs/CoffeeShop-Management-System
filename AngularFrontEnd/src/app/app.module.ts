import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FileSelectDirective } from 'ng2-file-upload';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {AlertService} from './services/alert.service';
import { AuthGuard } from './guards/auth.guard';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor} from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';

import { MenuComponent } from './components/menu/menu.component';
import { ServingsComponent } from './components/servings/servings.component';
import { OrderComponent } from './components/order/order.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlertComponent } from './directives/alert/alert.component';
import { UserComponent } from './components/user/user.component';
import { EventComponent } from './components/event/event.component';

import { NavUserComponent } from './components/user/nav-user/nav-user.component';
import { ServingsUserComponent } from './components/user/servings-user/servings-user.component';
import { ReserveUserComponent } from './components/user/reserve-user/reserve-user.component';
import { ContactUserComponent } from './components/user/contact-user/contact-user.component';
import { OrderUserComponent } from './components/user/order-user/order-user.component';
import { CartUserComponent } from './components/user/cart-user/cart-user.component';
import { ProductUserComponent } from './components/user/product-user/product-user.component';
import { ConceUserComponent } from './components/user/conce-user/conce-user.component';
import { EventUserComponent } from './components/user/event-user/event-user.component';
import { MenuUserComponent } from './components/user/menu-user/menu-user.component';

import { NavAdminComponent } from './components/admin/nav-admin/nav-admin.component';
import { MessageAdminComponent } from './components/admin/message-admin/message-admin.component';
import { SidebarAdminComponent } from './components/admin/sidebar-admin/sidebar-admin.component';
import { ReserveAdminComponent } from './components/admin/reserve-admin/reserve-admin.component';
import { ConceAdminComponent } from './components/admin/conce-admin/conce-admin.component';
import { EventAdminComponent } from './components/admin/event-admin/event-admin.component';
import { MenuAdminComponent } from './components/admin/menu-admin/menu-admin.component';
import { SnackAdminComponent } from './components/admin/snack-admin/snack-admin.component';
import { OrderAdminComponent } from './components/admin/order-admin/order-admin.component';
import { ProductAdminComponent } from './components/admin/product-admin/product-admin.component';


/*import { fakeBackendProvider} from './helpers/fake-backend-interceptor';*/

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent,canActivate:[AuthGuard]},
  {path:'menu', component: MenuComponent},
  {path:'servings', component: ServingsComponent},
  {path:'order', component: OrderComponent},
  {path:'reserve', component: ReserveComponent},
  {path:'contact', component: ContactComponent},
  {path:'event', component: EventComponent},
  {path:'user', component: UserComponent,canActivate:[AuthGuard]},
  {path:'servings_user', component: ServingsUserComponent,canActivate:[AuthGuard]},
  {path:'reserve_user', component: ReserveUserComponent,canActivate:[AuthGuard]},
  {path:'order_user', component: OrderUserComponent,canActivate:[AuthGuard]},
  {path:'product_user', component: ProductUserComponent,canActivate:[AuthGuard]},
  {path:'contact_user', component: ContactUserComponent,canActivate:[AuthGuard]},
  {path:'conce_user', component: ConceUserComponent,canActivate:[AuthGuard]},
  {path:'cart_user', component: CartUserComponent,canActivate:[AuthGuard]},
  {path:'menu_user', component: MenuUserComponent,canActivate:[AuthGuard]},
  {path:'event_user', component: EventUserComponent,canActivate:[AuthGuard]},
  {path:'message_admin', component: MessageAdminComponent,canActivate:[AuthGuard]},
  {path:'reserve_admin', component: ReserveAdminComponent,canActivate:[AuthGuard]},
  {path:'conce_admin', component: ConceAdminComponent,canActivate:[AuthGuard]},
  {path:'event_admin', component: EventAdminComponent,canActivate:[AuthGuard]},
  {path:'menu_admin', component: MenuAdminComponent,canActivate:[AuthGuard]},
  {path:'snack_admin', component: SnackAdminComponent,canActivate:[AuthGuard]},
  {path:'order_admin', component: OrderAdminComponent,canActivate:[AuthGuard]},
  {path:'product_admin', component: ProductAdminComponent,canActivate:[AuthGuard]},
  {path:'sidebar', component: SidebarAdminComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    MenuComponent,
    ServingsComponent,
    OrderComponent,
    ReserveComponent,
    ContactComponent,
    AlertComponent,
    UserComponent,
    NavUserComponent,
    ServingsUserComponent,
    ReserveUserComponent,
    ContactUserComponent,
    EventComponent,
    NavAdminComponent,
    MessageAdminComponent,
    OrderUserComponent,
    CartUserComponent,
    SidebarAdminComponent,
    ReserveAdminComponent,
    ProductUserComponent,
    ConceUserComponent,
    EventUserComponent,
    ConceAdminComponent,
    EventAdminComponent,
    MenuAdminComponent,
    SnackAdminComponent,
    FileSelectDirective,
    MenuUserComponent,
    OrderAdminComponent,
    ProductAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    ValidateService, 
    AuthService, 
    AlertService, 
    AuthGuard,
    
   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

   /* fakeBackendProvider*/

  ],
  exports: [MatButtonModule, MatSidenavModule, MatListModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
