import React from "react";

const About = () => {
  return (
    <div>
      <img src="./bg_2.jpg" width={"100%"} height={"600px"} />
      <h1 style={{ color: "white", marginTop: "-130px", marginLeft: "120px" }}>
        Home <span style={{ color: "red" }}> - </span>About
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1 style={{ color: "black" }}>About page</h1>
      </center>
      <br />
      <div className="container text-dark">
        <div className="row">
          <div className="col-md-4 p-30px">
            <h2>Welcome to AVO A Personal Porfolio Web Agency</h2>
            <p style={{ textAlign: "justify" }}>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
          </div>
          <div className="col-md-4 p-10">
            <img src="./about.jpg" alt="" width={"90%"} height={"300px"} />
          </div>
          <div className="col-md-4 p-30px">
            <p style={{ textAlign: "start" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <button className="btn btn-danger">view all projects</button>
          </div>
        </div>
        <br />

        <div className="row m-auto">
          <div className="col-md-1">
            <h1 style={{ fontSize: "50px", color: "red" }}>01</h1>
            <hr />
          </div>
          <div className="col-md-3">
            <h4>Search Engine Optimization</h4>
            <p>Far far away, behind the word mountains</p>
          </div>
          <div className="col-md-1">
            <h1 style={{ fontSize: "50px", color: "red" }}>02</h1>
            <hr />
          </div>
          <div className="col-md-3">
            <h4>Search Engine Optimization</h4>
            <p>Far far away, behind the word mountains</p>
          </div>
          <div className="col-md-1">
            <h1 style={{ fontSize: "50px", color: "red" }}>03</h1>
            <hr />
          </div>
          <div className="col-md-3">
            <h4>Search Engine Optimization</h4>
            <p>Far far away, behind the word mountains</p>
          </div>
        </div>
        <div className="row m-auto text-white" style={{ width: "90%" }}>
          <img src="./bg_1.jpg" height={"350px"} />
          <div
            className="col-md-5"
            style={{ marginTop: "-300px", paddingLeft: "40px" }}
          >
            <h6 style={{ color: "red" }}>Get Started</h6>
            <h3>Fill in the brief and get the project estimate</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="btn btn-danger">Get Started</button>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row ">
          <h1 style={{ textAlign: "center" }}>EXPERT TEAM</h1>
          <br />
          <div className="col-md-3">
            <img src="team-1.jpg" width={"100%"} />
            <h4>John Wilson</h4>
            <h6 style={{ color: "red" }}>Web Designer</h6>
            <br />
          </div>
          <div className="col-md-3">
            <img src="team-2.jpg" width={"100%"} />
            <h4>Robert Wills</h4>
            <h6 style={{ color: "red" }}>Web Developer</h6>
            <br />
          </div>
          <div className="col-md-3">
            <img src="team-3.jpg" width={"100%"} />
            <h4>Mike Smith</h4>
            <h6 style={{ color: "red" }}>Graphic Designer</h6>
            <br />
          </div>
          <div className="col-md-3">
            <img src="team-4.jpg" width={"100%"} />
            <h4>Adrian Henderson</h4>
            <h6 style={{ color: "red" }}>System Analyst</h6>
            <br />
          </div>

          <div className="col-md-3">
            <img src="team-5.jpg" width={"100%"} />
            <h4>John Wilson</h4>
            <h6 style={{ color: "red" }}>Web Programmer</h6>
          </div>
          <div className="col-md-3">
            <img src="team-6.jpg" width={"100%"} />
            <h4>Robert Wills</h4>
            <h6 style={{ color: "red" }}>Web Designer</h6>
          </div>
          <div className="col-md-3">
            <img src="team-7.jpg" width={"100%"} />
            <h4>Mike Smith</h4>
            <h6 style={{ color: "red" }}>Graphic Designer</h6>
          </div>
          <div className="col-md-3">
            <img src="team-8.jpg" width={"100%"} />
            <h4>Adrian Henderson</h4>
            <h6 style={{ color: "red" }}>SEO</h6>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
