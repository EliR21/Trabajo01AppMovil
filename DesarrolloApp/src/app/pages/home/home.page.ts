import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { AsignaturasPage } from '../asignaturas/asignaturas.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  pageTitle = 'home';
  isNotHome = false;
  username = '';
  loading : HTMLIonLoadingElement;


  pages = '';

  constructor(private loadingCtrl: LoadingController,
    private router: Router, private authProvider: AuthProvider, public navCtrl: NavController) {}

  ngOnInit(): void {    
    this.cargarLoading('Bienvenido');
    console.log('OnInit');
  }
  iniciarApp(){
    if(this.authProvider.esProfe()){
      this.router.navigate(['/admn'])

    } else{
      this.router.navigate(['/asignaturas'])

    }
  }
  ionViewWillEnter(){
    if(GlobaldataService.isLogged){
      this.username = GlobaldataService.userObject;
      
    }
    else{
      this.router.navigate(['/login']);
    }  
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewCanEnter(){
    return this.authProvider.isLoggedIn();
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  cargarLoading(mensaje: string){
    this.presentLoading(mensaje);
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  
}

