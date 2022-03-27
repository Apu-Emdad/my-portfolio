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
          <div>
            <h2>Hi There, I'm</h2>
            <h1>Emdadul Haque</h1>
          </div>
          <div>
            <h3>
              <span ref={textRef}></span>
            </h3>
          </div>
          <div className=" d-flex justify-content-center">
            <div className="text-start">
              <div>
                <a href="#">
                  <i class="far fa-envelope text-primary pe-2"></i>
                  <span>EmdadulHaqueOfficial@gmail.com</span>
                </a>
              </div>

              <div>
                <a href="https://github.com/Apu-Emdad" className="">
                  <i class="fab fa-github pe-2"></i>

                  <span>https://github.com/Apu-Emdad</span>
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/emdadul-haque-software-developer/"
                  className=""
                >
                  <i class="fab fa-linkedin pe-2"></i>
                  <span>http://www.linkedin.com/in/apu-emdad</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <a href="https://drive.google.com/file/d/1bXMQQ9JCSdVrynr_bsjhQzV29DGkFRoM/view?usp=sharing">
              <button className="w-50 btn btn-danger  ">
                Download Resume{" "}
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
