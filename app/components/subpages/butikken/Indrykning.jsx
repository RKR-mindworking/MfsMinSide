
'use strict';
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FileDownload from 'material-ui/svg-icons/file/cloud-download';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Check from 'material-ui/svg-icons/navigation/check';
import No from 'material-ui/svg-icons/av/not-interested';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { nyIndrykning } from 'actions';
import Snackbar from 'material-ui/Snackbar';



const styles2 = require('iconStyle').iconStyle();

const styles = {
  div:{
    display: 'flex',
    alignItems: 'center',

    paddingLeft:20,
    paddingRight:0,
    paddingBottom:0
  },
  divButtonRow:{

    display: 'flex',
    flex:1,
    alignItems: 'center',

    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:20,
    paddingBottom:10
  },
  table:{

  },
  tableRow:{

  },
  tableHeader: {
    backgroundColor: '#f2faf9',
    fontWeight: 'bold'
  },
  textfield : {
    fontSize: 13,
    marginRight: 20,


  },
  labelStyle: {
    fontSize: 13
  },
  inputStyle: {
    fontSize: 13
  },
  raisedButtonIcon: {



  },
  underlineStyle: {
    borderColor: '#ff4400',
  },
}

const items = [
  <MenuItem key={1} value={1} primaryText="Alle butikker" />,
  <MenuItem key={2} value={2} primaryText="Nykredit" />,
  <MenuItem key={3} value={3} primaryText="N232324" />,
  <MenuItem key={4} value={4} primaryText="NC332323" />,
];

const peridodeItems = [
  <MenuItem key={1} value={1} primaryText="Næste 12 måneder" />,
  <MenuItem key={2} value={2} primaryText="Næste 6 måneder" />,
  <MenuItem key={3} value={3} primaryText="Næste 3 måneder" />,
  <MenuItem key={4} value={4} primaryText="Næste 2 uger" />,
  <MenuItem key={4} value={4} primaryText="Seneste 2 uger" />,
  <MenuItem key={3} value={3} primaryText="Seneste 3 måneder" />,
  <MenuItem key={2} value={2} primaryText="Seneste 6 måneder" />,
  <MenuItem key={1} value={1} primaryText="Seneste 12 måneder" />,
];

const cases = [];
for (let i = 0; i < 10; i++ ) {
  cases.push(
    <TableRow key={i}>
      <TableRowColumn>{i}</TableRowColumn>
      <TableRowColumn>Mandag</TableRowColumn>
      <TableRowColumn>19.02.2016</TableRowColumn>
      <TableRowColumn>iPad</TableRowColumn>
      <TableRowColumn>Edc Aarhus</TableRowColumn>
      <TableRowColumn style={{textAlign:'right'}}>2</TableRowColumn>
      <TableRowColumn style={{textAlign:'right'}}>1</TableRowColumn>
      <TableRowColumn style={{textAlign:'center'}}>{getCheckOrNo()}</TableRowColumn>
      <TableRowColumn style={{textAlign:'center'}}>{getCheckOrNo()}</TableRowColumn>
      <TableRowColumn style={{textAlign:'center'}}>{getMore()}</TableRowColumn>

    </TableRow>);
}

// dummy icons
function getCheckOrNo() {
  return  Math.random() > 0.5 ? <Check/> : <No/>
}

function getMore() {
  return  <IconMenu animated={false}
    useLayerForClickAway={true}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Download" />
      <MenuItem primaryText="Kopiér" />
      <MenuItem primaryText="Redigér" />
    </IconMenu>
}

//---------------------------------------------
// Component Structure
//
export class Indrykning extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        butikValue:1,
        periodeValue:1,
        textFieldValue:'',
        tableData: cases,
        selectedItems: [],
        openSnackbar: false
      }

  }



  handleButikChange = (event, index, value) => {
    this.setState({butikValue:value});
  };

  handlePeriodeChange = (event, index, value) => {
    this.setState({periodeValue:value});
  };

  handleFilterChange = (e) => {

    var searchText = e.target.value;

    this.setState({
      textFieldValue: searchText
    });
  }

  handleRowSelection = (items) => {

    if(items.length === 0 || items === "none"){
      $(this.refs.btns).fadeTo('fast',0.25);
    } else {
      $(this.refs.btns).fadeTo('fast',1);
    }
  }

  componentDidMount() {
    $(this.refs.btns).fadeTo(0, 0.25);
    Mousetrap.bind('command+i', (e) => { this.props.dispatch(nyIndrykning(true))} );
    //Mousetrap.bind('command+i', handleNyIndrykning );
  }

  handleNyIndrykning(e) {
    this.props.dispatch(nyIndrykning(true));
    return false;
  }

  componentWillUnmount() {

  }


  handleTouchTap = (e) => {

     this.setState({
       openSnackbar: true,
     });
   };



  render() {

    var { dispatch } = this.props;

    return (
      <div >
        <div style={styles.div}>
          <TextField fullWidth={true} style={styles.textfield} floatingLabelText="Fritekst filter"  underlineFocusStyle={styles.underlineStyle} name="filter"
            floatingLabelFixed={false}
            ref="textFilter"

            />


          <SelectField labelStyle={styles.labelStyle} style={styles.textfield} fullWidth={true} floatingLabelText="Filter på butik" value={this.state.butikValue} onChange={this.handleButikChange}>
            {items}
          </SelectField>

          <SelectField inputStyle={styles.inputStyle} labelStyle={styles.labelStyle} fullWidth={true} style={styles.textfield} floatingLabelText="Filter på periode" value={this.state.periodeValue}
              onChange={this.handlePeriodeChange}>
            {peridodeItems}
          </SelectField>

        </div>

        <div style={styles.divButtonRow}>
          <div ref="btns">
            <IconButton iconStyle={styles2.iconBigger} tooltip="Slet markerede"><ActionDelete /></IconButton>
            <IconButton iconStyle={styles2.iconBigger} tooltip="Download markerede" onTouchTap={this.handleTouchTap} ><FileDownload /></IconButton>
          </div>
          <RaisedButton secondary={true} icon={<ContentAdd style={{paddingBottom:5}} />} labelPosition="before" label="Ny indrykning" onClick = { () => { dispatch(nyIndrykning(true)); } } />
        </div>

        <Divider />
        <Table style={styles.table} multiSelectable={true} onRowSelection={ this.handleRowSelection }>
          <TableHeader displaySelectAll={true} adjustForCheckbox={true} style={styles.tableHeader}>
            <TableRow>
              <TableRowColumn>Id</TableRowColumn>
              <TableRowColumn>Dag</TableRowColumn>
              <TableRowColumn>Dato</TableRowColumn>
              <TableRowColumn>Medie</TableRowColumn>
              <TableRowColumn>Butik</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}>Sider</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}>Annoncer</TableRowColumn>
              <TableRowColumn style={{textAlign:'center'}}>Booket</TableRowColumn>
              <TableRowColumn style={{textAlign:'center'}}>Leveret</TableRowColumn>
              <TableRowColumn style={{textAlign:'center'}}>Actions</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={true}  deselectOnClickaway={false} showRowHover={true}>
            {this.state.tableData}
          </TableBody>
        </Table>



        <Snackbar
          open={this.state.openSnackbar}
          message="Download af valgte filer starter om lidt"
          autoHideDuration={4000}
          bodyStyle={{backgroundColor:'#303030'}}

        />
      </div>
    );
  }
}

export default connect()(Indrykning);
