import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import FaktaItem from 'FaktaItem';
import FaktaItemEdit from 'FaktaItemEdit';
import { connect } from 'react-redux';

import CaseBrokerList from 'CaseBrokerList';

import {saveBoligFakta, loadSagsInfo} from 'sagerActions';


var moment = require('moment');


const styles = {
  div: {
    marginTop: 20,
    marginRight: 20,
    width: 400
  }
}

export class Boligfakta_Data extends React.Component {

  constructor(props) {
    super(props);

    this.persistData = this.persistData.bind(this);
    this.saveCaseDataField = this.saveCaseDataField.bind(this);
  }

  componentDidMount() {
    
    var showSag = this.props.showSag;
    this.props.dispatch( loadSagsInfo( showSag.caseObj.ShopNo, showSag.caseObj.CaseNo ))

  }



 saveCaseDataField(shopno, caseno, field, value){

   this.props.dispatch( saveBoligFakta( shopno, caseno, field, value));
   /*
  var FieldAry = field.split('.').reverse();
	$.ajax('https://react.mindworking.eu/resources/shops/' + shopno + '/cases/' + caseno + '/importpartialcasedata.do?deviceid=ipad',{
		'data': '<' + FieldAry[1] + '><' + FieldAry[0] + '>' + value + '</' + FieldAry[0] + '></' + FieldAry[1] + '>',
		'type': 'POST',
		'processData': false
	});
  */
}

persistData(field, value) {

  var showSag = this.props.showSag;
  this.saveCaseDataField(showSag.caseObj.ShopNo, showSag.caseObj.CaseNo, field, value);

}


