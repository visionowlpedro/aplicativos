import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Usuario } from '../../domain/usuario/usuario';
import { Http } from '@angular/http';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public data;
  public http;
  public usuario: Usuario;
  public usuarioLogado: Usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    http: Http
  ) {
    this.data = {};
    this.data.response = '';
    this.http = http;
    this.usuario = new Usuario(null,null, null, null, null);
  }

  logar(){

     var link = 'http://marmita.idsgeo.com/index.php/page/login_ionic';
     var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password })

     this.http.post(link, data)
      .subscribe( data => {
        this.data.response = data._body;
        var res = this.data.response.split("|");
        if(res[1] == "sucesso"){
          sessionStorage.setItem("usuarioId", res[0]);
          sessionStorage.setItem("usuarioLogado", this.usuario.email);
          sessionStorage.setItem("flagLogado", "sim");
          this.navCtrl.push(TabsPage);
          console.log("Logou no sistema com sucesso!");
        }else{
          console.log("Login invalido");
        }
      },error => {
        console.log("nao foi possivel se conectar");
      });

  }

  cadastro(params){
    if (!params) {
      params = {};
    }
    this.navCtrl.push(CadastroPage);
  }

}
