import React from 'react';
import ContentLink from 'ContentLink';
// ----------------------------------------------------------------------------

// ============================================================================
// View Markup
const Kunden_Tabs = (props) => {
  return (
    <div className="App-area-right-menu ">
      <div className="ContentMenu">
        <ul>
          <ContentLink toLink="Kunder/Kunden/Aktiviteter" label="Aktiviteter" />
          <ContentLink toLink="Kunder/Kunden/Stamdata" label="Stamdata" />

          <ContentLink toLink="Kunder/Kunden/Sager" label="Sager" />

          <ContentLink toLink="Kunder/Kunden/Køberkartotek" label="Køberkartotek" />
        <ContentLink toLink="Kunder/Kunden/Henvisninger" label="Henvisninger" />
            <ContentLink toLink="Kunder/Kunden/Tidslinie" label="Tidslinie" />
          
        </ul>
      </div>
    </div>
  );
}

// ****************************************************************************
export default Kunden_Tabs;
// ****************************************************************************
