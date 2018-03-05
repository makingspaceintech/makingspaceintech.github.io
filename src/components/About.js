import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Mission</h2>
        <p>
        MakingSpaces.tech is a collective guild of people working to make intersectional spaces in our community.
        <br />
        Our goal is to foster inclusivity, 
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
