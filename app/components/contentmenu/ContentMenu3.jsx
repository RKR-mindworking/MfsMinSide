import React from 'react';


export default class ContentMenu3 extends React.Component {
  render() {

    var getMenu = () => {
      return this.props.menu;
    }

    return (
      <div className="ContentSubMenu">
        {getMenu()}
      </div>
    );
  }
}
