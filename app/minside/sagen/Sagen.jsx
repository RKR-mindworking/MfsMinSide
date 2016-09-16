import React, { Component } from 'react';
import ContentLink from 'ContentLink';
// ----------------------------------------------------------------------------

const mockDataProvider = [
  {
      image:"",
      firstName:"Henrik Hjul",
      address:"Østre Mosevej 5829",
      postalNumber:"9440",
      city:"Aabybro",
      phone:"21633177",
      email:"hf@hfenger.dk",
      role:"Sælger/Køber"
    },
    {
      image:"",
      firstName:"Vinni Thiessen",
      address:"Mjølnersvej 25",
      postalNumber:"9990",
      city:"Skagen",
      phone:"",
      email:"thiessen@skagennet.dk",
      role:"Sælger"
    },
    {
      image:"",
      firstName:"Annette Rung Jensen",
      address:"Mikkel Jennes Vej 1",
      postalNumber:"9990",
      city:"Skagen",
      phone:"28579118",
      email:"knud.lindblad@yahoo.dk",
      role:"Sælger/Køber"
    },
    {
      image:"",
      firstName:"Henrik Vad",
      address:"Slotsvej 34B",
      postalNumber:"2920",
      city:"Charlottenlund",
      phone:"26888900",
      email:"henrik.vad@2920.dk",
      role:"Sælger"
    },
    {
      image:"",
      firstName:"Betina Margrethe Christensen",
      address:"Castenschioldsvej 3",
      postalNumber:"8270",
      city:"Højbjerg",
      phone:"86275317",
      email:"larsogbetina@yahoo.dk",
      role:"Sælger/Køber"
    },
    {
      image:"",
      firstName:"Søren Hermann Jensen",
      address:"Præsthøjvej 11",
      postalNumber:"3300",
      city:"Frederiksværk",
      phone:"60152671",
      email:"as-kregme@it.dk",
      role:"Sælger"
    },
    {
      image:"",
      firstName:"NRGI a.m.b.a.",
      address:"Dusager 22",
      postalNumber:"8200",
      city:"Århus N",
      phone:"87390404",
      email:"",
      role:"Sælger"
    },
    {
      image:"",
      firstName:"Søren Skøtt Andreasen",
      address:"Mølagervej 2",
      postalNumber:"8382",
      city:"Hinnerup",
      phone:"41227132",
      email:"sorenskott@gmail.com",
      role:"Sælger"
    },
    {
      image:"",
      firstName:"Axel Stausgaard Pallesen",
      address:"Ole Svendsens Vej 12, Østerby",
      postalNumber:"9990",
      city:"Skagen",
      phone:"98444000",
      email:"adv.pallesen@skagennet.dk",
      role:"Sælger/Køber"
    },
];

// ============================================================================
// Container Class
class Kunder extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
    <div>
        <div className="App-area-right-menu ">
          <div className="ContentMenu">
            <ul>
              <ContentLink toLink="sagen/budrunde" label="Budrunde" />
              <ContentLink toLink="sagen/tidslinje" label="Tidslinje" />
              <ContentLink toLink="sagen/dokumenter" label="Dokumenter" />
              <ContentLink toLink="sagen/billeder" label="Billeder" />
              <ContentLink toLink="sagen/markedsfoering" label="Markedsføring" />

            </ul>
          </div>
        </div>
        <div >
          {this.props.children}
        </div>
      </div>
    );
  }



}


export default Kunder;
