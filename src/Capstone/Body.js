import React, { Component } from 'react';
import "../Capstone/Body.css";
import Banner from './Banner';
import Item from './Item';
export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <Banner/>
        <div className='body-row'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </div>
        
      </div>
    )
  }
}
