import React from 'react';
import Paper from 'material-ui/Paper'
import ContentLink from 'ContentLink';
import ContentMenu3 from 'ContentMenu3';

export default class Aktiviteter extends React.Component {
  render() {

    var menu = <ul>
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Data" label="Data" />
      <ContentLink toLink="/Sager/Sagen/Boligfakta/Noter" label="Noter" />
      <ContentLink toLink="Sagen/SalgLeje" label="Tekster" />
      <ContentLink toLink="Sagen/Købsaftale" label="Billeder" />
      <ContentLink toLink="Sagen/SolgtUdlejet" label="Dokumenter" />
      <ContentLink toLink="Sagen/Retur" label="Luftfoto" />
    </ul>

    return (
      <div >
        
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
