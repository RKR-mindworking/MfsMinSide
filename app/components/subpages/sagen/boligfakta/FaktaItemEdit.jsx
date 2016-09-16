import React from 'react';
import Divider from 'material-ui/Divider';

import TextField from 'material-ui/TextField';

const styles = {
  div: {
    display: 'flex',
    flex:1,
    alignItems: 'center',
    paddingBottom:10,

  },

  header: {
    fontSize: 13,
    color: '#666666',
    width: 200,
  },
  subHeader: {
    fontSize: 12,
    color: '#999999',
    flex:1,
  },
  textfield : {
    fontSize: 13,
    marginRight: 20,

  },
  labelStyle: {
    fontSize: 13
  },
  inputStyle: {
    fontSize: 13,
    marginTop:-1,
  }

}

export default class FaktaItemEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {

    this.setState({
      value: this.props.subHeader,
    });
  }

  handleOnBlur = (event) => {
    this.props.persistData(this.props.field, event.target.value);
  }

  handleChange = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

  render() {
    return (
      <div>
        <div style={styles.div}>
          <div style={styles.header}>{this.props.header}</div>
          <div style={styles.subHeader}><TextField  fullWidth={true} labelStyle={styles.labelStyle} inputStyle={styles.inputStyle} styles={styles.textfield} onBlur={this.handleOnBlur}  onChange={this.handleChange} value={ this.state.value }/>   </div>
        </div>
        <Divider />
      </div>
    );
  }
}
