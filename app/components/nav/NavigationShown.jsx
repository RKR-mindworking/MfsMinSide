import React from 'react';
import { connect } from 'react-redux';


import NavigationLink from 'NavigationLink';

import { browserHistory } from 'react-router';
import { Link } from 'react-router';

const styles = require('iconStyle').iconStyle();

export default class NavigationShown extends React.Component {

  componentDidMount(){
    $(this.refs.collapsable1).hide();
  }

  render() {

    var r = this.props.routes;
    var l = r.length;
    var last = r[l-1];

    var isButikken = false;
    r.forEach( (i) => {
      if(i.name === "Sagen") {
        isButikken = true;
      }
    } );

    if( isButikken ) {
      //console.log(this.refs.collapsable1);
      $(this.refs.collapsable1).slideDown("fast");
    } else{
      $(this.refs.collapsable1).slideUp("fast");
    }
      //$(this).children('ul').removeClass('active').children('li').slideUp();

    var renderMenu = () => {

      return <ul className="nodes">
        <li><NavigationLink showLabel={true} key={0} isSub={false} isLeaf={false} label="Til dig" toLink="/TilDig" /></li>
        <li><NavigationLink showLabel={true} key={1} isSub={false} isLeaf={false} label="Min profil" toLink="/min-profil" /></li>
        <li><NavigationLink showLabel={true} key={2} isSub={false} isLeaf={false} label="Statestik" toLink="/statestik" /></li>
        <li><NavigationLink showLabel={true} key={3} isSub={false} isLeaf={false} label="Køberkartotek" toLink="/koeberkatotek" /></li>
        <li><NavigationLink showLabel={true} key={5} isSub={false} isLeaf={false} label="Meddelelser" toLink="/meddelelser" /></li>
        <li ><NavigationLink showLabel={true} key={4} isSub={false} isLeaf={false} label="Sagen" toLink="/sagen" /> </li>
      </ul>
    }

    return (
      <div className="navigation-shown">
        {renderMenu()}
      </div>
    );
  }
}
