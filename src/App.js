import React, { Component } from 'react';
import Routes from './Routes';
import {Link} from 'react-router-dom';
import House from './Components/House';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        {Routes}
      </div>
    );
  }
}

export default App;
