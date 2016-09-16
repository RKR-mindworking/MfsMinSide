import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import SimpleMap from 'SimpleMap';

import { connect } from 'react-redux';

const styles = {
  div:{

    marginTop:20,

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

  map: {


    width: '100%',
    padding: 2,

  },
  labelStyle: {
    fontSize: 13
  }


}

export class Boligfakta_Luftfoto extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapHeight: 1
    }
    this.renderMap = this.renderMap.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  renderMap(sagsInfo) {
    var gpsStr = this.props.showSag.caseObj.GpsCoordinates;
    var gps = gpsStr !== undefined ? this.props.showSag.caseObj.GpsCoordinates.split(" ") : [0,0];
    return <div style={{height: this.state.mapHeight, padding:10}}><SimpleMap zoom={14} lat={Number(gps[0])} lng={Number(gps[1])}/></div>
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      mapHeight: window.innerHeight - 390
    })
  }

  render() {
    return (
      <Paper style={styles.div}>
        {this.renderMap(this.props.sagsInfo)}
      </Paper>
    );
  }
}

export default connect( state => {
  return {
    sagsInfo: state.sagsInfo,
    showSag: state.showSag
  }
} )(Boligfakta_Luftfoto);
