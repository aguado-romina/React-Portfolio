import React, { Component } from "react";
import Img from "../images/Aguado.Romina_8682.jpg";

function Header() {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={Img} alt="Romina Aguado" />
        </a>
        <h1>
          <strong>Hola! I'm Romina</strong>
          <br />
          Currently enrolled at the UofM Coding Boot Camp - Full Stack Flex
          Program
          <br />
        </h1>
      </div>
    </header>
  );
}

export default Header;
