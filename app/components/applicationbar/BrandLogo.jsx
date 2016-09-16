import React from 'react';
import { Link } from 'react-router';

export default class BrandLogo extends React.Component {
  render() {

    var imgSrc = this.props.dark ? 'Mindworking_Black_logo.png' : 'Mindworking_logo.png';

    return (
      <div style={{height:24}} >
        <Link to="/"><img src={imgSrc} style={{height:24}} /></Link>
      </div>
    );
  }
}

BrandLogo.propTypes = {
  dark: React.PropTypes.bool
}

BrandLogo.defaultProps = {
  dark: false
};
