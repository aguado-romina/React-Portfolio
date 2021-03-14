import React from "react";

function Main() {
    return(
       <div>
        <section id="one">
          <header class="major">
            <h2>
              Creative and critical thinker who enjoys solving ambiguous
              problems<br />
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
          <ul class="actions">
            <li>
              <a href="images/Profile.pdf" target="_blank" class="button"
                >Resume</a
              >
            </li>
          </ul>
        </section>
  
       
        <section id="two">
          <h2>Recent Work</h2>
          <div class="row">
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/GIF/passwordgenerator.gif" class="image fit thumb"
                ><img src="images/password-generator.png" alt=""
              /></a>
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
              <a href="images/README.png" class="image fit thumb"
                ><img src="images/README.png" alt=""
              /></a>
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
              <a href="images/GIF/Pōchidoeggu.gif" class="image fit thumb"
                ><img src="images/pochidoeggu.png" alt=""
              /></a>
              <h3>Pochidoeggu</h3>
              <p>
                Real pets are a hastle with our application you are able to care
                for a virtual pet from the comfort of your computer. You can
                choose from a dog, cat, or rabbit. All you have to do is create an
                account, select your pet, and tend to your pet's needs.
              </p>
            </article>
            <article class="col-6 col-12-xsmall work-item">
              <a href="images/GIF/beerDay.gif" class="image fit thumb"
                ><img src="images/beerpassport.png" alt=""
              /></a>
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
            <!-- <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/05.jpg" class="image fit thumb"
                ><img src="images/thumbs/05.jpg" alt=""
              /></a>
              <h3>Nunc enim commodo aliquet</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article> -->
            <!-- <article class="col-6 col-12-xsmall work-item">
              <a href="images/fulls/06.jpg" class="image fit thumb"
                ><img src="images/thumbs/06.jpg" alt=""
              /></a>
              <h3>Risus ornare lacinia</h3>
              <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
            </article> -->
          </div>
          <!-- <ul class="actions">
            <li><a href="#" class="button">Full Portfolio</a></li>
          </ul> -->
        </section>
  
        <!-- Three -->
        <section id="three">
          <!-- <form -->
  
          <!-- > -->
          <!-- <h2>Contact Us</h2>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              required
            />
            <textarea name="message" cols="30" rows="10"></textarea>
            <button>Submit</button> -->
  
          <h2>Get In Touch</h2>
          <p></p>
          <div class="row">
            <div class="col-8 col-12-small">
              <form
                action="https://app.99inbound.com/api/e/Ug5X6Buc"
                method="POST"
                target="_blank"
              >
                <div class="row gtr-uniform gtr-50">
                  <div class="col-6 col-12-xsmall">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div class="col-6 col-12-xsmall">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <br />
                <div style="position: absolute; left: -5000px">
                  <input
                    type="checkbox"
                    name="grass_fed_aquamarine_wavy_computer"
                    value="1"
                    tabindex="-1"
                    autocomplete="no"
                  />
                </div>
                <ul class="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </form>
            </div>
            <div class="col-4 col-12-small">
              <ul class="labeled-icons">
                <li>
                  <h3 class="icon solid fa-home">
                    <span class="label">Address</span>
                  </h3>
                  Minneapolis, MN <br />
                  United States
                </li>
                <li>
                  <h3 class="icon solid fa-mobile-alt">
                    <span class="label">Phone</span>
                  </h3>
                  612-237-4528
                </li>
                <li>
                  <h3 class="icon solid fa-envelope">
                    <span class="label">Email</span>
                  </h3>
                  <a href="#">aguado.romi@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        </div>
    );
}

export default Main;
