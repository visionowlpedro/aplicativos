import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SobrePage } from '../pages/sobre/sobre';
import { ContaPage } from '../pages/conta/conta';
import { LoginPage } from '../pages/login/login';
import { PedidosPage } from '../pages/pedidos/pedidos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  home(){
    this.navCtrl.setRoot(TabsPage);
  }
  login(){
    this.navCtrl.setRoot(LoginPage);
  }

  pedidos(){
    this.navCtrl.setRoot(PedidosPage);
  }

  sobre(){
    this.navCtrl.setRoot(SobrePage);
  }
}
