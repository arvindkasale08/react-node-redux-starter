/**
 * Created by arvindkasale on 4/19/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  "use strict";
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.AjaxCallsInProgress, action) {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR ||  actionTypeEndsInSuccess(action.type)) {
    return state -1;
  }

  return state;
}
