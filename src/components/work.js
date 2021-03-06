import React from "react";
import Password from "../images/GIF/passwordgenerator.gif";
import Passwordpng from "../images/passwordgenerator.png";
import Readme from "../images/README.png";
import Pochidoeggu from "../images/GIF/Pōchidoeggu.gif";
import Pochidoeggupng from "../images/pochidoeggu.png";
import Beerday from "../images/GIF/beerDay.gif";
import Beerdaypng from "../images/beerpassport.png";

function Work() {
  return (
    <section id="two">
      <h2>Recent Work</h2>
      <div className="row">
        <article className="col-6 col-12-xsmall work-item">
          <a href={Password} className="image fit thumb">
            <img src={Passwordpng} alt="" />
          </a>
          <h3>Password Generator</h3>
          <p>
            Used to generate a random password based on selected criteria. This
            app runs in the browser, and features dynamically updated HTML and
            CSS powered by JavaScript. It has a clean and polished user
            interface that is responsive, ensuring that it adapts to multiple
            screen sizes.
          </p>
        </article>
        <article className="col-6 col-12-xsmall work-item">
          <a href={Readme} className="image fit thumb">
            <img src={Readme} alt="" />
          </a>
          <h3>README Generator</h3>
          <p>
            You can quickly and easily create a README file by using a
            command-line application to generate one. This allows the project
            creator to devote more time to working on the project. The
            application will be invoked by using the following command: node
            index.js
          </p>
        </article>
        <article className="col-6 col-12-xsmall work-item">
          <a href={Pochidoeggu} className="image fit thumb">
            <img src={Pochidoeggupng} alt="" />
          </a>
          <h3>Pochidoeggu</h3>
          <p>
            Real pets are a hastle with our application you are able to care for
            a virtual pet from the comfort of your computer. You can choose from
            a dog, cat, or rabbit. All you have to do is create an account,
            select your pet, and tend to your pet's needs.
          </p>
        </article>
        <article className="col-6 col-12-xsmall work-item">
          <a href={Beerday} className="image fit thumb">
            <img src={Beerdaypng} alt="" />
          </a>
          <h3>BeerDay Helper</h3>
          <p>
            This application allows the user to find the best crafted breweries
            located in any city or town they want. The user will have the option
            to type in their preferred brewery and the brewer's company name,
            address and website will pop up. WeatherAPI was used to generate the
            current weather time and temperature of said Brewery location.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Work;
