import React, { PropTypes } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class SimpleMap extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {
    return (
      <GoogleMap
        containerProps={{
          style: {
            height: `100%`,
          },
        }}

        defaultZoom={this.props.zoom}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
      <Marker
              position={{ lat: this.props.lat, lng: this.props.lng }}
              key={111}
              defaultAnimation = {2}
            />
    </GoogleMap>
    );
  }
}

SimpleMap.defaultProps = {
  zoom: 5,
  lat: 0,
  lng: 0
};

export default SimpleMap;
