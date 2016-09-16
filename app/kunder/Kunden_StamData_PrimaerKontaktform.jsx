import React from 'react';
import ContentCollapsable from  'ContentCollapsable';

const Kunden_StamData_PrimaerKontaktform = ({customer}) => {
  return (
    <ContentCollapsable title="Primær kontaktform" />
  );
}

Kunden_StamData_PrimaerKontaktform.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_PrimaerKontaktform;
