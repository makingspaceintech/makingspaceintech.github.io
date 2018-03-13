import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="twenty columns main-col">
        <h2>Mission</h2>
        <p>
        makingspace.tech is a collective guild of people working to make safer spaces in our community.
        </p>
        <p>
        Our goal is to foster inclusivity, diversity, accessibility, and representation in technology.  Bringing the community together and
        providing a space for marginalized voices to be amplified.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Gord Tanner</span>
              <br />
              <span>(226)972-1707</span>
              <br />
              <span>gtanner@gmail.com</span>
            </p>

            <p className="address">
              <span>Joy Smith</span>
              <br />
              <span>jjoy.smith46@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
