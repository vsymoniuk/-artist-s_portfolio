import React, { Component } from "react";
import './Layout.scss'
import Navbar from "../../components/Navbar/Navbar";

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        <Navbar/>
        <main>{this.props.children}</main>
        footer
      </div>
    );
  }
}
