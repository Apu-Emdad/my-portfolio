import React from "react";

import "./Project.css";
import image from "../../assets/images/bikersbd-f97ab.web.app_.png";
const Project1 = () => {
  return (
    <div className="project text-light">
      <div className="container">
        <div className="row g-5">
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
                  href="https://bikersbd-f97ab.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Apu-Emdad/assignment-12-BikersBD-client-side"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Client Side)
                </a>
                <a
                  href="https://github.com/Apu-Emdad/assignment-12-BikersBD-server-side"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Server Side)
                </a>
              </div>
              <div>
                <ul style={{ listStyle: "none", textAlign: "left" }}>
                  <li>
                    {" "}
                    • Firebase based authentication system is provided (Google
                    and Email)
                  </li>
                  <li>• UserRoute and AdminRoute is created.</li>
                  <li> • Admin can approve, delete and make admin</li>
                  <li>• User can order and cancel order after logged in.</li>
                  <li>
                    • React, React Router, Firebase, Node JS, Express JS,
                    MongoDB
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

export default Project1;
