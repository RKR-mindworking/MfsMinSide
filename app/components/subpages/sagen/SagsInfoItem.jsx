import React from 'react';

const styles = {
  div: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  header: {
    fontSize: 13,
    color: '#666666'
  },
  subHeader: {
    fontSize: 12,
    color: '#999999'
  }

}

export default class SagsInfoItem extends React.Component {
  render() {
    return (
      <div style={styles.div}>
        <div style={styles.header}>{this.props.header}</div>
        <div style={styles.subHeader}>{this.props.subHeader}</div>
      </div>
    );
  }
}
