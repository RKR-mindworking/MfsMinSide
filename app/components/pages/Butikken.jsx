import React from 'react';
import Paper from 'material-ui/Paper'

export default class Butikken extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
