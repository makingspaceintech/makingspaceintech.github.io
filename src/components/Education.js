import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Hackathons</h3>
          <p>
          Hackathons provide a venue for self-expression and creativity through technology. People come together, form teams
          around a problem or idea, and collaboratively create a unique solution.
          </p>
          <p>
          Working in a team is a core skill for technology and our goal is to provide a venue for everyone to find teams
          and work together on meaningful projects.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Mentorship</h3>

          <p>
          Getting into tech can be a long uphill climb.  We firmly belive that most successful folks involved
          in tech have a community behind them.  Our goal is to be that community.
          </p>

          <p>
          If you are looking to improve your leadership and mentorship skills, makingspace.tech aims to be a resource
          for you to learn and grow as a leader.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Training</h3>

          <p>
          Aside from the core knowledge in computer science, the number of skills that applicants are expected to know
          is staggering.  From git, pull requests, slack, editors, unix, web publishing, makingspace.tech will lead and create
          training courses to help everyone learn these skills.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
