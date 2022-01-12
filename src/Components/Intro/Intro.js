import React from "react";
import { init } from "ityped";
import "./Intro.css";
import myself from "../assets/images/without-bg-2.png";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "MERN Stack Web developer",
        "Web Enthusiast",
        "Passionate Learner",
      ],
    });
  }, []);

  return (
    <div className="intro container-fluid" id="intro">
      <div className="row">
        <div className="col-md-6 left">
          <img
            src={myself}
            alt=""
            className=" d-block"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="col-md-6 p-5 right">
          <h2>Hi There, I'm</h2>
          <h1>Emdadul Haque</h1>
          <div>
            <h3>
              <span ref={textRef}></span>
            </h3>
          </div>
          <i class="far fa-envelope text-primary"> apuemdad96@gmail.com</i>
          <div>
            <a href="https://github.com/Apu-Emdad" className="px-5">
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/emdadul-haque-software-developer/"
              className="px-5"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1tO13p6ubYoVZ8r4Pd2xhTbUEVhvbtLsZ/view"
            download
          >
            <button className="btn btn-danger mt-5 "> Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
