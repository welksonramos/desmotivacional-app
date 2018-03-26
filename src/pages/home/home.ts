import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

declare var require: any;

var desmotivacional = require('desmotivacional-cli');

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quote: any;

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController) { }

  showInfo() {
    let alert = this.alertCtrl.create({
      title: 'Sobre',
      message: 'Mensagens desmotivacionais são como mensagens motivacionais, porém com um teor mais realista.\nO objetivo não é promover nenhum tipo bullyng, mas sim dá aquele lembrete de que nem tudo são flores.'
    });

    alert.present();
  }

  ionViewDidLoad() {
    return this.Quotes().then(data => this.quote = data);
  }


  Quotes() {
    return new Promise((resolve, reject) => {
      let data = desmotivacional.random();
      resolve(data);
    });
  }

  randomQuotes() {
    return this.Quotes().then(data => this.quote = data);
  }

}
