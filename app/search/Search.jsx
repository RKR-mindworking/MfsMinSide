import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


import IconPhoto from 'IconPhoto';

import { startGlobalSearch } from 'searchActions';
import { showSag, loadSagsInfo } from 'sagerActions';
import { hashHistory } from 'react-router';

const styles = require('iconStyle').iconStyle();

const textfieldStyle = {
  div:{
    display: 'flex',
    width:'40%',
    alignItems: 'center',
    marginLeft:100
  },



  textfield : {
    verticalAlign:"bottom",
    marginRight: 10,

  },
  underlineStyle: {
    borderColor: '#ff4400',
  },
}

var searchTimer;
var searchValue;



class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     dataSource: [],
   };

    this.doSearch = this.doSearch.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.handleKeyShortcut = this.handleKeyShortcut.bind(this);
  }

componentDidMount() {
  Mousetrap.bind([
    'command+shift+alt+y'
    ], this.handleKeyShortcut );
}

handleKeyShortcut(e) {
  if (e.preventDefault) {
     e.preventDefault();
 } else {
     // internet explorer
     e.returnValue = false;
 }
  switch (e.code) {
    case 'KeyY':
      this.refs[`autocomplete`].focus();

      break;
    default:

  }
}


  handleNewRequest(chosenRequest, index) {
    console.log(chosenRequest)
    this.setState({
      dataSource: []
    })




    hashHistory.push("/sager/sagen");
    var { dispatch } = this.props;

    dispatch(loadSagsInfo(chosenRequest.caseObj.ShopNo, chosenRequest.caseObj.CaseNo));
    dispatch(showSag(chosenRequest.caseObj));

    if (index>-1)  //only allow selected items to be added
    {
      this.refs[`autocomplete`].setState({searchText:''});
    }

  }

  handleUpdateInput = (value) => {
/*
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
*/
    //
    if(searchTimer) {
      clearTimeout(searchTimer);
    }

    searchValue = value;

    searchTimer = setTimeout(this.doSearch, 200);

  };

  doSearch() {
    
    this.setState({
      dataSource: []
    })
    if(searchValue !== ""){
      var { dispatch } = this.props;
      dispatch( startGlobalSearch(searchValue, "123,124,DK") );
    }
  }

  componentWillReceiveProps(nextProps) {
    var cases = nextProps.searchResult.Cases.Case;

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



  this.setState({
    dataSource: menus
  })

  }

  render() {




    return (
      <div style={textfieldStyle.div}>


        <AutoComplete
          hintText="Søg på sagsnummber, adresse, person ect..."
          inputStyle={{color: '#EEEEEE', paddingLeft:0}}
          hintStyle={{color: '#777777', paddingLeft:0}}
          underlineStyle={{borderColor:'#666666'}}
          fullWidth={true}
          filter={AutoComplete.noFilter}
          openOnFocus={true}
          dataSource={this.state.dataSource}
          ref={`autocomplete`}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={ this.handleNewRequest }
          />




          <div style={{paddingTop:6, marginLeft:-25}}>
                      <ActionSearch color="#CCC"/>
            </div>

        </div>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect( state => {
  return {
    searchResult: state.search.result
  }
})(Search);
