import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateSignup(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined ){
      return false;
    } else{
      return true;
    }
  } 
 
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePhone(phone) {
    var phoneno = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return phoneno.test(phone);
  }

  validateMsg(message){
    if(message.name == undefined ||  message.email == undefined || message.messages == undefined){
      return false;
    } else{
      return true;
    } 
  } 

  validateDelivery(order){
    if( (order.name == undefined || 
      order.email == undefined || 
      order.phone == undefined || 
      order.date == undefined || order.address == undefined) || !((order.coffee == undefined && order.cquantity==undefined) && (order.food == undefined && order.fquantity == undefined))){
      
      return false;

    }else{
      return true;
    } 
  }

  validatedrink(order){//&& !validateOrder()
    if(order.coffee == undefined && order.cquantity == undefined){
      return false;
    }else{
      return true;
    } 
  }
}
