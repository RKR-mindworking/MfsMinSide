import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/* Components */
import BrandLogo from 'BrandLogo';
import Tools from 'Tools';
import ToggleMenu from 'ToggleMenu';
import Breadcrumb from 'Breadcrumb';
import ContentMenu from 'ContentMenu';
import NavigationShown from 'NavigationShown';
import NavigationHidden from 'NavigationHidden';
import { toggleMenu } from 'actions';

/* Theme values */
const muiTheme = getMuiTheme({
  palette:{
    primary1Color: '#FF5722',
    primary2Color: '#009688',
    accent1Color: '#009688',

  },
  tableRow: {
    selectedColor: '#F5F5F5',
    hoverColor: '#F5F5F5',
  }
});

/* Component */
class Main extends React.Component {

  render() {

    var getHideMenu = () => {
      const className = this.props.hideMenu ? "-hidden" : "";
      return className;
    }

    var getMenu = () => {
      return this.props.hideMenu ? <NavigationHidden /> : <NavigationShown  routes={this.props.routes} />;
    }

    return (
      <MuiThemeProvider muiTheme = { muiTheme }>
        <div className="app">
          <div className="top-bar">
            <BrandLogo />
            <Tools />
          </div>
          <div className="sub-top-bar">
            <div className={`menu-toggle-area${getHideMenu()}`}>
              <ToggleMenu />
            </div>
            <div className="breadcrumb-area">
              <Breadcrumb routes={this.props.routes} params={this.props.params}/>
            </div>
          </div>
          <div className="side-nav-and-content-wrapper">
            <div id='navContent' className={`side-nav${getHideMenu()}`}>
              {getMenu()}
            </div>
            <div id='mainContent' className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

/* Redux - Thunk - Connected: Pull the states we need in this view */
export default connect( state => {
  return {
    hideMenu : state.toggleMenu,
    auth: state.login,
    dataSaved: state.dataSaved
  };
})(Main);
