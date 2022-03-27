import React from "react";
// import "./Project.css";
import image from "../../assets/images/food-delivery-1c9a3.web.app_.png";

const FoodDelivery = () => {
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
                  href="https://food-delivery-1c9a3.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Apu-Emdad/food-delivery-client-"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Client Side)
                </a>
                <a
                  href="https://github.com/Apu-Emdad/food-delivery-server"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Code(Server Side)
                </a>
              </div>
              <div>
                <ul style={{ listStyle: "outside", textAlign: "left" }}>
                  <li>
                    This is an e-commerce project that deals with food delivery.
                  </li>
                  <li>
                    Firebase based authentication system is applied (Google and
                    Gmail). The admins have protected route. Both users and
                    admins have different dashboard regarding their actions.
                  </li>

                  <li>
                    Users can order food and also cancel their orders. Admins
                    can ship or delete the orders
                  </li>
                  <li>
                    Technologies: React JS, Firebase Authentication, React
                    Bootstrap, Node JS, MongoDB, Express JS.
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

export default FoodDelivery;
