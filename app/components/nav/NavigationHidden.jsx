import React from 'react';


import NavigationLink from 'NavigationLink';

export default class NavigationHidden extends React.Component {

  getIsOpen(name) {
    return this.props.node === name;
  }



  render() {

    var renderMenu = () => {

      return <ul className="nodes">
        <li><NavigationLink showLabel={false} key={0} isSub={false} isLeaf={false} label="Til dig" toLink="/TilDig" /></li>
        <li><NavigationLink showLabel={false} key={1} isSub={false} isLeaf={false} label="Min profil" toLink="/min-profil" /></li>
        <li><NavigationLink showLabel={false} key={2} isSub={false} isLeaf={false} label="Statestik" toLink="/statestik" /></li>
        <li><NavigationLink showLabel={false} key={3} isSub={false} isLeaf={false} label="Køberkartotek" toLink="/koeberkatotek" /></li>
        <li><NavigationLink showLabel={false} key={5} isSub={false} isLeaf={false} label="Meddelelser" toLink="/meddelelser" /></li>
        <li ><NavigationLink showLabel={false} key={4} isSub={false} isLeaf={false} label="Sagen" toLink="/sagen" /> </li>
      </ul>


    }

    return (
      <div className="navigation-shown">
        {renderMenu()}
      </div>
    );
  }
}
