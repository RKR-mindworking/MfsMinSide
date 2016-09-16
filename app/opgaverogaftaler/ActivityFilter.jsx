import React, { PropTypes } from 'react';


import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import BtnContentAdd from 'BtnContentAdd';

const textfieldStyles = require('textfieldStyles').get();
const contentStyles = require('contentStyles').get();



const ActivityFilter = (props) => {

  return (

    <div style={{display:"flex", justifyContent:"space-between"}}>

      <div style={contentStyles.filterDiv}>
        <TextField
          name="textFilter"
          fullWidth={false}
          floatingLabelText={props.textFilterFloatingLabelText}
          floatingLabelFixed={false}
          style={{marginRight: 20, marginBottom:10}}
        />
        <DatePicker

          container="inline"
          autoOk={false}
          hintText="Slutdato"
          floatingLabelText="Vælg slutdato"
          style={{marginRight: 20, marginBottom:10}}
        />
      </div>
      <div style={{paddingRight: 20, paddingTop:23}}>
        <BtnContentAdd btnLabel="Ny aktivitet" btnClick={() => {console.log("Ny Aktivitet")}}/>
      </div>


    </div>
  )
}

ActivityFilter.propTypes = {
  textFilterFloatingLabelText: PropTypes.string.isRequired,
  dataPickerHintText: PropTypes.string.isRequired,
  dataPickerFloatingLabelText: PropTypes.string.isRequired
}

ActivityFilter.defaultProps = {
  textFilterFloatingLabelText: "Howdy",
  dataPickerHintText: "",
  dataPickerFloatingLabelText: ""
};

export default ActivityFilter;
