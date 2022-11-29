import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthProvider } from 'src/app/providers/auth/auth';
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
  user = {
    email: '',
    password : ''
  }
  
  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router, private authProvider: AuthProvider, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error al logearse',
      message: 'Verifique sus credenciales',
      buttons: ['Ok']
    });

    await alert.present();

  }

  loginUser(){
    this.authProvider.login(this.user.email, this.user.password).then(success => {
      if (success) {
        GlobaldataService.isLogged = true;
        GlobaldataService.userObject = this.user.email;
        this.presentToast('Bienvenido ' + this.user.email);
        this.router.navigate(['/home']);
        
      } else {
        this.presentAlert()

      }
    }).catch(err => {
      let alert = this.alertCtrl.create({
        header: 'Error al logearse',
        message: 'Verifique sus credenciales',
        buttons: ['Ok']
      })
    } )
  }


  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }
 
}
