import React from 'react';
import ContentCollapsable from  'ContentCollapsable';

const Kunden_StamData_Notater = ({customer}) => {
  return (
    <ContentCollapsable title="Notater" />
  );
}

Kunden_StamData_Notater.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_Notater;
