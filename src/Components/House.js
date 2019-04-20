import React, { Component } from 'react';
import './House.css';
import axios from 'axios';

class House extends Component {
  constructor(){
    super();

    this.state = {
      inventory: null,
    }
  };

  componentDidMount(){
    axios.get('/api/inventory')
      .then(res => {
      this.setState({
        inventory: res.data
      })
    })
    .catch( error => {
      console.log(error);
    })
  };

  render() {
    let inventory = this.state.inventory ? this.state.inventory.map( (e, i) => {
      return (
        <div key={i} className="House">
          <div>House Listing</div>
          <img src={e.image} alt={"House"} />
          <span>{e.name}</span>
          <span>{e.price}</span>
          <span>Swimming Pool: {e.swimming_pool}</span>
        </div>
      );
    }) : null;
    console.log("this is my inventory", this.state.inventory);
    return (
      <div className="House">
        {inventory}
      </div>
    );
  }
}

export default House;
