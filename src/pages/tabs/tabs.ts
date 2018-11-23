import { Component } from '@angular/core';

import { RestaurantesPage } from '../restaurantes/restaurantes';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RestaurantesPage;

  constructor() {

  }
}
