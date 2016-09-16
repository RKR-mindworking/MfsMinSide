import React, { PropTypes } from 'react';

import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const BtnContentAdd = (props) => {
  return (
    <RaisedButton secondary={true} icon={<ContentAdd style={{paddingBottom:5}} />} labelPosition="before" label={props.btnLabel} onClick = { props.btnClick } />
  )
}

export default BtnContentAdd
