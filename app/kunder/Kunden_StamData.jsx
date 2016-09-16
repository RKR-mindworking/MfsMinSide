import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ContentLink from 'ContentLink';
import FaktaItem from 'FaktaItem';
import ContentCollapsable from 'ContentCollapsable';
import Kunden_StamData_Kontaktoplysninger from 'Kunden_StamData_Kontaktoplysninger';
import Kunden_StamData_Tags from 'Kunden_StamData_Tags';
import Kunden_StamData_SocialeMedier from 'Kunden_StamData_SocialeMedier';
import Kunden_StamData_MinSide from 'Kunden_StamData_MinSide';
import Kunden_StamData_Relationer from 'Kunden_StamData_Relationer';
import Kunden_StamData_Notater from 'Kunden_StamData_Notater';
import Kunden_StamData_Samtykke from 'Kunden_StamData_Samtykke';
import Kunden_StamData_Markedsfoering from 'Kunden_StamData_Markedsfoering';
import Kunden_StamData_PrimaerKontaktform from 'Kunden_StamData_PrimaerKontaktform';
import InfoItem from 'InfoItem';
// ----------------------------------------------------------------------------

const styles = {
  infoDiv: {
    display: 'flex',
    height:119,
  },
  infoRow: {
    display: 'flex',
  },
  info: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:13,
    flex: 1,
    justifyContent: 'space-between',
  },
  map: {
    backgroundColor: '#EEE',
    padding: 2,
    width: 161,
  },
  preview: {
    backgroundColor: '#EEE',
    padding: 2,
    marginLeft:1,
    width: 161,
  }
}

// ============================================================================
// View Markup
const Kunden_StamData = ({customer}) => {
  if(!customer.firstName) {
    return <div></div>
  }

  return (
    <div>
      <div style={{display:"flex"}}>
        <div style={{flex:1, marginRight:10}}>
          <Kunden_StamData_Kontaktoplysninger customer = {customer} />
          <Kunden_StamData_SocialeMedier />
          <Kunden_StamData_MinSide />
        </div>
        <div style={{flex:1, marginLeft:10}}>
          <Kunden_StamData_Notater />
          <Kunden_StamData_Tags />
          <Kunden_StamData_Relationer />
          <Kunden_StamData_Samtykke />
          <Kunden_StamData_Markedsfoering />
          <Kunden_StamData_PrimaerKontaktform />
        </div>
      </div>

      <ContentCollapsable title="Nuværende bolig" />
      <ContentCollapsable title="Salgsovervejelser" />
      <ContentCollapsable title="Offentlig vurdering" />
      <ContentCollapsable title="Tidligere salgspriser" />

    </div>
  );
}

// ============================================================================
// PropTypes
Kunden_StamData.propTypes = {
  customer: React.PropTypes.object.isRequired
}

// ****************************************************************************
export default Kunden_StamData;
// ****************************************************************************
