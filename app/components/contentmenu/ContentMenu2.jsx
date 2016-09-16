import React from 'react';


export default class ContentMenu2 extends React.Component {
  render() {

    var getMenu = () => {
      return this.props.menu;
    }

    return (
      <div className="ContentMenu">
        {getMenu()}
      </div>
    );
  }
}
