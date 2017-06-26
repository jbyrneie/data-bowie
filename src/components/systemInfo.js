import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import Paper from 'material-ui/Paper';
import AppBar from './appBar'

class SystemInfo extends Component {
  componentDidMount() {
    this.props.store.serverStore.getSystemInfo()
  }

  render() {
    return (
      <div>
        <AppBar style={{height: '50px'}}/>
        <section style={{alignItems:'center', justifyContent:'center'}}>
          <Paper style={{textAlign: 'left', margin:20, paddingTop:5, paddingBottom: 20, paddingLeft: 20, paddingRight:20, backgroundColor:'#eee'}} zDepth={2} >
            <span style={{fontWeight: 600, fontSize: '2em'}}>SystemInfo</span>
            <ul>
              <li>System Information</li>
              <li>System Processes</li>
              <li>Host/Program Connection Stats</li>
              <li>All Tables</li>
              <li>DB Space Used</li>
              <li>Table Space Used</li>
            </ul>
          </Paper>
        </section>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(SystemInfo));
