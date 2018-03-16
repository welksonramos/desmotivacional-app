import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController) { }

  showInfo() {
    let alert = this.alertCtrl.create({
      title: 'Sobre',
      subTitle: 'Desmotivacional',
      message: 'Mensagens desmotivacionais são como mensagens motivacionais, porém com um teor mais realistas.'
    });

    alert.present();
  }

}
