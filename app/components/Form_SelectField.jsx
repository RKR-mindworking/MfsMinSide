import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  div: {
    display: 'flex',
    flex:1,
    alignItems: 'center',
    paddingBottom:10,
  },
  title: {
    width:200
  },
  form: {
    flex:1
  }
}

const Form_SelectField = (props) => {

  return (

    <SelectField
      fullWidth
      floatingLabelText={props.title}
      onChange={ (e, index, value) => props.handleChange(value) }
      value={ props.selectedValue }>
      {
        props.dataProvider.map( (item, i) => {
          return <MenuItem value={item.name} key={i} primaryText={item.name} />
        })
      }
    </SelectField>



  );

}

export default Form_SelectField;
