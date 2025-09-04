import React from "react";

const Contact = () => {
  return (
    <div>
      <img src="./bg_2.jpg" width={"100%"} height={"600px"} />
      <h1 style={{ color: "white", marginTop: "-130px", marginLeft: "120px" }}>
        Home <span style={{ color: "red" }}> - </span>Contact
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h5 style={{ color: "red" }}>Contact us</h5>
        <h1>Have a Project?</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </center>
      <br />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 rounded-3">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                {/* Send Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
