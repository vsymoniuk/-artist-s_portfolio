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
import Picture from "./containers/Picture/Picture";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    const routes = [
      { path: "/about", component: About },
      { path: "/gallery", component: Gallery },
      { path: "/picture/:id", component: Picture },
      { path: "/contact", component: Contact },
    ];

    if (this.props.isAuthenticated) {
      routes.push({ path: "/logout", component: Logout });
      routes.push({ path: "/create", component: CreatePicture });
    } else {
      routes.push({ path: "/auth", component: Auth });
    }

    return (
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path + Date.now()}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route path="/" exact component={Slider} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
