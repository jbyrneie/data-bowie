import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import ProductList from './components/productList';
import ProductDetails from './components/productDetails';
import Iframe from './components/iframe';

console.log('in views...');
let prefix=''
if (process.env.NODE_ENV === 'production')
  prefix = process.env.REACT_APP_DATA_BOWIE_MOUNT

const views = {
  home: new Route({
    path: `${prefix}/`,
    component: <ProductList/>
  }),
  iframe: new Route({
    path: `${prefix}/iframe`,
    component: <Iframe/>
  }),
  product: new Route({
    path: '${prefix}/product',
    component: <ProductDetails/>,
    beforeEnter: (route, params, store) => {
    }
  }),
  products: new Route({
    path: '${prefix}/products',
    component: <ProductList/>
  }),
  catchall: new Route({
    path:`${prefix}/:def`,
    component: <ProductList/>
  })
};
export default views;
