import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';

import ActivityFilter from 'ActivityFilter';
import ActivityTable from 'ActivityTable';

import EntryBox from 'EntryBox';

import TrustedStoreSelector from 'TrustedStoreSelector';
import TrustedUserSelector from 'TrustedUserSelector';

const contentStyles = require('contentStyles').get();
const crmColors = require('crmColors');

const OpgaverOgAftaler_Presentation = (props) => {

  return (

    <div style={contentStyles.outerDiv}>
      <div style={contentStyles.horizontalFlexContainer}>
        <Paper style={{ width: 250, marginRight:10, paddingBottom:10, paddingLeft:20, paddingRight:20}}>
            <TrustedStoreSelector
              fullWidth
              handleChange={props.handleTrusedStoreSelectorChange}
              />
            <TrustedUserSelector />
        </Paper>
        <Paper style={{width:'100%'}}>

          <div style={{display:'flex', flexDirection:'row', alignItems: 'center', flex:1, border: '1px solid #fff',paddingTop:10, paddingLeft:20, paddingRight:20}}>

            <div><EntryBox entryColor={crmColors.get(0)} entryName="Leads" entryCount="34" /></div>

            <div className="entrybox">
              <ul>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(1)} entryName="Sælger emner" entryCount="1" overdueCount={1} /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(2)} entryName="Under vurdering" entryCount="1" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(3)} entryName="Formidlingsaftale" entryCount="2" overdueCount={1} /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(4)} entryName="Afventer sælger" entryCount="0" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(5)} entryName="Klargøring til salg" entryCount="1" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(6)} entryName="Salgsaktiv" entryCount="1" overdueCount={1}/></li>
              </ul>
              <ul>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(7)} entryName="Køber emner" entryCount="0" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(8)} entryName="Fremvisning" entryCount="0" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(9)} entryName="Åbent huse" entryCount="1" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(10)} entryName="Køberopfølging" entryCount="1" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(11)} entryName="Købsaftale" entryCount="1" /></li>
                <li><EntryBox entryWidth={props.entryWidth} entryColor={crmColors.get(12)} entryName="Kundepleje" entryCount="0" /></li>
              </ul>

            </div>

          </div>
        </Paper>
      </div>



      <Paper style={{marginTop:10}}>
        <ActivityFilter textFilterFloatingLabelText="Fritekst filter" />
        <Divider />
        <ActivityTable activities={props.activities}/>
      </Paper>
    </div>
  )
}

export default OpgaverOgAftaler_Presentation
