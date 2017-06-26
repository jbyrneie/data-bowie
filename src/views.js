import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Home from './components/home'
import SystemInfo from './components/systemInfo'

let prefix=''
if (process.env.NODE_ENV === 'production')
  prefix = process.env.REACT_APP_DATA_BOWIE_MOUNT

console.log('in views... prefix: %s', prefix);

const views = {
  home: new Route({
    path: `${prefix}/`,
    component: <Home/>
  }),
  systemInfo: new Route({
    path: `${prefix}/systemInfo`,
    component: <SystemInfo/>
  }),
  catchall: new Route({
    path:`${prefix}/:def`,
    component: <Home/>
  })
};
export default views;
