import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import ProductList from './components/productList';
import ProductDetails from './components/productDetails';
import Iframe from './components/iframe';
import Home from './components/home'

let prefix=''
if (process.env.NODE_ENV === 'production')
  prefix = process.env.REACT_APP_DATA_BOWIE_MOUNT

console.log('in views...', prefix);

const views = {
  home1: new Route({
    path: `${prefix}/`,
    component: <ProductList/>
  }),
  home: new Route({
    path: `${prefix}/hasselhoff`,
    component: <Home/>
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
