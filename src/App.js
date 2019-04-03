import React, { Component } from 'react';
import Inventory from './Components/Inventory';
import Home from './Components/Home';
import House from './Components/House';

class App extends Component {
  render() {
    return (
      <div className="App">
        This is App
        <Inventory />
        <Home />
        <House />
      </div>
    );
  }
}

export default App;
