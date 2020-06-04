import React, { Component } from "react";
import './Layout.scss'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        <Navbar isAuthenticated={this.props.isAuthenticated}/>
          <main>{this.props.children}</main>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout)