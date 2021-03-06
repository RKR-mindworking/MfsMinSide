import React, { PropTypes } from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

import CasesAPI from 'CasesAPI';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import BtnContentAdd from 'BtnContentAdd';
import TrustedStoreSelector from 'TrustedStoreSelector';

const tableStyles = require('tableStyles').get();

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
  },
  raisedButtonIcon: {



  },
  underlineStyle: {
    borderColor: '#ff4400',
  },
}

function getMore() {
  return <Link to="/sager/sagen/"><IconButton><ImageNavigateNext/></IconButton></Link>
}

var filterTimer;
var theSearchText;
var sager;

export class Arkiv extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }

    this.doFilter = this.doFilter.bind(this);
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
    var cases = CasesAPI.filterSalgLeje(sager, theSearchText);
    var elements = [];
    for (var key in cases) {
      if (cases.hasOwnProperty(key)) {
        var obj = cases[key];
        elements.push(
          <TableRow key={key}>
            <TableRowColumn style={{textAlign:'left'}}><div><img style={{height:50, paddingTop:5}} src={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/thumbnail.jpg`} /></div></TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.CaseNo}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Address}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Type}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.TypeDescription}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Modified}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Modified}</TableRowColumn>
            <TableRowColumn style={{textAlign:'right'}}>{getMore()}</TableRowColumn>
          </TableRow>
        );
      }
    }
    this.setState({
      isLoading: false,
      tableData: elements
    })
  }

  // ===========================================================================
  // React Lifecycle
  // ===========================================================================

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    sager = CasesAPI.sortByStatus(nextProps.getSager(), "Arkiv");

    var elements = [];
    for (var key in sager) {
      if (sager.hasOwnProperty(key)) {
        var obj = sager[key];
        elements.push(
          <TableRow key={key}>
            <TableRowColumn style={{textAlign:'left'}}><div><img style={{height:50, paddingTop:5}} src={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/thumbnail.jpg`} /></div></TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.CaseNo}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Address}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Type}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.TypeDescription}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Modified}</TableRowColumn>
            <TableRowColumn style={{textAlign:'left'}}>{obj.Modified}</TableRowColumn>
            <TableRowColumn style={{textAlign:'right'}}>{getMore()}</TableRowColumn>
          </TableRow>
        );
      }
    }
    this.setState({
      tableData: elements
    })
  }

  render () {
    return(
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
      <Table fixedHeader>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
          <TableRow >
            <TableRowColumn>Preview</TableRowColumn>
            <TableRowColumn>Sagsnummer</TableRowColumn>
            <TableRowColumn>Adresse</TableRowColumn>
            <TableRowColumn>Ejendomstype</TableRowColumn>
            <TableRowColumn>Ejendomstypebeskrivelse</TableRowColumn>
            <TableRowColumn>Arkiveringsdato</TableRowColumn>
            <TableRowColumn>Sletningsdato</TableRowColumn>
            <TableRowColumn style={{textAlign:'right'}}>Slet</TableRowColumn>
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

export default Arkiv;
