import AppStore from './appStore';
import ProductsStore from './productsStore';
import ProductStore from './productStore';
import ServerStore from './serverStore';
import {RouterStore} from 'mobx-router';

const store = {
  appStore: new AppStore(),
  productStore: new ProductStore(),
  productsStore: new ProductsStore(),
  serverStore: new ServerStore(),
  router: new RouterStore()
};

export default store;
