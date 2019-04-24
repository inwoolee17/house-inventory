import React, { Component } from 'react';
import './AddHouse.css';
import axios from 'axios';

class AddHouse extends Component {
  constructor() {
    super();

    this.state = {
      houseName: '',
      housePrice: '',
      swimmingPool: '',
      houseImage: '',
    }
  }
  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    let newHouse = {
      houseName: this.state.houseName,
      housePrice: this.state.housePrice,
      swimmingPool: this.state.swimmingPool,
      houseImage: this.state.houseImage,
    };

    axios.post('/api/inventory', newHouse).then( res => {
      console.log("success");
    }).catch( error => {
      console.log("error");
    })
  }  

  render() {
    return (
      <div className="AddHouse">
        Add House
        <form onSubmit={this.handleSubmit}>
        <label>
          House Name:
          <input
            name="houseName"
            type="text"
            value={this.state.houseName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          House Price:
          <input
            name="housePrice"
            type="number"
            value={this.state.housePrice}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Swimming Pool:        
        <select name="swimmingPool" value={this.state.swimmingPool} onChange={this.handleInputChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
        </label>
        <br />
        <label>
          House Image Url:
          <input
            name="houseImage"
            type="text"
            value={this.state.houseImage}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default AddHouse;
