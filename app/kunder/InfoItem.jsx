import React from 'react';
// ----------------------------------------------------------------------------

const styles = {
  div: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch',
    minWidth:100
  },
  title: {
    fontSize: 13,
    color: '#666666'
  },
  info: {
    fontSize: 12,
    color: '#999999'
  }
}

// ============================================================================
// View Markup
const InfoItem = ({title, textLines}) => {
  return(
    <div style={styles.div}>
      <div style={styles.title}>{title}</div>
      <div style={styles.info}>{textLines.map( (t,i) => { return <span key={i}>{t}<br/></span> })}</div>
    </div>
  );
}

// ============================================================================
// PropTypes
InfoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  textLines: React.PropTypes.array.isRequired
}

// ****************************************************************************
export default InfoItem;
// ****************************************************************************
