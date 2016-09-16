import React from 'react';
import ContentCollapsable from  'ContentCollapsable';

const Kunden_StamData_Markedsfoering = ({customer}) => {
  return (
    <ContentCollapsable title="Markedsføring" />
  );
}

Kunden_StamData_Markedsfoering.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_Markedsfoering;
