import React from 'react';

import ContentLink from 'ContentLink';

import { connect } from 'react-redux';

export class ContentMenu extends React.Component {
  render() {

    var getMenu = () => {


      var r = this.props.routes;
      var l = r.length;
      var last = r[l-1];

      if(last.name === "Butikken") {
        return <ul>
            <ContentLink toLink="Butikken/Emneannoncering/Indrykninger" label="Indrykninger" />
            <ContentLink toLink="Butikken/Emneannoncering/Annoncebunde" label="Annoncebunde" />
            <ContentLink toLink="Butikken/Emneannoncering/Annoncetoppe" label="Annoncetoppe" />
            <ContentLink toLink="Butikken/Emneannoncering/Spots" label="Spots" />
          </ul>
      }else if(last.name === "Sagen") {
        return <ul>
            <ContentLink toLink="Sagen/Vurdering" label="Vurdering" />
            <ContentLink toLink="Sagen/Formidlingsaftale" label="Formidlingsaftale" />
            <ContentLink toLink="Sagen/SalgLeje" label="Salg/Leje" />
            <ContentLink toLink="Sagen/Købsaftale" label="Købsaftale" />
            <ContentLink toLink="Sagen/SolgtUdlejet" label="Solgt/Udlejet" />
            <ContentLink toLink="Sagen/Retur" label="Retur" />
            <ContentLink toLink="Sagen/TabsFA" label="Tabs FA" />
            <ContentLink toLink="Sagen/Arkiv" label="Arkiv" />

          </ul>
      }else
      {
        return undefined;
      }







    }


    return (
      <div className="ContentMenu">
        {getMenu()}
      </div>
    );
  }
}

export default connect()(ContentMenu);
