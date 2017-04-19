/**
 * Created by arvindkasale on 4/9/17.
 */

import React from 'react';
import {Link} from 'react-router';

class HomePage extends  React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>React, Redux and React Router in ES6 ultra responsive application</p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
      </div>
    );
  }
}


export default HomePage;
