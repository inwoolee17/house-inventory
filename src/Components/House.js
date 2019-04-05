import React, { Component } from 'react';
import './House.css';
import imageOne from '../Media/house_01.jpg';
import imageTwo from '../Media/house_02.jpg';
import imageThree from '../Media/house_03.jpg';

class House extends Component {
  render() {
    return (
      <div className="House">
        <div>House Listing</div>
        <img src={imageOne} alt={"House"} />
        <span>House_01</span>
        <span>Price: $200</span>
        <span>Swimming Pool: No</span>
        <img src={imageTwo} alt={"House"} />
        <span>House_02</span>
        <span>Price: $200</span>
        <span>Swimming Pool: No</span>
        <img src={imageThree} alt={"House"} />
        <span>House_03</span>
        <span>Price: $200</span>
        <span>Swimming Pool: No</span>
      </div>
    );
  }
}

export default House;
