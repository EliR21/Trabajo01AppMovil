import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'login';
  isNotHome = true;

  //Model
  user : any = {
    email: '',
    password : ''
  }
  
  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validateModel(this.user)){
      GlobaldataService.isLogged = true;
      GlobaldataService.userObject = this.user.email;
      this.presentToast('Bienvenido ' + this.user.email);
      this.router.navigate(['/']);
    }
    else{
      this.presentToast('Debes ingresar: ' + this.field);
    }
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:1000
    });
    toast.present();
  }


}
