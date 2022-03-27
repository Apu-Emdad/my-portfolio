import React from "react";
import image from "../../assets/images/tour-bee-58ecd.web.app_.png";

const TourGo = () => {
  return (
    <div className="project text-light">
      <div className="container">
        <div className="row g-5 ">
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
                  href="https://tour-bee-58ecd.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Apu-Emdad/assignment-11-tour-go-client-side"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Client Side)
                </a>
                <a
                  href="https://github.com/Apu-Emdad/assignment-11-tour-go-server-side.git"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Server Side)
                </a>
              </div>
              <div>
                <ul style={{ listStyle: "outside", textAlign: "left" }}>
                  <li>
                    {" "}
                    Firebase based authentication system is provided (Google and
                    Email)
                  </li>
                  <li>
                    Users can order and delete the orders. Admins can approve
                    and delete services.
                  </li>

                  <li>
                    React, React Router, Firebase, Node JS, Express JS, MongoDB
                  </li>
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

export default TourGo;
