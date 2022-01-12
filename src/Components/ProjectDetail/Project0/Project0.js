import React from 'react';
// import "./Project.css";
import image from "../../assets/images/food-delivery-1c9a3.web.app_.png";

const Project0 = () => {
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
                                <ul style={{ listStyle: "none", textAlign: "left" }}>
                                    <li>

                                        • This is a team project consisting of 3 developers
                                    </li>
                                    <li>•Firebase based authentication system is provided (Google and Email)</li>
                                    <li> •UserRoute and AdminRoute are created</li>
                                    <li>•Users can order and cancel order. Admins can ship or delete order.</li>
                                    <li>
                                        •React, Redux, React Router, Firebase, Node JS, Express JS, MongoDB
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

export default Project0;