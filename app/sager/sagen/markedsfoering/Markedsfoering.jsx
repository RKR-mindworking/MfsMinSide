import React, { PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'
const tableStyles = require('tableStyles').get();
import IconButton from 'material-ui/IconButton';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import { connect } from 'react-redux';

import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const styles2 = require('iconStyle').iconStyle();

import { loadMarketingCasePlanningEntries } from 'marketingActions';

import MFS_Thumb from 'MFS_Thumb';

var moment = require('moment');


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



var filterTimer;
var theSearchText;
var sager;


class Markedsfoering extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      butikValue:"123",
      textFieldValue:'',
      tableData: []
    }
    this.doFilter = this.doFilter.bind(this);
    this.popupCenter = this.popupCenter.bind(this);
    this.handleResize = this.handleResize.bind(this);
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

    var marketingItem =this.props.marketing[rowNumber];
    var str = 'https://react.mindworking.eu/UserControls/UmbracoEntryEditorV2/Editor.aspx?entryId=' + marketingItem.Id + '&UseFromCasePlanning=true&ControlSysName=CommonFavTemplatesControl&rnd=1471954129620';

    this.popupCenter(str, "Editor", window.innerWidth-50, window.innerHeight-50);
  }



  componentDidMount() {

    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    var { dispatch } = this.props;
    var { ShopNo, CaseNo } = this.props.showSag.caseObj;
    dispatch(loadMarketingCasePlanningEntries(ShopNo, CaseNo));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {

  }


  popupCenter(url, title, w, h) {
      // Fixes dual-screen position                         Most browsers      Firefox
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (w / 2)) + dualScreenLeft;
      var top = ((height / 2) - (h / 2)) + dualScreenTop;
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

      // Puts focus on the newWindow
      if (window.focus) {
          newWindow.focus();
      }
  }



  renderMarketingTableBody(marketingItem) {
    var str = 'https://react.mindworking.eu/UserControls/UmbracoEntryEditorV2/Editor.aspx?entryId=' + marketingItem.Id + '&UseFromCasePlanning=true&ControlSysName=CommonFavTemplatesControl&rnd=1471954129620';

    //src="/resources/Shops/123/cases/13829990/casemedia/entries/df3f60a4-63ac-4337-9d92-8110af11eacd/thumbnail.jpg"
          //resources/Shops/123/cases/13829990/casemedia/entries/df3f60a4-63ac-4337-9d92-8110af11eacd/thumbnail.jpg
          //resources/Shops/123/cases/13829990/casemedia/entries/df3f60a4-63ac-4337-9d92-8110af11eacd/thumbnail.jpg
    var thumb = marketingItem.ImagesBaseUri + marketingItem.Guid + "/thumbnail.jpg";
    var preview = marketingItem.ImagesBaseUri + marketingItem.Guid + "/preview.jpg";

    console.log(marketingItem);
    console.log("thumb", thumb);

    return (
      <TableRow key={marketingItem.Guid}  style={{cursor:'pointer'}}>
        <TableRowColumn><MFS_Thumb
            thumbnail={thumb}
            preview={preview}
          /></TableRowColumn>
          <TableRowColumn>{marketingItem.Type}</TableRowColumn>
          <TableRowColumn>{marketingItem.TemplateName}</TableRowColumn>
          <TableRowColumn>{marketingItem.Size}</TableRowColumn>
          <TableRowColumn>{marketingItem.MediaName}</TableRowColumn>
          <TableRowColumn>{moment(marketingItem.Date).format('DD-MM-YYYY')}</TableRowColumn>
      </TableRow>
    );
  }
  render () {
    return(
      <Paper style={{marginTop:20}}>
        <div style={styles.div}>


          <TextField fullWidth={false} style={styles.textfield} floatingLabelText="Fritekst filter" name="filter"
            floatingLabelFixed={false}
            ref="textFilter"

            />


        </div>
        <div style={styles.divButtonRow}>
          {
            //<RaisedButton secondary={true} icon={<ContentAdd style={{paddingBottom:5}} />} labelPosition="before" label="Nyt element" />
          }
        </div>
        <Divider />
        <Table onCellClick={ this.handleOnCellClick }>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader} >
            <TableRow>
              <TableRowColumn>Preview</TableRowColumn>
              <TableRowColumn>Type</TableRowColumn>
              <TableRowColumn>Layout</TableRowColumn>
              <TableRowColumn>Bredde x højde</TableRowColumn>
              <TableRowColumn>Medie</TableRowColumn>
              <TableRowColumn>Dato</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.marketing.map(this.renderMarketingTableBody)}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect( state => {
  return {
    showSag: state.showSag,
    marketing: state.marketing
  }
})(Markedsfoering);
