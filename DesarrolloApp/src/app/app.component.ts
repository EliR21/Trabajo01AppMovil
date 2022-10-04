import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Bienvenido', url: '/home', icon: 'body' },
    { title: 'Nosotros', url: '/about', icon: 'people' },
    { title: 'Código-Qr', url: '/codigo-qr', icon: 'qr-code' },
  ];
  constructor() {}
}