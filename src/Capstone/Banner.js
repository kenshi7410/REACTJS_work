import React, { Component } from "react";
import "../Capstone/Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h2>A Warm Welcome !</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          cupiditate non maiores animi nisi minus assumenda tempore omnis
          similique, quis consectetur fugit iste enim obcaecati sapiente debitis
          veritatis. Molestiae, quasi.
        </p>
        <button className="btn-banner">Call to action!</button>
      </div>
    );
  }
}
