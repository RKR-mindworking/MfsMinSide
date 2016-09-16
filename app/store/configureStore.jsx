import * as redux from 'redux';
import thunk from 'redux-thunk';
import { toggleMenuReducer, popOverReducer, indrykningerReducer, storesReducer, customerReducer } from 'reducers';



export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    toggleMenu: toggleMenuReducer,
    popOver: popOverReducer,
    indrykninger: indrykningerReducer,
  });

  var store = redux.createStore(reducer, initialState ,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
