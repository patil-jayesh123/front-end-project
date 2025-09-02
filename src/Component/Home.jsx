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
      {/* <About/> */}
    </div>
  );
};

export default Home;
