import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import { connect } from 'react-redux';
import { nySag } from 'actions';


const items = [
  <MenuItem key={1} value={1} primaryText="Berlinske Tidende" />,
  <MenuItem key={2} value={2} primaryText="Boligmagasinet Estate" />,
  <MenuItem key={3} value={3} primaryText="MW_Daily" />,
  <MenuItem key={4} value={4} primaryText="Villabyerne" />,
];

const styles = {
  block: {

  },
  checkbox: {
    marginBottom: 5,

  },
  bg:{
    backgroundColor:'#fafafa'
  }
};

export class SagerCreateNew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      medieValue:undefined
    };
  }



  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    this.setState({
      open: nextProps.nySag
    })
  }

  handleClose = () => {
    var { dispatch } = this.props;
    dispatch(nySag(false));
  };

  handleChange = (event, index, value) => {
    this.setState({medieValue:value});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"

        disabled={false}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <Dialog bodyStyle={styles.bg} titleStyle={styles.bg} actionsContainerStyle={styles.bg} title="Ny Sag" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} >
        <Paper>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{flex:1, padding:20}}>


          </div>

        </div>
      </Paper>
    </Dialog>
    );
  }


}

export default connect( state => {
  return {
    ...state,
    open: state
  }
})(SagerCreateNew);
