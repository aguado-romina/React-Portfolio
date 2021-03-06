import React from "react";
import Resume from "../images/Profile.pdf";

function Main() {
  return (
    <div id="one">
      <header className="major">
        <h2>
          Creative and critical thinker who enjoys solving ambiguous problems
          <br />
        </h2>
      </header>
      <p>
        Professional with newly developed skills in JavaScript, Node.js and
        responsive web design. Leveraging background in economics, plus 7+
        years' experience from the Airline and CPG industries, where I honed
        team leading, team training and customer facing experience. Known as a
        problem solver and strong communicator who approaches new challenges
        with an open-mind. Ready-set to combine my skills with my passion for
        building products and programs while leading a team to success.
      </p>
      <ul className="actions">
        <li>
          <a href={Resume} target="_blank" className="button">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Main;
