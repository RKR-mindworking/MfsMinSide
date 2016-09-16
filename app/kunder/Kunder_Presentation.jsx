import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import BtnContentAdd from 'BtnContentAdd';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Card from 'material-ui/Card';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import TrustedStoreSelector from 'TrustedStoreSelector';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
const tableStyles = require('tableStyles').get();
const contentStyles = require('contentStyles').get();

const Kunder_Presentation = (props) => {

  var count = 0;
  var markup = props.dataProvider.map( (customer) => {

  return(
      <TableRow key={count++} style={{cursor:'pointer'}}>
        <TableRowColumn style={{width: 55, paddingTop:5}}><Avatar size={40} src='profile.png'/></TableRowColumn>
        <TableRowColumn style={{paddingTop:4, paddingBottom:4}}>{`${customer.firstName}`} <br />{customer.address}<br/>{customer.city}</TableRowColumn>
        <TableRowColumn>{customer.phone}<br /><a href={`mailto:${customer.email}`}>{customer.email}</a></TableRowColumn>
        <TableRowColumn>{customer.role}</TableRowColumn>
        <TableRowColumn>Lone Sørensen</TableRowColumn>
        <TableRowColumn>Vurderingsmøde 1<br/>25-01-2016</TableRowColumn>
        <TableRowColumn>28-11-2015</TableRowColumn>
        <TableRowColumn style={{width: 40, textAlign:'right'}}><EditorModeEdit/></TableRowColumn>
      </TableRow>
    )
  });

  return (
    <div className="App-area-right-main-content" >
      <Card>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{display:'flex', paddingLeft:20}}>
            <TextField
              name="textFilter"
              fullWidth={false}
              floatingLabelText={props.textFilterFloatingLabelText}
              floatingLabelFixed={false}
              style={{marginRight: 20, marginBottom:10}}
            />
            <TrustedStoreSelector handleChange={ payload => console.log(payload) } />
          </div>
          <div style={{paddingRight: 20, paddingLeft: 20,paddingTop:23}}>
            <BtnContentAdd btnLabel="Ny kunde" btnClick={ () => props.handleAddCustomer() }/>
          </div>
        </div>

        <Divider />
        <Table selectable onRowSelection={ (index) => props.handleRowSelcted(props.dataProvider[index]) }>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
            <TableRow onCellClick={(row, col, c) => console.log(c)} >
              <TableHeaderColumn style={{width: 55}}>Kunde</TableHeaderColumn>
              <TableHeaderColumn>Navn/Adresse</TableHeaderColumn>
              <TableHeaderColumn>Telefon/e-mail</TableHeaderColumn>
              <TableHeaderColumn>Rolle</TableHeaderColumn>
              <TableHeaderColumn>Medarbejder</TableHeaderColumn>
              <TableHeaderColumn>Aktivitet</TableHeaderColumn>
              <TableHeaderColumn>Oprettet</TableHeaderColumn>
              <TableHeaderColumn style={{width: 40, textAlign:'right'}}>Rediger</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {markup}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default Kunder_Presentation
