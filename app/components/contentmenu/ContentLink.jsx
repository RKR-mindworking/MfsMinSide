import React from 'react';
import { Link } from 'react-router';

export default class ContentLink extends React.Component {
  render() {
    return (
      <Link to={this.props.toLink} className="content-link" activeClassName="content-link-active">
        <li>{this.props.label}</li>
      </Link>
    );
  }
}
