import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./home.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center glass sticky-top justify-content-md-between py-2">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src="http://res.cloudinary.com/djangotest/image/upload/v1669407960/test1/images/8-bit-pixel-tiger-animals-game-assets-cross-stitch-patterns-vector-illustrations_614713-900_sdcx2m.webp"
            alt=""
            width={"30"}
            className="mx-auto d-block"
          />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="mx-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-light rounded-pill m-auto text-secondary px-5"
                  : "btn rounded-pill px-5" 
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mx-3">
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-light rounded-pill text-secondary px-5"
                  : "btn text-secondary rounded-pill px-5"
              }
            >
              Post
            </NavLink>
          </li>
          <li className="mx-3">
            <a href="#" className="nav-link px-2 link-dark">
              Pricing
            </a>
          </li>
          {/* <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">About</a></li> */}
          {/* <img
            src="http://res.cloudinary.com/djangotest/image/upload/v1669407960/test1/images/8-bit-pixel-tiger-animals-game-assets-cross-stitch-patterns-vector-illustrations_614713-900_sdcx2m.webp"
            alt=""
            width={"30"}
            className="mx-auto d-block"
          /> */}
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
