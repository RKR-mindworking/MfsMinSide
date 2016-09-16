import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import BtnContentAdd from 'BtnContentAdd';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
var moment = require('moment');
// ----------------------------------------------------------------------------

const tableStyles = require('tableStyles').get();
const crmColors = require('crmColors');
moment.locale("da");


class Kunden_Aktiviteter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var count = 0;
    var topList = [];
    var bottomList = [];

    var dummy = 8;




    this.props.dataProvider.map( (obj) => {

      var overdueColor = '#333333';


      var rndmDate = moment().calendar();
      if(count > 1 ){
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

      var lastRow = obj.crmType > dummy ? <NavigationMoreVert /> : "Lukket";




      var markup = <TableRow key={count++} style={{borderLeft:"5px solid " + crmColors.get(obj.crmType)}}>
          <TableRowColumn><span style={{marginLeft: -5, color: overdueColor}}>{rndmDate}</span></TableRowColumn>
          <TableRowColumn><span style={{color: overdueColor}}>{obj.activity}</span></TableRowColumn>
          <TableRowColumn>
            {
              obj.crmType > dummy ?
                <SelectField value={0}>
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Martin Bjeld" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                  <MenuItem rightIcon={ <Avatar size={30} src='profile.png'/>} primaryText="Louise Petersen" />
                </SelectField>
              : <span style={{color: overdueColor}}>"Louise Petersen"</span>
            }

          </TableRowColumn>
          <TableRowColumn><span style={{color: overdueColor}}>{obj.meetingLocation}</span></TableRowColumn>
          <TableRowColumn><div onClick={ () => this.props.handleCaseNoClicked(obj.case.id)} className="display-as-link">{obj.case.id}</div><div>{obj.case.address}</div></TableRowColumn>
          <TableRowColumn><Link to="/Kunder/Kunden/Aktiviteter">{obj.client.name}</Link><br/>{obj.client.phone}</TableRowColumn>
          <TableRowColumn style={{width:80,textAlign:'right'}}><span style={{color: overdueColor}}>{lastRow}</span></TableRowColumn>






        </TableRow>

      if(obj.crmType > dummy) {
        topList.push(markup);
      } else {
        bottomList.push(markup);
      }
    });

    return (
      <div>
        <Card>
          <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:'flex', paddingLeft:20}}>
              <TextField
                name="textFilter"
                fullWidth={false}
                floatingLabelText={this.props.textFilterFloatingLabelText}
                floatingLabelFixed={false}
                style={{marginRight: 20, marginBottom:10}}
              />

              <SelectField floatingLabelText="Vælg type" value={1} style={{marginRight: 20, marginBottom:10}}>
                <MenuItem key={1} value={1} primaryText="Alle typer" />
                <MenuItem key={2} value={2} primaryText="Lead bud" />
                <MenuItem key={3} value={3} primaryText="Mail sendt" />
              </SelectField>

              <SelectField floatingLabelText="Vælg medarbejder" value={1}>
                <MenuItem key={1} value={1} primaryText="Alle medarbejdere" />
                <MenuItem key={2} value={2} primaryText="Lone Lonesen" />
                <MenuItem key={3} value={3} primaryText="Tage Nalan" />
              </SelectField>

            </div>
            <div style={{paddingRight: 20, paddingLeft: 20,paddingTop:23}}>
              <BtnContentAdd btnLabel="Ny aktivitet" btnClick={ () => this.props.handleAddActivity() }/>
            </div>
          </div>

          <Divider />
          <Table selectable onRowSelection={ (index) => this.props.handleRowSelcted(this.props.dataProvider[index]) }>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
              <TableRow onCellClick={(row, col, c) => console.log(c)} >
                <TableHeaderColumn>Forfald</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Medarbejder</TableHeaderColumn>
                <TableHeaderColumn>Notat</TableHeaderColumn>
                <TableHeaderColumn>Sag/Adresse</TableHeaderColumn>
                <TableHeaderColumn>Kunde</TableHeaderColumn>
                <TableHeaderColumn style={{width:80,textAlign:'right'}}>Menu</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {topList}
            </TableBody>
          </Table>

          </Card>

          <div style={{width:'100%',textAlign:"center",paddingTop:4, paddingBottom:4}}><span style={{color:"#999", fontSize:11, fontStyle:'italic'}}>Indhold herunder er afsluttede eller aflyste aktiviteter</span></div>

        <Card>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
              <TableRow>
                <TableHeaderColumn>Forfald</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Medarbejder</TableHeaderColumn>
                <TableHeaderColumn>Notat</TableHeaderColumn>
                <TableHeaderColumn>Sag/Adresse</TableHeaderColumn>
                <TableHeaderColumn>Kunde</TableHeaderColumn>
                <TableHeaderColumn style={{width:80,textAlign:'right'}}>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {bottomList}
            </TableBody>
          </Table>

        </Card>


      </div>
    );
  }
}

// ============================================================================
// PropTypes
Kunden_Aktiviteter.propTypes = {
  dataProvider: React.PropTypes.array.isRequired,
  handleAddActivity: React.PropTypes.func.isRequired,
  handleRowSelcted: React.PropTypes.func,
  textFilterFloatingLabelText: React.PropTypes.string,
}

Kunden_Aktiviteter.defaultProps = {
  dataProvider: [],
  textFilterFloatingLabelText: "Filter",
}

// ****************************************************************************
export default Kunden_Aktiviteter;
// ****************************************************************************
