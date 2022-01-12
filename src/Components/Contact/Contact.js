import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_j7m3uup",
        "template_4emwy9c",
        e.target,
        "user_PRYVgha56VM6gPLd2Eh7a"
      )
      .then((res) => {
        console.log(res);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };
  return (
    <div className="contact pt-3" id="contact">
      <h1 className=" pt-5">Contact Me</h1>
      <div className="container">
        <div className="row gx-3 gy-2">
          <div
            className="col-md-6 border"
            style={{
              backgroundImage: `url('https://email.uplers.com/blog/wp-content/uploads/2016/06/Background-Images-in-Emails.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <form action="" className="mt-5" onSubmit={sendEmail}>
              <br />
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                ref={nameRef}
              />
              <br />
              <input
                type="email"
                name="user_email"
                id=""
                className="form-control"
                placeholder="email"
                ref={emailRef}
              />
              <br />

              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="your message"
                ref={messageRef}
              ></textarea>
              <br />

              <input
                type="submit"
                value="Send"
                className="form-control btn btn-primary"
              />
              <br />
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.pinimg.com/originals/7e/69/ec/7e69eca344ca1465da94d698ded08e8e.gif"
              alt=""
              className="d-block w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
