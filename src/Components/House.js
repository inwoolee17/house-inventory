import React, { Component } from 'react';
import './House.css';
import axios from 'axios';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class House extends Component {
  constructor(){
    super();

    this.state = {
      inventory: null,
      loading: true,
      lightBoxImage: null,
      lightBoxOpen: false,
    }
  };

  componentDidMount(){
    axios.get('/api/inventory')
      .then(res => {  
      this.setState({
        loading: false,
        inventory: res.data
      })
    })
    .catch( error => {
      console.log(error);
    })
  };

  deleteHouse = (id) => {
    axios.delete(`/api/inventory/${id}`)
      .then(res => {
        console.log(res);
        axios.get('/api/inventory')
        .then(res => {  
        this.setState({
          loading: false,
          inventory: res.data
        })
      })
      .catch( error => {
        console.log(error);
      })
      })
      .catch(error => {
        console.log(error);
      })
  };

  lightBox = (image) => {
    this.setState({
      lightBoxImage: image,
      lightBoxOpen: true,
    })
  };

  render() {
    let inventory = this.state.inventory ? this.state.inventory.map( (e, i) => {
      return (
        <div key={i} className="HouseList">
          <img onClick={ () => this.lightBox(e.image)} src={e.image} alt={"House"} />
          <div className="HouseList-Description">
            <span>{e.name}</span>
            <span>Price: {e.price}</span>
            <span>Swimming Pool: {e.swimming_pool}</span>
            <button onClick={ () => this.deleteHouse(e.id)}>Delete</button>
          </div>
        </div>
      );
    }) : null;
    return (
      <div className="House">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
        {inventory}
        {this.state.lightBoxOpen && (
          <Lightbox 
            mainSrc={this.state.lightBoxImage}
            onCloseRequest={() => this.setState({ lightBoxOpen: false })} 
          />
        )}
      </div>
    );
  }
}

export default House;
