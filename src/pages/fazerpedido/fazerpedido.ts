import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { Pedido } from '../../domain/pedido/pedido';
import { Usuario } from '../../domain/usuario/usuario';
import { PedidosPage } from '../pedidos/pedidos';


/**
 * Generated class for the FazerpedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fazerpedido',
  templateUrl: 'fazerpedido.html',
})
export class FazerpedidoPage {

  public cardapio: Cardapio;
  public data;
  public http;
  public url: string;
  public pedido: Pedido;
  public usuario: Usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    http: Http,
    private _alertCtrl: AlertController
  ) {
    this.pedido = new Pedido(null, null, null, null, null, null, null, null)
    this.pedido.cardapio = this.navParams.get('cardapioSelecionado');
    this.http = http;
    this.data = {};
    this.data.response = '';
    this.url = "http://marmita.idsgeo.com/index.php/page/cadastrar_pedido_ionic";
  }

  ngOnInit() {
    console.log(sessionStorage.getItem('usuarioId'));
    console.log(sessionStorage.getItem('usuarioLogado'));
    this.pedido.usuario = new Usuario(sessionStorage.getItem('usuarioId'), "Pedro Henrique", sessionStorage.getItem('usuarioLogado'), null, null);
    if (sessionStorage.getItem('flagLogado') != "sim") {
      this.navCtrl.setRoot(LoginPage);
    }
  }

  submit() {
    var data = JSON.stringify({
      cardapioId: this.pedido.cardapio.id,
      usuarioId: this.pedido.usuario.id,
      valor: this.pedido.cardapio.preco,
      taxaEntrega: "10.00",
      nome: this.pedido.usuario.nome,
      email: this.pedido.usuario.email,
      observacao: this.pedido.observacao
    });

    // Iniciando a conexão HTTP para cadastro via JSON
    this.http.post(this.url, data)
      .subscribe(data => {
        this.data.response = data._body;
        this._alertCtrl
          .create({
            title: 'Sucesso',
            buttons: [{ text: 'Ok' }],
            subTitle: this.data.response
          }).present();
          this.navCtrl.setRoot(PedidosPage);

      }, error => {
        console.log("Ocorreu algum erro!");
        this._alertCtrl
          .create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Estou ciente!' }],
            subTitle: 'Não foi possível obter a lista de restaurantes. Tente novamente'
          }).present();
      });

    console.log(data);
  }
}
