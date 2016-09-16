import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
var moment = require('moment');
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';

import { Link } from 'react-router';

const tableStyles = require('tableStyles').get();
const crmColors = require('crmColors');

moment.locale("da");

// Stateless Component
const ActivityTable = (props) => {

  var count = 0;
  var activitiesMarkup = props.activities.map( (obj) => {


    var overdueColor = '#333333';


    var rndmDate = moment().calendar();
    if(count > 2 ){
      console.log("ADD", rndmNum);
      var max = count + 4;
      var min = count;
      var rndmNum = Math.floor(Math.random() * (max - min + 1) + min);
      rndmDate = moment().add(rndmNum, 'days').calendar();
    }else {
      var max = count + 4;
      var min = count;
      var rndmNum = Math.floor(Math.random() * (max - min + 1) + min);
      console.log("SUBTRACT", count);
      rndmDate = moment().subtract(count, 'days').calendar();
      overdueColor = '#CF000F';
    }


    return <TableRow key={count++} style={{ borderLeft:"5px solid " + crmColors.get(obj.crmType)}}>
      <TableRowColumn style={{width:30}}><Checkbox /></TableRowColumn>
      <TableRowColumn><span style={{marginLeft: -5, color: overdueColor}}>{rndmDate}</span></TableRowColumn>
      <TableRowColumn><span style={{color: overdueColor}}>{obj.activity}</span></TableRowColumn>
      <TableRowColumn><span style={{color: overdueColor}}>{obj.meetingLocation}</span></TableRowColumn>
      <TableRowColumn><Link to="/Kunder/Kunden/Aktiviteter">{obj.client.name}</Link><br/>{obj.client.phone}</TableRowColumn>
      <TableRowColumn><Link to="/Sager/Sagen">{obj.case.id}</Link><br/>{obj.case.address}</TableRowColumn>
      <TableRowColumn>
        <SelectField value={0}>
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Martin Bjeld" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
          <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
        </SelectField></TableRowColumn>
      <TableRowColumn style={{textAlign:'right'}}><NavigationMoreVert /></TableRowColumn>
    </TableRow>
  });

  return (
    <div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
          <TableRow selectable={false}>
            <TableHeaderColumn style={{width:30}}>Afslut</TableHeaderColumn>
            <TableHeaderColumn>Forfald</TableHeaderColumn>
            <TableHeaderColumn>Aktivitet</TableHeaderColumn>
            <TableHeaderColumn>Mødested</TableHeaderColumn>
            <TableHeaderColumn>Kunde</TableHeaderColumn>
            <TableHeaderColumn>Sag/Adresse</TableHeaderColumn>
            <TableHeaderColumn>Kundeansvarlig</TableHeaderColumn>
            <TableHeaderColumn style={{textAlign:'right'}}>Menu</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {activitiesMarkup}
        </TableBody>
      </Table>
    </div>
  )





}

export default ActivityTable;
