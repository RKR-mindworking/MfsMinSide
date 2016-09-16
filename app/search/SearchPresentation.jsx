import React, { PropTypes } from 'react'

import AutoComplete from 'material-ui/AutoComplete';

const SearchPresentation = ({dataSource, handleUpdateInput, handleNewRequest}) => {
  return (
    <AutoComplete
      hintText="Søg på sagsnummber, adresse, person ect..."
      inputStyle={{color: '#EEEEEE', paddingLeft:0}}
      hintStyle={{color: '#777777', paddingLeft:0}}
      underlineStyle={{borderColor:'#666666'}}
      fullWidth={true}
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource}
      onUpdateInput={handleUpdateInput}
      onNewRequest={handleNewRequest }
      />
  )
}

export default SearchPresentation