  render() {

    // Pull data from the selected case from the case list

    var Case = this.props.sagsInfo.data;


    var assessmentDate = Case.FinancialInfo.AssessmentDate !== null ? Case.FinancialInfo.AssessmentDate : 'mangler';

    return (
      <div className="flex-flow">
        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Sags information"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >
                <FaktaItem header='Sagsnummer' subHeader={Case.CaseInfo.CaseNo} />
                <FaktaItem header='Status' subHeader={Case.CaseInfo.Status} />
             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Sælger information"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >
                <FaktaItemEdit persistData={this.persistData} header='Navn(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.Name" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.Name} />
                <FaktaItemEdit persistData={this.persistData} header='Adresse(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.Address" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.Address} />
                <FaktaItemEdit persistData={this.persistData} header='Postnummer(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.ZipCode" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.ZipCode} />
                <FaktaItemEdit persistData={this.persistData} header='By(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.City" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.City} />
                <FaktaItemEdit persistData={this.persistData} header='Telefon(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.Phone" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.Phone} />
                <FaktaItemEdit persistData={this.persistData} header='E-mail(1)' field="Case.SalesInfo.Customers.CustomerContactInfo1.Email" subHeader={Case.SalesInfo.Customers.CustomerContactInfo1.Email} />
                <FaktaItemEdit persistData={this.persistData} header='Navn(2)' field="Case.SalesInfo.Customers.CustomerContactInfo2.Name" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.Name} />
                <FaktaItemEdit persistData={this.persistData} header='Adresse(2)' field="ase.SalesInfo.Customers.CustomerContactInfo2.Address" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.Address} />
                <FaktaItemEdit persistData={this.persistData} header='Postnummer(2)' field="Case.SalesInfo.Customers.CustomerContactInfo2.ZipCode" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.ZipCode} />
                <FaktaItemEdit persistData={this.persistData} header='By(2)' field="Case.SalesInfo.Customers.CustomerContactInfo2.City" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.City} />
                <FaktaItemEdit persistData={this.persistData} header='Telefon(2)' field="Case.SalesInfo.Customers.CustomerContactInfo2.Phone" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.Phone} />
                <FaktaItemEdit persistData={this.persistData} header='E-mail(2)' field="Case.SalesInfo.Customers.CustomerContactInfo2.Email" subHeader={Case.SalesInfo.Customers.CustomerContactInfo2.Email} />
             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Aktivitet"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >
                <FaktaItem header='Startdato for Åbent hus' subHeader={moment(Case.MarketingInfo.Labels.OpenhouseDateTimeStart).format("DD-MM-YYYY")} />
                <FaktaItem header='Slutdato for Åbent hus' subHeader={moment(Case.MarketingInfo.Labels.OpenhouseDateTimeEnd).format("DD-MM-YYYY")} />
                <FaktaItem header='Udløbsdato for Nyhed' subHeader={moment(Case.MarketingInfo.Labels.NewsExpirationDate).format("DD-MM-YYYY")} />
                <FaktaItem header='Udløbsdato for Ny Pris' subHeader={moment(Case.MarketingInfo.Labels.NewsPriceExpirationDate).format("DD-MM-YYYY")} />
                <FaktaItem header='Udløbsdato for Giv et bud' subHeader={moment(Case.MarketingInfo.Labels.MakeAnOfferExpirationDate).format("DD-MM-YYYY")} />
                <FaktaItem header='Må ikke annonceres' subHeader={Case.MarketingInfo.Labels.NoAdvertisement} />
             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Adresse data"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >
                <FaktaItem header='Ejendomstype' subHeader={Case.PropertyInfo.PropertyType} />
                <FaktaItem header='Ejendomstypebeskrivelse' subHeader={Case.PropertyInfo.PropertyTypeDescription} />
                <FaktaItem header='Udvidet ejendomstypebeskrivelse' subHeader={Case.PropertyInfo.ExtPropertyTypeDescription} />
                <FaktaItem header='Kommunenummer' subHeader={Case.PropertyInfo.MunicipalityNumber} />
                <FaktaItem header='Ejendomsnummer' subHeader={Case.PropertyInfo.PropertyNumber} />
                <FaktaItem header='Matrikelnummer' subHeader={Case.PropertyInfo.RegisteredLandNumber} />
                <FaktaItem header='GPS koordinater' subHeader={Case.PropertyInfo.GpsCoordinates} />
                <FaktaItem header='Vejnavn' subHeader={Case.PropertyInfo.AddressRoadName} />
                <FaktaItem header='Husnummer' subHeader={Case.PropertyInfo.AddressHouseNumber} />
                <FaktaItem header='Beliggenhedsby' subHeader={Case.PropertyInfo.LocationCityName} />
                <FaktaItem header='Postnummer' subHeader={Case.PropertyInfo.ZipCode} />
                <FaktaItem header='By' subHeader={Case.PropertyInfo.AddressCityName} />
             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Økonomi"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >
                <FaktaItem header='Vurderingsdato' subHeader={assessmentDate} />
                <FaktaItemEdit persistData={this.persistData} header='Kontantpris' field="Case.FinancialInfo.CashPrice" subHeader={Case.FinancialInfo.CashPrice} />
                <FaktaItem header='Udbetaling' subHeader={Case.FinancialInfo.Payout} />
                <FaktaItem header='Brutto' subHeader={Case.FinancialInfo.Gross} />
                <FaktaItem header='Netto' subHeader={Case.FinancialInfo.Net} />
                <FaktaItem header='Ejendomsværdi' subHeader={Case.FinancialInfo.PropertyValue} />
                <FaktaItem header='Årligt varmeforbrug (kr.)' subHeader={Case.FinancialInfo.AnnualHeatingPrice} />
                <FaktaItem header='Årligt vandforbrug (kr.)' subHeader={Case.FinancialInfo.AnnualWaterPrice} />
                <FaktaItem header='Årligt elforbrug (kr.)' subHeader={Case.FinancialInfo.AnnualElectricityPrice} />
             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="BBR, tinglysningsdata, servitutter, mm."
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >

             </CardText>
          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false}>
            <CardHeader
                 title="Bygninger og øvrige BBR oplysninger"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
              <CardText expandable={true} >

             </CardText>
          </Card>
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
})(Boligfakta_Data);
