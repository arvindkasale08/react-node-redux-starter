/**
 * Created by arvindkasale on 4/12/17.
 */

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  "use strict";
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course) {
  "use strict";
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  "use strict";
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch( error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });

  };

}
