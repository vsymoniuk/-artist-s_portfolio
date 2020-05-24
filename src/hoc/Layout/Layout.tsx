import React, { Component } from "react";
import './Layout.scss'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        <Navbar/>
        <main>{this.props.children}</main>
        <Footer/>
      </div>
    );
  }
}
