import React from 'react';
import ContentCollapsable from  'ContentCollapsable';

const Kunden_StamData_Samtykke = ({customer}) => {
  return (
    <ContentCollapsable title="Samtykke" />
  );
}

Kunden_StamData_Samtykke.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_Samtykke;
