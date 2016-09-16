import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = require('iconStyle').iconStyleBreadCrumb();

import Breadcrumbs from 'react-breadcrumbs';
import { Link } from 'react-router';

export default class Breadcrumb extends React.Component {

  render() {

    return (
      <div style={{display:'flex', alignItems:'center'}}>
        {
        /*

        <Link to="/">
          <IconButton iconStyle={styles.icon} style={styles.comp}>
            <ActionHome />
          </IconButton>
        </Link>
        */
        }
        <Breadcrumbs
        
          separator=" / "
          routes={this.props.routes}
          params={this.props.params}
          setDocumentTitle={false}
        />
      </div>
    );
  }
}
