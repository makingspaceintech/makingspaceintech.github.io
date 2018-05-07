import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a target="_blank" href="https://www.facebook.com/Makingspace.tech">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/MakingSpaceTech">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.instagram.com/makingspace.tech/?hl=en">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/makingspaceintech">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
