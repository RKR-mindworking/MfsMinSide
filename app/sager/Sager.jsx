import React from 'react';
import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ContentMenu2 from 'ContentMenu2';
import ContentLink from 'ContentLink';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';
import { connect } from 'react-redux';
import { startLoadVurderingCasesFromShop } from 'actions';
import { nySag } from 'actions';
import MenuItem from 'material-ui/MenuItem';

import MFSTable from 'MFSTable';
import MFS_Thumb from 'MFS_Thumb';

import { showSag, loadSagsInfo } from 'sagerActions';

class Sager extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      sager: []
    }
    this.getSager = this.getSager.bind(this);
    this.getButikker = this.getButikker.bind(this);
    this.nySag = this.nySag.bind(this);

    this.handleResize = this.handleResize.bind(this);
    this.shopSelectionChange = this.shopSelectionChange.bind(this);
    this.showSag = this.showSag.bind(this);
  }

  // ===========================================================================
  // Component Methods
  // ===========================================================================

  getSager() {
    return this.state.sager;
  }

  nySag(show) {
    this.props.dispatch( nySag(show) );
  }

  showSag(obj) {
    var { dispatch } = this.props;
    var { user } = this.props;
    dispatch(loadSagsInfo(obj.ShopNo, obj.CaseNo));
    dispatch(showSag(obj));

  }

  getButikker() {

    var elements = [];

    var primaryShop = this.props.user.PrimaryShop.Shop;
    var arrTrustedShops = this.props.user.TrustedShops.Shop;

    arrTrustedShops.map( (shop) => {
      //console.log("Add Shop", shop);
      elements.push(<MenuItem key={shop.ShopNo} value={shop.ShopNo} primaryText={shop.ShopName + ' (' + shop.ShopNo + ')'} />);
    });

    elements.push(<MenuItem key={primaryShop.ShopNo} value={primaryShop.ShopNo} primaryText={primaryShop.ShopName + ' (' + primaryShop.ShopNo + ')'} />);
    return elements;
  }

  handleResize() {

  }

  shopSelectionChange(shopId) {
    var { dispatch } = this.props;
    dispatch(startLoadVurderingCasesFromShop(shopId));
  }

  // ===========================================================================
  // React Lifecycle
  // ===========================================================================

  componentDidMount() {
    // Start fetching data
    var { dispatch } = this.props;
    dispatch(startLoadVurderingCasesFromShop(123));

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      sager: nextProps.cases
    })
  }

  render() {

    var r = this.props.routes;
    var l = r.length;
    var last = r[l-1];

    var menu1 = false;
    var n = last.name;

    if(n === "Sagen" || n === "Boligfakta" || n === "Data" || n === "Noter" || n === "Aktiviteter" || n === "Markedsfoering" || n === "Tekster" || n === "Billeder" || n === "Dokumenter" || n === "Luftfoto") {
      menu1 = true;
    }

    var menu = !menu1 ? <ul>
        <ContentLink toLink="Sager/Vurdering" label="Vurdering" />
        <ContentLink toLink="Sager/Formidlingsaftale" label="Formidlingsaftale" />
        <ContentLink toLink="Sager/SalgLeje" label="Salg/Leje" />
        <ContentLink toLink="Sager/Koebsaftale" label="Købsaftale" />
        <ContentLink toLink="Sager/SolgtUdlejet" label="Solgt/Udlejet" />
        <ContentLink toLink="Sager/Retur" label="Retur" />
        <ContentLink toLink="Sager/TabsFA" label="Tabs FA" />
        <ContentLink toLink="Sager/Arkiv" label="Arkiv" />
      </ul>

    : <ul>
        <ContentLink toLink="Sager/Sagen/Boligfakta" label="Boligfakta" />
        <ContentLink toLink="Sager/Sagen/Aktiviteter" label="Aktiviteter" />
        <ContentLink toLink="Sager/Sagen/Markedsfoering" label="Markedsføring" />
        <ContentLink toLink="Sagen/Koebsaftale" label="Markedet" />
        <ContentLink toLink="Sagen/SolgtUdlejet" label="Pris" />
        <ContentLink toLink="Sagen/Retur" label="Sælger" />
        <ContentLink toLink="Sagen/TabsFA" label="Købere" />
        <ContentLink toLink="Sagen/Arkiv" label="Økonomi" />
        <ContentLink toLink="Sagen/Arkiv" label="Tidslinie" />
      </ul>


    var getMenu = () => {
      return <div className="App-area-right-menu ">
        <div className="ContentMenu">
          <ContentMenu2 menu={menu} />
        </div>
      </div>
    }

    var getChildren = () => {
      const childrenWithProps = React.Children.map(this.props.children,
        (child) => React.cloneElement(child, {
          getSager: this.getSager,
          nySag: this.nySag,
          getButikker: this.getButikker,
          shopSelectionChange: this.shopSelectionChange,
          showSag: this.showSag
        }));
      return <div>{childrenWithProps}</div>
    }

    var createTableBody = () => {
      var elements = [];
      var cases = this.state.sager;
      for (var key in cases) {
        if (cases.hasOwnProperty(key)) {
          var obj = cases[key];
          //console.log(obj);
          elements.push(
            <TableRow key={key}>
              <TableRowColumn style={{textAlign:'left'}}>
                <MFS_Thumb
                  thumbnail={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/thumbnail.jpg`}
                  preview={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/presentation.jpg`}
                /></TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.CaseNo}</TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.Address}</TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.ShopNo}</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}><Link to="/sager/sagen/"><IconButton><ImageNavigateNext/></IconButton></Link></TableRowColumn>
            </TableRow>
          );
        }
      }
      return elements;
    }

    return (
      <div>
        {getMenu()}
        <div className="App-area-right-main-content" >
          {getChildren()}
        </div>
      </div>
    );
  }
}


export default connect( state => {
  return {
    cases: state.cases,
    user: state.login.user
  }
})(Sager);
