import React from 'react';
import ContentCollapsable from  'ContentCollapsable';
import Form_Input from 'Form_Input';
import Form_SelectField from 'Form_SelectField';

class Kunden_StamData_Kontaktoplysninger extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      birthday:"",
      sex: "",
      cevilstand: "",
      firstName: "",
      lastName: "",
      co: "",
      address: "",
      postalNumber: "",
      city: "",
      country: "",
      cellPhone: "",
      email: ""
    }
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      birthday:nextProps.customer.birthday,
      sex: nextProps.customer.sex,
      cevilstand: nextProps.customer.cevilstand,
      firstName: nextProps.customer.firstName,
      lastName: nextProps.customer.lastName,
      co: nextProps.customer.co,
      address: nextProps.customer.address,
      postalNumber: nextProps.customer.postalNumber,
      city: nextProps.customer.city,
      country: nextProps.customer.country,
      cellPhone: nextProps.customer.cellPhone,
      email: nextProps.customer.email
    })


  }

  render() {
    return (
      <ContentCollapsable
        title="Kontaktoplysninger"
        initiallyExpanded = {false}

        fixedContent = {
          <div>
            <Form_Input
              title="Fødselsdag"
              selectedValue= {this.state.birthday}
              handleChange = { value => this.setState({birthday:value})}
            />

            <Form_SelectField
              title="Køn"
              selectedValue={this.state.sex}
              dataProvider={
                [
                  {name:"Mand"},
                  {name:"Kvinde"}
                ]
              }
              handleChange = { value => this.setState({sex:value})}
            />

            <Form_SelectField
              title="Cevilstand"
              selectedValue={this.state.cevilstand}
              dataProvider={
                [
                  {name:"Registreret partnerskab"},
                  {name:"Gift"},
                  {name:"Ugift"}
                ]
              }
              handleChange = { value => this.setState({cevilstand:value})}
            />

            <Form_Input
              title="Fornavn"
              selectedValue={this.state.firstName}
              handleChange = { value => this.setState({firstName:value})}
            />

            <Form_Input
              title="Efternavn"
              selectedValue={this.state.lastName}
              handleChange = { value => this.setState({lastName:value})}
            />
          </div>
        } >




        <Form_Input
          title="C/o"
          selectedValue={this.state.co}
          handleChange = { value => this.setState({co:value})}
        />

        <Form_Input
          title="Adresse"
          selectedValue={this.state.address}
          handleChange = { value => this.setState({address:value})}
        />

        <Form_Input
          title="Post nr."
          selectedValue={this.state.postalNumber}
          handleChange = { value => this.setState({postalNumber:value})}
        />

        <Form_Input
          title="By"
          selectedValue={this.state.city}
          handleChange = { value => this.setState({city:value})}
        />
        <Form_Input
          title="Land"
          selectedValue={this.state.country}
          handleChange = { value => this.setState({country:value})}
        />
        <Form_Input
          title="Mobil"
          selectedValue={this.state.cellPhone}
          handleChange = { value => this.setState({cellPhone:value})}
        />
        <Form_Input
          title="e-mail"
          selectedValue={this.state.email}
          handleChange = { value => this.setState({email:value})}
        />
      </ContentCollapsable>
    );
  }
}

Kunden_StamData_Kontaktoplysninger.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_Kontaktoplysninger;
