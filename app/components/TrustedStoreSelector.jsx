import React, { PropTypes } from 'react'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux';

const textfieldStyles = require('textfieldStyles').get();

class TrustedStoreSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shopValue: "123",
      shopItems: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var shopItems = [];

    this.props.stores.map( (shop ) => {
      shopItems.push(<MenuItem key={shop.id} value={shop.id} primaryText={`${shop.name}(${shop.id})`} />);
    });

    if( shopItems.length > 0) {
      this.setState( {
        shopValue: "123",
        shopItems: shopItems
      });
    }


  }

  render() {
    return (
      <SelectField
        fullWidth={this.props.fullWidth}
        floatingLabelFixed
        floatingLabelText="Butik"
        hintText="Vælg en butik"
        onChange={this.handleChange}
        value={this.state.shopValue}
        >
        { this.state.shopItems }
      </SelectField>
    )
  }

  handleChange(event, index, value) {
    this.setState({ shopValue: value });
    this.props.handleChange(value);
  }

}

// ==============================================================================
// Default Props
TrustedStoreSelector.defaultProps = {
  fullWidth: false
}
// ==============================================================================
// PropTypes

TrustedStoreSelector.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
  fullWidth: React.PropTypes.bool
}

// ==============================================================================
// REDUX

function mapStateToProps( state ) {
  return {
    stores: state.stores
  }
}

export default connect( mapStateToProps )( TrustedStoreSelector );
