
'use strict';
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'
import { Link } from 'react-router';
import BtnContentAdd from 'BtnContentAdd';
import CasesAPI from 'CasesAPI';
import MFS_Thumb from 'MFS_Thumb';
import {hashHistory} from 'react-router';
import TrustedStoreSelector from 'TrustedStoreSelector';

const tableStyles = require('tableStyles').get();
const styles2 = require('iconStyle').iconStyle();

var filterTimer;
var theSearchText;
var sager;

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

  textfield : {
    fontSize: 13,
    marginRight: 20,
  },
  labelStyle: {
    fontSize: 13
  },
  inputStyle: {
    fontSize: 13
  }
}

function getMore() {
  return <Link to="/sager/sagen"><IconButton><ImageNavigateNext/></IconButton></Link>
}

//---------------------------------------------
// Component Structure
//
export default class Vurdering extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      butikValue:"123",
      textFieldValue:'',
      tableData: []
    }
    this.doFilter = this.doFilter.bind(this);
    this.createTableBody = this.createTableBody.bind(this);
  }

  handleFilterChange = (e) => {
    var searchText = e.target.value;
    if(filterTimer) {
      clearTimeout(filterTimer);
    }
    theSearchText = searchText;
    filterTimer = setTimeout(this.doFilter, 200);
  }

  doFilter() {
    var cases = CasesAPI.filter(sager, theSearchText);
    var elements = this.createTableBody(cases);
    this.setState({ tableData: elements });
  }

  handleOnCellClick = (rowNumber,columnId) => {
    var obj = sager[rowNumber]
    hashHistory.push("/sager/sagen");
    this.props.showSag(obj);
  }

  createTableBody(sager) {
    var elements = [];
    var shopId = this.state.butikValue;

    for (var key in sager) {
      if (sager.hasOwnProperty(key)) {
        var obj = sager[key];
        elements.push(
          <TableRow key={key} style={{cursor:'pointer'}}>
            <TableRowColumn style={{textAlign:'left'}}>
              <MFS_Thumb
                thumbnail={`https://react.mindworking.eu/resources/shops/${shopId}/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/thumbnail.jpg`}
                preview={`https://react.mindworking.eu/resources/shops/${shopId}/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/presentation.jpg`}
              /></TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.CaseNo}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Address}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.ShopNo}</TableRowColumn>
            <TableRowColumn style={{textAlign:'right'}}>{getMore()}</TableRowColumn>
          </TableRow>
        );
      }
    }

    return elements;
  }
  // ===========================================================================
  // React Lifecycle
  // ===========================================================================

  componentDidMount() {
    Mousetrap.bind('command+shift+alt+f', (e) => { this.refs.textFilter.focus()} );
    this.setState({ butikValue: "123" });
    this.props.shopSelectionChange(this.state.butikValue);
  }

  componentWillUnmount() {
    this.setState({ tableData: [] });
  }

  componentWillReceiveProps(nextProps) {
    sager = CasesAPI.sortByStatus(nextProps.getSager(), "Vurdering");
    var elements = this.createTableBody(sager);
    this.setState({ tableData: elements });
  }

  render() {
    return (
      <Paper>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{display:'flex', paddingLeft:20}}>
            <TextField
              name="filter"
              fullWidth={false}
              floatingLabelText="Fritekst filter"
              floatingLabelFixed={false}
              ref="textFilter"
              style={{marginRight: 20, marginBottom:10}}
              onChange= {this.handleFilterChange}
            />

            <TrustedStoreSelector ref="trustedStoreSelector" handleChange={
                (shopNo) => {
                  this.setState({butikValue:shopNo});
                  this.props.shopSelectionChange(shopNo)
                }} />

          </div>
          <div style={{paddingRight: 20, paddingLeft: 20,paddingTop:23}}>
            <BtnContentAdd btnLabel="Ny sag" btnClick={ () => this.props.nySag(true) }/>
          </div>
        </div>

        <Divider />

        <Table fixedHeader onCellClick={ this.handleOnCellClick }>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
            <TableRow selectable={false}>
              <TableRowColumn>Preview</TableRowColumn>
              <TableRowColumn>Sagsnummer</TableRowColumn>
              <TableRowColumn>Adresse</TableRowColumn>
              <TableRowColumn>Butik</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}>Gå til Sagen</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.state.tableData}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
