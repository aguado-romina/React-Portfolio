import React from "react";

funtion RecentWork(){
    return(
<section id="two">
        <h2>Recent Work</h2>
        <div class="row">
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/GIF/passwordgenerator.gif" class="image fit thumb">
              <img src="images/password-generator.png" alt="" />
            </a>
            <h3>Password Generator</h3>
            <p>
              Used to generate a random password based on selected criteria.
              This app runs in the browser, and features dynamically updated
              HTML and CSS powered by JavaScript. It has a clean and polished
              user interface that is responsive, ensuring that it adapts to
              multiple screen sizes.
            </p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/README.png" class="image fit thumb">
              <img src="images/README.png" alt="" />
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
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/GIF/Pōchidoeggu.gif" class="image fit thumb">
              <img src="images/pochidoeggu.png" alt="" />
            </a>
            <h3>Pochidoeggu</h3>
            <p>
              Real pets are a hastle with our application you are able to care
              for a virtual pet from the comfort of your computer. You can
              choose from a dog, cat, or rabbit. All you have to do is create an
              account, select your pet, and tend to your pet's needs.
            </p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/GIF/beerDay.gif" class="image fit thumb">
              <img src="images/beerpassport.png" alt="" />
            </a>
            <h3>BeerDay Helper</h3>
            <p>
              This application allows the user to find the best crafted
              breweries located in any city or town they want. The user will
              have the option to type in their preferred brewery and the
              brewer's company name, address and website will pop up. WeatherAPI
              was used to generate the current weather time and temperature of
              said Brewery location.
            </p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/05.jpg" class="image fit thumb">
              <img src="images/thumbs/05.jpg" alt="" />
            </a>
            <h3>Nunc enim commodo aliquet</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
          <article class="col-6 col-12-xsmall work-item">
            <a href="images/fulls/06.jpg" class="image fit thumb">
              <img src="images/thumbs/06.jpg" alt="" />
            </a>
            <h3>Risus ornare lacinia</h3>
            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
          </article>
        </div>
        <ul class="actions">
          <li>
            <a href="#" class="button">
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>
    );
}

export default RecentWork;