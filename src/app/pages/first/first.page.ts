import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private menuCtrl:MenuController, private navCtrl:NavController) { }

  ngOnInit() {
  }
  
  profile(){
    this.navCtrl.navigateRoot("/menu/profile");
  }

}
