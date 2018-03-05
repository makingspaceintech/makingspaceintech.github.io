import React from "react";

const Community = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Community</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Meetups</h3>
          
          <p>
          We will be organizing and providing meetings for people who share an interest
          in technology.  May that be a specific tool, langage, industry or a shared interest
          in an aspect of our community.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Talks</h3>

          <p>
          We will strive to both bring in high quality speakers on topics in tech as well as provide training
          and guidance for those who want to get into public speaking.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Community;
