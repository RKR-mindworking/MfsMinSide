import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import router from 'app/router/';
import injectTapEventPlugin from 'react-tap-event-plugin';

var store = require('configureStore').configure();

// App css
require('style!css!sass!applicationStyles');

// Make sure to import default styles.
// This only needs to be done once; probably during your application's bootstrapping process.
import 'react-virtualized/styles.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var rootDiv = document.getElementById('root');

ReactDOM.render(
  <Provider store={ store }>{ router }</Provider>,
  rootDiv
);
