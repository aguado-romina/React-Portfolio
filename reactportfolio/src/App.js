import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Work from "./components/work";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="main">
          <Main />
          <Work />
          <Contact />
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
