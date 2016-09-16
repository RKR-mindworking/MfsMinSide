import React from 'react';
import { connect } from 'react-redux';
import Kunden_StamData from 'Kunden_StamData';
import Kunden_Aktiviteter from 'Kunden_Aktiviteter';
import Kunden_Sager from 'Kunden_Sager';
import Kunden_Koeberkartotek from 'Kunden_Koeberkartotek';
import Kunden_Henvisninger from 'Kunden_Henvisninger';
import Kunden_Tidslinie from 'Kunden_Tidslinie';
import Kunden_Tabs from 'Kunden_Tabs';
import Kunden_InfoBox from 'Kunden_InfoBox';

import { withRouter } from 'react-router';
import { loadSagsInfo } from 'sagerActions';

// ----------------------------------------------------------------------------

const activityMockDataProvider = [
  {
    crmType:1,
    dueDate: 1473419474,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "12919990",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:3,
    dueDate: 1473419474,
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
    dueDate: 1473419474,
    activity: "Vurderingsmøde 2",
    meetingLocation: "På kontoret",
    client: {
      name: "Lennart Møldrup",
      phone: "55 51 55 59"
    },
    case: {
      id: "12919990",
      address: "Højtoftevej 63"
    },
    status: "idle"
  },
  {
    crmType:9,
    dueDate: 1473419474,
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
    dueDate: 1473419474,
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
    dueDate: 1473419474,
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
      dueDate: 1473419474,
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
    dueDate: 1473419474,
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
    dueDate: 1473419474,
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
    dueDate: 1473419474,
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


// ============================================================================
// Container Class
class Kunden extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedTab: nextProps.params.tab });
  }

  componentDidMount() {
    this.setState({ selectedTab: this.props.params.tab });
  }

  render() {

    var content;

    switch (this.state.selectedTab) {
      case "Stamdata":
        content = <Kunden_StamData customer = {this.props.customer} />
        break;
      case "Aktiviteter":
        content = <Kunden_Aktiviteter
          dataProvider      = { activityMockDataProvider }
          handleAddActivity = { () => console.log("handleAddActivity") }
          handleRowSelcted  = { (item) => console.log(item.client.name) }
          handleCaseNoClicked = { (caseNo) => {
            // Change the url
            this.props.router.push("/Sager/Sagen/");

            this.props.dispatch(loadSagsInfo("123", caseNo));

            }
          }
        />
        break;
      case "Sager":
        content = <Kunden_Sager />
        break;
      case "Køberkartotek":
        content = <Kunden_Koeberkartotek />
        break;
      case "Henvisninger":
        content = <Kunden_Henvisninger />
        break;
      case "Tidslinie":
        content = <Kunden_Tidslinie />
        break;

      default:
        content = <div></div>
    }

    return (
      <div>
        <Kunden_Tabs />
        <div className="App-area-right-main-content">
          <Kunden_InfoBox customer = {this.props.customer} />
          {content}
        </div>
      </div>
    );
  }
}

// ============================================================================
// Container State mapping to props
function mapStateToProps(state) {
  return {
    customer: state.customer
  }
}

// ****************************************************************************
export default withRouter(connect(mapStateToProps)(Kunden));
// ****************************************************************************
