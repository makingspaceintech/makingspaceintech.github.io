import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import JavaScript from "../assets/images/javascript.png";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

const Events = () => (
  <section id="events">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of our Events.</h1>

        <div
          id="events-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns events-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
                <div className="overlay">
                  <div className="events-item-meta">
                    <h5>Coffee</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns events-item">
            <div className="item-wrap">
              <a href="https://corridorjs.github.io" title="">
                <img alt="" src={JavaScript} width="100%" />
                <div className="overlay">
                  <div className="events-item-meta">
                    <h5>Console</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns events-item">
            <div className="item-wrap">
              <a href="#modal-08" title="">
                <img alt="" src={Retrocam} />
                <div className="overlay">
                  <div className="events-item-meta">
                    <h5>Your event here</h5>
                    <p>Let us know about your group</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Events;
