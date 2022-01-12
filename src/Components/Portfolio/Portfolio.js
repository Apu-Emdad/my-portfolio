import React from "react";
import "./Portfolio.css";
import foodDelivery from "../assets/images/food-delivery-1c9a3.web.app_.png"
import bikersbd from "../assets/images/bikersbd-f97ab.web.app_.png";
import tourBee from "../assets/images/tour-bee-58ecd.web.app_.png";
import curePoint from "../assets/images/curepoint-clinic.web.app_home.png";
import blackHole from "../assets/images/Blackhole-learning.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio container  mx-auto my-5 " id="portfolio">
      <h2 className="mt-5 pt-2 text-secondary" style={{ fontWeight: "700" }}>
        My Projects
      </h2>
      <div class="container px-4">
        <div className="row g-5">
          <div className="col-md-6   ">
            {/* project-0  */}
            <div className="project-card bg-dark">
              <div className="d-flex  justify-content-around  py-2   border-bottom rounded ">
                <a
                  href="https://food-delivery-1c9a3.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>

                <Link
                  className="d-block"
                  style={{ textDecoration: "none" }}
                  to="/projectdetail0"
                >
                  Details
                </Link>
              </div>
              <div class="project-card-img   border rounded">
                <img src={foodDelivery} alt="" className="d-block w-100 " />
              </div>
            </div>
          </div>
          <div className="col-md-6   ">
            {/* project-1  */}
            <div className="project-card bg-dark">
              <div className="d-flex  justify-content-around  py-2   border-bottom rounded ">
                <a
                  href="https://bikersbd-f97ab.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>

                <Link
                  className="d-block"
                  style={{ textDecoration: "none" }}
                  to="/projectdetail1"
                >
                  Details
                </Link>
              </div>
              <div class="project-card-img   border rounded">
                <img src={bikersbd} alt="" className="d-block w-100 " />
              </div>
            </div>
          </div>
          {/* project-2  */}
          <div className="col-md-6   ">
            <div className="project-card bg-dark">
              <div className="d-flex  justify-content-around  py-2   border-bottom rounded ">
                <a
                  href="https://tour-bee-58ecd.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>

                <Link
                  className="d-block"
                  style={{ textDecoration: "none" }}
                  to="/projectdetail2"
                >
                  Details
                </Link>
              </div>
              <div class="project-card-img   border rounded">
                <img src={tourBee} alt="" className="d-block w-100 " />
              </div>
            </div>
          </div>
          {/* project-3  */}
          <div className="col-md-6   ">
            <div className="project-card bg-dark">
              <div className="d-flex  justify-content-around  py-2   border-bottom rounded ">
                <a
                  href="https://curepoint-clinic.web.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>

                <Link
                  className="d-block"
                  style={{ textDecoration: "none" }}
                  to="/projectdetail3"
                >
                  Details
                </Link>
              </div>
              <div class="project-card-img   border rounded">
                <img src={curePoint} alt="" className="d-block w-100 " />
              </div>
            </div>
          </div>
          {/* project-4  */}
          {/* <div className="col-md-6   ">
            <div className="project-card bg-dark">
              <div className="d-flex  justify-content-around  py-2   border-bottom rounded ">
                <a
                  href="https://clever-heisenberg-33314f.netlify.app/"
                  style={{ textDecoration: "none" }}
                  className="d-block"
                >
                  Live
                </a>

                <Link
                  className="d-block"
                  style={{ textDecoration: "none" }}
                  to="/projectdetail4"
                >
                  Details
                </Link>
              </div>
              <div class="project-card-img   border rounded">
                <img src={blackHole} alt="" className="d-block w-100 " />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
