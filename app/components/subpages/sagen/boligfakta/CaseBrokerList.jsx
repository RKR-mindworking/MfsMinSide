import React, { PropTypes } from 'react'

import FaktaItem from 'FaktaItem';

class CaseBrokerList extends React.Component {
  render () {

    var { caseBrokers } = this.props;

    var elements = [];


    var nodeKey = 0;
    for (var key in caseBrokers) {
      if (caseBrokers.hasOwnProperty(key)) {
        var obj = caseBrokers[key];
        if(obj.BrokerID !== null){

          for(var key in obj) {
            var item = obj[key];
            console.log(item);
            elements.push(  <FaktaItem key={nodeKey++} header={key} subHeader={obj[key]} />);
          }

          
        }
      }
    }

    return (
      <div>
        {elements}
      </div>
    );


  }
}

CaseBrokerList.propTypes = {
  caseBrokers: React.PropTypes.object.isRequired
}

export default CaseBrokerList;
