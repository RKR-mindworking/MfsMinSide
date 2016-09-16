import React from 'react';

import SearchPresentation from 'SearchPresentation';
import MenuItem from 'material-ui/MenuItem';
import IconPhoto from 'IconPhoto';

import { connect } from 'react-redux';

import { startGlobalSearch } from 'searchActions';

var searchTimer;
var searchValue;

class SearchContainer extends React.Component{

  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleUpdateInput( value ) {

    if(searchTimer) {
      clearTimeout(searchTimer);
    }

    searchValue = value;
    searchTimer = setTimeout(this.doSearch, 200);
  }

  handleNewRequest( chosenRequest, index ) {

  }


  doSearch() {
    if(searchValue !== ""){
      var { dispatch } = this.props;
      dispatch( startGlobalSearch(searchValue, "123,124,DK") );
    }
  }


  // ======================================================================================================

  createDataSource( source ) {

    if(source === undefined ) {
      return [];
    }

    var cases = source.Cases.Case;
    var items = Array.isArray(cases) ? cases : [cases];
    var menus = [];
    var nodeKey = 0;

    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        var obj = items[key];
        var textStr = obj.CaseNo + ' - ' + obj.Address;
        var status = obj.Status;
        var imgStr = `https://react.mindworking.eu/resources/shops/${obj.ShopNo}/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/presentation.jpg`
        menus.push(
          {
            text: textStr,
            value: (
              <MenuItem
                rightIcon={<div style={{marginTop:5}} ><IconPhoto preview={imgStr} /></div>}
                primaryText={textStr}

              />
            ),
            caseObj: obj
          }
        );
      }
    }

    return menus;
  }




  // ======================================================================================================

  render() {
    return (
      <SearchPresentation
        dataSource = { this.createDataSource( this.props.dataSource ) }
        handleUpdateInput = { this.handleUpdateInput }
        handleNewRequest = { this.handleNewRequest }/>
    );
  }

}

function mapStateToProps( store ) {
  return {
    dataSource: store.search.result
  }
}

export default connect( mapStateToProps )( SearchContainer );
