import React, { Component } from 'react'
import OpgaverOgAftaler_Presentation from 'OpgaverOgAftaler_Presentation';

import { connect } from 'react-redux';

const mockData = [
  {
    crmType:1,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW15-975648",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:3,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-874513",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:6,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-974158",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:9,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-657489",
      address: "Højtoftevej 63"
    },
    status: "overdue"
  },
  {
    crmType:2,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-314567",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:5,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-278463",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
      dueDate: 1473687510,
      activity: "Vurderingsmøde 2",
      meetingLocation: "På kontoret",
      client: {
        name: "Lennart Møldrup",
        phone: "55 51 55 59"
      },
      case: {
        id: "MW16-129712",
        address: "Højtoftevej 63"
      },
      status: "idle"
  },
  {
    crmType:11,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-512643",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:10,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-564791",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:3,
    dueDate: 1473687510,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "MW16-354789",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },


]

export class OpgaverOgAftaler extends Component {
  render() {
    return (
      <OpgaverOgAftaler_Presentation
        activities={mockData}
        handleTrusedStoreSelectorChange={value => console.log(value)}
        />
    );
  }
}

function mapStateToProps( store ) {
  return {
    stores: store.stores
  }
}

export default connect(mapStateToProps)( OpgaverOgAftaler );
