import logo from "./logo.svg";
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
      <div ClassName="App">
        <Header />
        <Main />
        <Work />
        <Footer />
      </div>
    );
  }
}
export default App;
