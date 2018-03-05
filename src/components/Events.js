import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import LGBTQ from "../assets/images/portfolio/lgbtq.jpg";
import JavaScript from "../assets/images/javascript.png";
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
                <img alt="" src={LGBTQ} width="100%" height="100%" />
                <div className="overlay">
                  <div className="events-item-meta">
                    <h5>LGBTQ in Tech meetup</h5>
                    <p>A place for those who identify as LGBTQ and work in tech to get together</p>
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
                    <h5>CorridorJS</h5>
                    <p>Web Development lightning talks.</p>
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
