import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';


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

  constructor(private loadingCtrl: LoadingController,
    private router: Router) {}

  ngOnInit(): void {    
    this.cargarLoading('Bienvenido');
    console.log('OnInit');
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