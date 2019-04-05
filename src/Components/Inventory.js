import React, { Component } from 'react';
import './Inventory.css';
import House from './House';

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        This is Inventory
        <House />
      </div>
    );
  }
}

export default Inventory;
