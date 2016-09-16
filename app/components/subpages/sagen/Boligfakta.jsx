import React from 'react';
import Paper from 'material-ui/Paper'
import ContentLink from 'ContentLink';
import ContentMenu3 from 'ContentMenu3';

import { loadSagsInfo } from 'sagerActions';

import { connect } from 'react-redux';

export class Boligfakta extends React.Component {

  componentDidMount() {

  }

  render() {

    var menu = <ul>
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Data" label="Data" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Noter" label="Noter" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Tekster" label="Tekster" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Billeder" label="Billeder" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Dokumenter" label="Dokumenter" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Luftfoto" label="Luftfoto" />
    </ul>

    return (
      <div>

          <Paper>
          <div style={{borderTop:' 1px solid #ddd'}}/>
          <div className="App-area-right-menu">
            <div>
              <ContentMenu3 menu={menu} />
            </div>
          </div>
      </Paper>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect( state => {

  return {
    sagsInfo: state.sagsInfo,
    showSag: state.showSag
  }
})(Boligfakta);
