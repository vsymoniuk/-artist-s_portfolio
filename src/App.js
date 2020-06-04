import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import About from "./containers/About/About";
import Gallery from "./containers/Gallery/Gallery";
import { Contact } from "./containers/Contact/Contact";
import { Slider } from "./components/Slider/Slider";
import Auth from "./containers/Auth/Auth";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";
import CreatePicture from "./containers/CreatePicture/CreatePicture";
import { autoLogin } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Slider} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      console.log('authen');
      
      routes = (
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/logout" component={Logout} />
          <Route path="/create" component={CreatePicture} />
          <Route path="/" exact component={Slider} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      console.log('outhen');
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
