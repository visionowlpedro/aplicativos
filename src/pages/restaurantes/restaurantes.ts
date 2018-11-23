import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Restaurante } from '../../domain/restaurante/restaurante';
import { Http } from '@angular/http';
import { CardapioPage } from '../cardapio/cardapio';

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  // objeto
  public restaurantes: Restaurante[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) {}

  ngOnInit(){

    // carregamento
    let loader = this._loadingCtrl.create({
    content: 'Listando Restaurantes. Aguarde...'
  });
  loader.present();

  this._http
  .get('http://marmita.idsgeo.com/index.php/page/get_ionic')
  .map(res => res.json())
  .toPromise()
  .then(restaurantes => {
    this.restaurantes = restaurantes;
    loader.dismiss();
  })
  .catch(err => {
    console.log(err);
    this._alertCtrl
    .create({
      title: 'Falha na conexão',
      buttons: [{ text: 'Estou ciente!' }],
      subTitle: 'Não foi possível obter a lista.'
    }).present();
  });
}

seleciona(restaurante){
  this.navCtrl.push(CardapioPage, { restauranteSelecionado: restaurante });
}

}
