import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ContaPage } from '../pages/conta/conta';
import { CardapioPage } from '../pages/cardapio/cardapio';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SobrePage } from '../pages/sobre/sobre';
import { FazerpedidoPage } from '../pages/fazerpedido/fazerpedido';
import { PedidosPage } from '../pages/pedidos/pedidos';

@NgModule({
  declarations: [
    MyApp,
    RestaurantesPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    ContaPage,
    CardapioPage,
    SobrePage,
    FazerpedidoPage,
    PedidosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantesPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    ContaPage,
    CardapioPage,
    SobrePage,
    FazerpedidoPage,
    PedidosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
