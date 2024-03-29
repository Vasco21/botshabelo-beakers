import React, { useState } from "react";
import "./Contact.css";

const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="number"
                    placeholder="+27 000 000 00"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>Subject</span>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>Your Company</span>
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="primary-btn btn">Submit Now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>message.</p>
            <br />

            <h3>Message us</h3>
            <span>info@exampal.com</span>
            <br />
            <span>+2781 319 0025</span>
            <br />

            <div className="icon">
              <h3>Follow Us</h3>

              <div className="flex_spaces">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } =
            cureentValue;
          return (
            <>
              <div className="sign-box">
                <h1>Send Successfully</h1>
                <h3>
                  First Name : <p>{fname}</p>
                </h3>
                <h3>
                  Last Name : <p>{lname}</p>
                </h3>
                <h3>
                  Contact Number : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  Subject : <p>{subject}</p>
                </h3>
                <h3>
                  Company Name: <p>{company}</p>
                </h3>
                <h3>
                  Your Message : <p>{message}</p>
                </h3>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ContactFrom;
