import React from 'react';
import Paper from 'material-ui/Paper'


import ContentLink from 'ContentLink';
import SagsInfoItem from 'SagsInfoItem';

import { connect } from 'react-redux';

import SimpleMap from 'SimpleMap';



var moment = require('moment');



const styles = {
  image: {
    backgroundColor: '#FFFFFF',

    padding: 2,
    width: 161,
  },
  info: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:13,
    flex: 1,
    justifyContent: 'space-between',

  },
  map: {

    backgroundColor: '#FFFFFF',
    padding: 2,
    width: 161,
  },
  sagsInfoDiv: {
    display: 'flex',
    height:119,



  },
  sagsInfoRow: {
    display: 'flex',


  }
}

export class Sagen extends React.Component {

  constructor(props){
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }

  shouldComponentUpdate(nextProps) {

    if(nextProps.sagsInfo.data === undefined) {
      return false;
    }

    if(nextProps.sagsInfo.data.CaseInfo === undefined) {
      return false;
    }

    return true;
  }

  componentWillReceiveProps(nextProps) {



  }


  renderMap(sagsInfo) {
    //GpsCoordinates
    var gpsStr = this.props.showSag.caseObj.GpsCoordinates;
    var gps = gpsStr !== undefined ? this.props.showSag.caseObj.GpsCoordinates.split(" ") : [0,0];
    console.log([0]);
    return <SimpleMap zoom={14} lat={Number(gps[0])} lng={Number(gps[1])}/>
  }

  render() {



    if(!this.props.sagsInfo.data){ return <div /> }


    var Case = this.props.sagsInfo.data;


    // Pull data from the selected case from the case list
    var caseObj = this.props.showSag.caseObj;
    var caseNo = caseObj.CaseNo;
    var image = caseObj.PrimaryImage;
    var shopId = caseObj.ShopNo;
    var createdDate = moment(caseObj.Created).format('DD-MM-YYYY');
    var adress = caseObj.Address;
    var type = caseObj.Type;


    // Pull data from loaded case


    var caseInfo = this.props.sagsInfo.data.CaseInfo;
    var status = caseInfo.Status;
    var salesman = "Bjarne Mathiasen";

    //console.log(Case.SalesInfo.Customers.CustomerContactInfo1.Name);
    var str = `{
      image:"",
      firstName:"${Case.SalesInfo.Customers.CustomerContactInfo1.Name}",
      address:"${Case.SalesInfo.Customers.CustomerContactInfo1.Address}",
      postalNumber:"${Case.SalesInfo.Customers.CustomerContactInfo1.ZipCode}",
      city:"${Case.SalesInfo.Customers.CustomerContactInfo1.City}",
      phone:"${Case.SalesInfo.Customers.CustomerContactInfo1.Phone}",
      email:"${Case.SalesInfo.Customers.CustomerContactInfo1.Email}",
      role:"Sælger"
    },`


    console.log(str);
    //console.log(caseInfo);

    return (
      <div  >
        <Paper>
          <div style={styles.sagsInfoDiv}>
            <div style={styles.image}>
              <img style={{width:161, height:115}} src={`https://react.mindworking.eu/resources/shops/${shopId}/cases/${caseNo}/casemedia/images/${image}/preview.jpg`}/>
            </div>
            <div style={styles.info}>
              <div style={styles.sagsInfoRow}>
                <SagsInfoItem header='Sagsnummer' subHeader={Case.CaseInfo.CaseNo}/>
                <SagsInfoItem header='Oprettet' subHeader={moment(Case.CaseInfo.createdDate).format("DD-MM-YYYY")}/>
                <SagsInfoItem header='Sælger' subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.Name}/>
              </div>
              <div style={{height:10}}/>
              <div style={styles.sagsInfoRow}>
                <SagsInfoItem header='Ejendomstype' subHeader={Case.PropertyInfo.PropertyType}/>
                <SagsInfoItem header='Status' subHeader={Case.CaseInfo.Status}/>
                <SagsInfoItem header='Adresse' subHeader={Case.PropertyInfo.AddressRoadName + ' ' + Case.PropertyInfo.AddressHouseNumber}/>
              </div>
            </div>

            <div style={styles.map}>
              {this.renderMap(this.props.sagsInfo)}
            </div>
          </div>
        </Paper>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect( state => {
  return {
    sagsInfo: state.sagsInfo,
    showSag: state.showSag
  }
} )(Sagen);
