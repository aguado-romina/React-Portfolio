import React from "react";

function Footer() {
  return (
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
          <li>
            <a href="#" className="" target="_blank">
              <span className="label">Resume</span>
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
  );
}

export default Footer;
