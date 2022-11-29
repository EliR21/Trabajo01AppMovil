import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  close(){
    if(GlobaldataService.isLogged){
      GlobaldataService.isLogged = false;
      GlobaldataService.userObject = '';
      this.router.navigate(['/login']);
    }
  }

}