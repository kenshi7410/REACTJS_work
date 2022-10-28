import React, { Component } from "react";
import "../Capstone/Item.css";
export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item-top"><p>500 x 325</p></div>
        <div className="item-body">
          <h2>Card title</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate non maiores animi nisi minus assumenda tempore omnis
            similique
          </p>
        </div>
        <div className="item-bot">
            <button className="btn-item">Find Out More!</button>
        </div>
      </div>
    );
  }
}
