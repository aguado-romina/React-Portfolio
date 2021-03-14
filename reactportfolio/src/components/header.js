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
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="http://twitter.com/RominaAguado1"
                target="_blank"
                className="icon brands fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aguado-romina"
                target="_blank"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/romina-aguado-68593412a"
                target="_blank"
                className="icon brands fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Romina Aguado</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </header>
  );
}

export default Header;
