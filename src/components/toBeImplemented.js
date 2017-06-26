import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import views from '../views'

class ToBeImplemented extends Component {
  buttonClick = (event) => {
    console.log('event: %s', event);
    this.props.store.router.goTo(views.systemInfo)
  }

  render() {
    return (
      <h1>Just a placeholder for stuff</h1>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(ToBeImplemented));
