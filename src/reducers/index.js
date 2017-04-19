/**
 * Created by arvindkasale on 4/12/17.
 */
import {combineReducers} from 'redux';
import courses from '../reducers/courseReducer';
import authors from '../reducers/authorReducer';
import ajaxCallsInProgress from '../reducers/ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
