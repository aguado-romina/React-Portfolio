import React from "react";

function Contact() {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p></p>
      <div className="row">
        <div className="col-8 col-12-small">
          <form
            action="https://app.99inbound.com/api/e/Ug5X6Buc"
            method="POST"
            target="_blank"
          >
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <br />
            <div style={{ position: "absolute", left: "-5000px" }}>
              <input
                type="checkbox"
                name="grass_fed_aquamarine_wavy_computer"
                value="1"
                tabindex="-1"
                autocomplete="no"
              />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div>
        <div className="col-4 col-12-small">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon solid fa-home">
                <span className="label">Address</span>
              </h3>
              Minneapolis, MN <br />
              United States
            </li>
            <li>
              <h3 className="icon solid fa-mobile-alt">
                <span className="label">Phone</span>
              </h3>
              612-237-4528
            </li>
            <li>
              <h3 className="icon solid fa-envelope">
                <span className="label">Email</span>
              </h3>
              <a href="#">aguado.romi@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
