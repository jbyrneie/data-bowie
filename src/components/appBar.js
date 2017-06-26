import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import _ from 'lodash';
import Group from 'material-ui/svg-icons/social/group'

// ui imports
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../App.css';

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: "MASTER"};
  }

  databaseChange = (event, index, value) => {
    this.props.store.serverStore.getDatabases()
  }

  serverChange = (event, index, value) => {
    console.log("server changed ", value, event)
    this.props.store.serverStore.setSelectedServer(value)
  }

  componentDidMount() {
    this.props.store.serverStore.getServers()
    console.log("servers:", JSON.stringify(this.props.store.serverStore.servers));
  }

  render() {
    console.log('render called....');
    const servers = this.props.store.serverStore.servers;
    const databases = this.props.store.serverStore.databases;

    return (
      <div>
      <div className="clearfix">
        <span style={{float: 'left', marginLeft: '10px'}}>
          <Group/>
          <span style={{fontWeight: 600, fontSize: '2em'}}>Data Bowie</span>
        </span>
        <span style={{float: 'right', marginRight: '10px'}}>
          Options | <span style={{fontWeight: 600, paddingBottom:20}}>Server:</span>
          <DropDownMenu value={this.props.store.serverStore.selectedServer} onChange={this.serverChange}>
          {
            servers.map( (s,i) => {
              return (
                <MenuItem value={s} primaryText={s} key={i}/>
              )
            })
          }
          </DropDownMenu>

          | <span style={{fontWeight: 600, paddingBottom:20}}>Database:</span>
          <DropDownMenu value={this.props.store.serverStore.selectedDatabase} onChange={this.databaseChange}>
          {
            databases.map( (db,i) => {
              return (
                <MenuItem value={db} primaryText={db} key={i}/>
              )
            })
          }
          </DropDownMenu>
        </span>
      </div>
      <div>  <hr style={{marginTop:'0', marginBottom:'0', border:'0', borderTop:'1px solid #e9ebed'}} /></div>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(AppBar));
