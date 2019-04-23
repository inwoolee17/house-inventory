import React, { Component } from 'react';
import Routes from './Routes';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Mobile">
          Mobile
        </div>
        <div className="Desktop">
          <Link to="/">Home</Link>
          <Link to="/inventory">Inventory</Link>
        </div>
        {Routes}
      </div>
    );
  }
}

export default App;
