
'use strict';
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Check from 'material-ui/svg-icons/navigation/check';
import No from 'material-ui/svg-icons/av/not-interested';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
const styles = {
  div:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:25,
    paddingBottom:20
  },
  table:{
    paddingTop:20,
  },
  header:{
    fontSize:20,
  },
  textfield : {
    verticalAlign:"bottom",
    marginRight: 30,

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
      <TableRowColumn style={{textAlign:'center'}}><NavigationMoreVert/></TableRowColumn>

    </TableRow>);
}

// Debuging purpose
function getCheckOrNo() {
  return  Math.random() > 0.5 ? <Check/> : <No/>
}

//---------------------------------------------
// Component Structure
//
export default class Annoncebunde extends React.Component {

state = {
  butikValue:1,
  periodeValue:1,
  textFieldValue:'',
  tableData: cases
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

render() {
  return (


<div >

</div>

);
}

}
