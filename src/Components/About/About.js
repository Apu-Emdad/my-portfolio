import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container " id="about">
      <div className="row mt-5 pt-5 text-start">
        <div className="col-md-6 about">
          <div>
            <h1
              className=" border-bottom border-3 text-secondary"
              style={{ fontWeight: "700" }}
            >
              About Me
            </h1>
            <h6>
              <span style={{ fontWeight: "600" }}>Front End:</span>
              HTML, CSS, Bootstrap, Tailwind, Material UI, JavaScript, ES6,
              React JS
            </h6>
            <h6>
              <span style={{ fontWeight: "600" }}>Back End:</span>
              Node JS, Express JS, MongoDB
            </h6>
            <h6>
              <span style={{ fontWeight: "600" }}>Platforms:</span>
              Firebase, Netlify, Heroku, GitHub
            </h6>
            <h6>
              <span style={{ fontWeight: "600" }}>Tools:</span>
              VS Code, Git, Chrome Debugger Tool
            </h6>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://image.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg"
            alt=""
            className="d-block w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
