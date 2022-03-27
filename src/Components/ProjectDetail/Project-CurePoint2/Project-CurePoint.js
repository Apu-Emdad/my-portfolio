import React from "react";
import image from "../../assets/images/curepoint-clinic.web.app_home.png";

const CurePoint2 = () => {
  return (
    <div className="project text-light">
      <div className="container">
        <div className="row g-5 mt-2">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="d-flex justify-content-around">
                <a
                  href="https://curepoint-clinic.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Apu-Emdad/assignment-10-CurePoint-Clinic.git"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code
                </a>
              </div>
              <div>
                <ul style={{ listStyle: "none", textAlign: "left" }}>
                  <li>
                    • Firebase based authentication system is provided (Google
                    and Email)
                  </li>
                  <li>• Fake API is used</li>
                  <li>• React, React Router, Firebase, Font Awesome </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 project-img">
            <img src={image} alt="" className="d-block w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurePoint2;
