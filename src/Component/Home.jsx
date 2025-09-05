import React from "react";
import About from "./About";
// import About from "./About";

const Home = () => {
  return (
    <div>
      <img src="./bg_1.jpg" width={"100%"} height={"600px"} />
      <div className="container">
        <div className="row" style={{marginTop: "-400px"}}>
          <div className="col-md-6">
            <h1
              style={{
                color: "white",
                fontWeight: "bolder",
              }}
            >
              WE CREATE <br /> MODERN & <br /> MINIMAL WEBSITE
            </h1>
            <br />
            <p style={{color:"white"}}>
              A small river named duden flows by their place and <br /> supplies
              it with the necessary regelialia
            </p>
            <br/>
            <button className="btn btn-danger">Explore Project</button>
          </div>
          <div className="col-md-6 text-end">
            <h1 style={{color:"white"}}>21 <span style={{color:"red"}}>|</span></h1>
            <p style={{color:"white"}}>Years of <br/> Experienced</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
       <br/>
      <br/>
      <br/>
      <br/>
      

      {/* ******************************************************************************* */}

      <center>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h1><i class="bi bi-bezier"></i></h1>
            <h6>UI/UX Design</h6>
          </div>
          <div className="col-md-3">
            <h1><i class="bi bi-code-slash"></i></h1>
            <h6>Web Development</h6>
          </div>
          <div className="col-md-2">
            <h1><i class="bi bi-terminal-plus"></i></h1>
            <h6>Product Design</h6>
          </div>
          <div className="col-md-3">
            <h1><i class="bi bi-phone"></i></h1>
            <h6>Mobile Apps</h6>
          </div>
          <div className="col-md-2">
            <h1><i class="bi bi-search"></i></h1>
            <h6>SEO</h6>
          </div>
        </div>
      </div>
      </center>
      <br/>
      <br/>
      <br/>


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
      

         {/* ******************************************************************************* */}
    </div>
  );
};

export default Home;
