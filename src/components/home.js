import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardText} from 'material-ui/Card';
import Group from 'material-ui/svg-icons/social/group'
import Paper from 'material-ui/Paper';
import {observer, inject} from 'mobx-react';

import '../App.css';
import AppBar from './appBar'
import Info from './info'

class Home extends Component {
  componentDidMount() {
    this.props.store.serverStore.getServerInfo()
    .then ( function(serverInfo) {
      console.log("post htp call" , serverInfo);
    })
  }

  render() {
    const serverInfo = this.props.store.serverStore.serverInfo;

    return (
      <div className="App">
        <AppBar style={{height: '50px'}}/>
        <section style={{alignItems:'center', justifyContent:'center'}}>
          <Paper style={{textAlign: 'left', margin:20, paddingTop:5, paddingBottom: 20, paddingLeft: 20, paddingRight:20, backgroundColor:'#eee'}} zDepth={2} >
            <div>
              <Group/>
              <span style={{fontWeight: 600, fontSize: '2em'}}>Data Bowie</span>
              <p style={{borderBottom: 'solid 1px #000', paddingBottom:20}}>While the Hoff is gone to the beach, Ziggy Stardust will watch over your databases</p>
              <div><b>Server:</b> {serverInfo.name }</div>
              <div><b>Version:</b> {serverInfo.version !== undefined ? serverInfo.version : null}</div>
              <div><b>Last Start Time:</b> {serverInfo.startDate !== undefined ? serverInfo.startDate : null}</div>
            </div>
          </Paper>

          <GridList
              cols={3}
              cellHeight={200}
              style={{height: '100%', textAlign: 'left'}}
          >
            <GridTile style={{paddingTop:10, paddingBottom:10, paddingLeft:16, paddingRight:16}}>
              <Info
                title="System Info"
                description="View info such as current processes, tables, database sizes, etc."
                view="systemInfo"/>
            </GridTile>
            <GridTile style={{paddingTop:10, paddingBottom:10,  paddingLeft:16, paddingRight:16}}>
              <Info
                title="Maintenance"
                description="Here you'll find tools to help you tune your database. This section includes information such as unused indexes, unused stored procedures, fragmented indexes, etc."
                view="maintenance"/>
            </GridTile>
            <GridTile style={{paddingTop:10, paddingBottom:10, paddingLeft:16, paddingRight:16}}>
              <Info
                title="Data Dictionary"
                description="What the heck is that table even used for? Read through the data dictionary and find out. Even better, if you know, edit the dictionary and share your knowledge."
                view="dictionary"/>
            </GridTile>
          </GridList>
        </section>
      </div>
    );
  }
}

export default inject((allStores) => ({ ...allStores }))(observer(Home));
