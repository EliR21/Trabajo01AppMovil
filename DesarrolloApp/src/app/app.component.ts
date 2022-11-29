import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthProvider } from 'src/app/providers/auth/auth';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'body' },
    { title: 'Nosotros', url: '/about', icon: 'people' },
    { title: 'Institucion', url: '/institucion', icon: 'school' },
  ];
  constructor(private router: Router, public navCtrl: NavController, private authProvider: AuthProvider) {}
}