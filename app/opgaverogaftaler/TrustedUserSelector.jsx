import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField';

const textfieldStyles = require('textfieldStyles').get();

const TrustedUserSelector = (props) => {
  return (
    <SelectField fullWidth labelStyle={textfieldStyles.labelStyle} style={textfieldStyles.textfield} floatingLabelFixed floatingLabelText="Bruger" hintText="Vælg en bruger"/>
  )
}

export default TrustedUserSelector
