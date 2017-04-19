/**
 * Created by arvindkasale on 4/12/17.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import devToolsEnhancer, { composeWithDevTools } from 'remote-redux-devtools';


export default function configureStore(initialState) {
  "use strict";
  return createStore( rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant())), devToolsEnhancer({ realtime: true }));
}
