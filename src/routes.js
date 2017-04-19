/**
 * Created by arvindkasale on 4/9/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route component={AboutPage} path="about" />
    <Route component={CoursesPage} path="courses" />
    <Route path="course" component={ManageCoursePage} />
    <Route component={ManageCoursePage} path="course/:id" />
  </Route>
);
