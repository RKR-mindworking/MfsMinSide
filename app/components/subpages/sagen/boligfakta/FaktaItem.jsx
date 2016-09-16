import React from 'react';
import Divider from 'material-ui/Divider';

const styles = {
  div: {
    display: 'flex',
    flex:1,
    paddingBottom:10,
    paddingTop: 10
  },

  header: {
    fontSize: 13,
    color: '#666666',
    width: 200,
  },
  subHeader: {
    fontSize: 12,
    color: '#999999',
    flex:1,
  }

}

export default class FaktaItem extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.div}>
          <div style={styles.header}>{this.props.header}</div>
          <div style={styles.subHeader}>{this.props.subHeader}</div>
        </div>
        <Divider />
      </div>
    );
  }
}
