
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg m-auto bg-dark"style={{width:"100%", position:"fixed"}}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <h2 style={{color:"white"}}>A<span style={{color:"#ED2939"}}>v</span>o</h2>
          </a>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-bold ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/About" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
