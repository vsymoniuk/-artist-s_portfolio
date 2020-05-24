import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Slider } from "./components/Slider/Slider";

class App extends Component {
  render() {

    return (
      <Layout>
        <Slider/>
       </Layout>
    )
  }
}

export default App;
