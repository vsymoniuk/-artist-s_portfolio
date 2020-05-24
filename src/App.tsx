import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import About from "./containers/About/About";
import Gallery from "./containers/Gallery/Gallery";
import Contact from "./containers/Contact/Contact";
import { Slider } from "./components/Slider/Slider";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        {/* <Route path="/auth" component={Auth} /> */}
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Slider} />
        <Redirect to="/" />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}

export default App;
