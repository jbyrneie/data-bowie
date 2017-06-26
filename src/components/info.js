import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Info extends Component {
  render() {
    return (
      <Card style={{paddingTop:0, paddingBottom:0}}>
        <CardTitle style={{paddingTop:0, paddingBottom:5}} title={this.props.title} />
        <CardText style={{paddingTop:0}}>
          {this.props.description}
        </CardText>
        <CardActions>
          <FlatButton
            label={this.props.title}
            backgroundColor='#80d7e0'
            hoverColor='#40b5c5' />
        </CardActions>
      </Card>
    );
  }
}

export default Info;
