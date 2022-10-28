import React, { Component } from "react";
import "../Capstone/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <h2>Start Bootstrap </h2>
        </div>
        <div className="nav">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}
