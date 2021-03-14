import React from "react";

function Contact() {
    return(
        
        <form>
      <h2>Contact Us</h2>
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
          <button>Submit</button> 

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
      

    );
}

export default Contact;