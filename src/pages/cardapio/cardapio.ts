import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Restaurante } from '../../domain/restaurante/restaurante';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { FazerpedidoPage } from '../fazerpedido/fazerpedido';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html'
})
export class CardapioPage {

  public restaurante: Restaurante;
  public url: string;
  public cardapios: Cardapio[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) {
    this.restaurante = this.navParams.get('restauranteSelecionado');
    console.log(this.restaurante.nome);
    this.url = "http://marmita.idsgeo.com/index.php/page/get_ionic_cardapio_json/"+this.restaurante.id;
  }
  ngOnInit(){
    let loader = this._loadingCtrl.create({
      content: "Buscando caradapio. Aguarde..."
    });
    loader.present();
    this._http
      .get(this.url)
      .map( res => res.json())
      .toPromise()
      .then( cardapios => {
        this.cardapios = cardapios;
        loader.dismiss();
        console.log(this.cardapios);
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Ok estou ciente!'}],
            subTitle: 'Não foi possível obter o cardápio. Tente mais tarde.'
          }).present();
          
      });
  }

  submit(cardapio){
    console.log(cardapio.nome);
    this.navCtrl.push(FazerpedidoPage, {cardapioSelecionado: cardapio});
  }
}
