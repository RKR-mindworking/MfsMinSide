var React = require('react');
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


var Butikken = (props) => {
  return (
    <div>

      <div>

      </div>

      <Paper>
        Butikken
        {props.children}
      </Paper>

    </div>
  );
}

module.exports = Butikken;
