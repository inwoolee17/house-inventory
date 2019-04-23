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
        <div key={i} className="HouseList">
          <img src={e.image} alt={"House"} />
          <div className="HouseList-Description">
            <span>{e.name}</span>
            <span>Price: {e.price}</span>
            <span>Swimming Pool: {e.swimming_pool}</span>
          </div>
        </div>
      );
    }) : null;
    return (
      <div className="House">
        {inventory}
      </div>
    );
  }
}

export default House;
