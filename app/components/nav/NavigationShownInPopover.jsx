import React from 'react';
import { connect } from 'react-redux';


import NavigationLink from 'NavigationLink';

import { browserHistory } from 'react-router';
import { Link } from 'react-router';

const styles = require('iconStyle').iconStyle();





export default class NavigationShownInPopover extends React.Component {



  render() {




    var renderMenu = () => {

      return <ul className="nodes">

        <li >
            <NavigationLink showLabel={true} key={4} isSub={true} isLeaf={false} label="Butikken" toLink="/Butikken" />
            <ul className="leafNodes" ref="collapsable1">
              <li><NavigationLink showLabel={true} key={10} isSub={false} isLeaf={true} label="Emneannoncering" toLink="/Butikken/Emneannoncering" /></li>
              <li><NavigationLink showLabel={true} key={11} isSub={false} isLeaf={true} label="Bannerannoncering" toLink="/Bannerannoncering" /></li>
              <li><NavigationLink showLabel={true} key={12} isSub={false} isLeaf={true} label="Instore TV" toLink="/Instore TV" /></li>
              <li><NavigationLink showLabel={true} key={13} isSub={false} isLeaf={true} label="Salgsværktøjer" toLink="/Salgsværktøjer" /></li>
              <li><NavigationLink showLabel={true} key={14} isSub={false} isLeaf={true} label="Brevfletning" toLink="/Brevfletning" /></li>
              <li><NavigationLink showLabel={true} key={15} isSub={false} isLeaf={true} label="Billeder" toLink="/Billeder" /></li>
              <li><NavigationLink showLabel={true} key={16} isSub={false} isLeaf={true} label="Dokumenter" toLink="/Dokumenter" /></li>
              <li><NavigationLink showLabel={true} key={17} isSub={false} isLeaf={true} label="iPad" toLink="/iPad" /></li>
              <li><NavigationLink showLabel={true} key={18} isSub={false} isLeaf={true} label="Sociale medier" toLink="/Sociale medier" /></li>
              <li><NavigationLink showLabel={true} key={19} isSub={false} isLeaf={true} label="Køberkartotek" toLink="/Køberkartotek" /></li>
              <li><NavigationLink showLabel={true} key={20} isSub={false} isLeaf={true} label="Intern profilering" toLink="/Intern profilering" /></li>
              <li><NavigationLink showLabel={true} key={21} lisSub={false} isLeaf={true} label="Butiksdata" toLink="/Butiksdata" /></li>
              <li><NavigationLink showLabel={true} key={22} isSub={false} isLeaf={true} label="Medarbejdere" toLink="/Medarbejdere" /></li>
          </ul>
        </li>

      </ul>
    }



    return (
      <div className="navigation-shown">
        {renderMenu()}
      </div>
    );
  }
}
