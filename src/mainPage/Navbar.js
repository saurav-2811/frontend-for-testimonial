import logo from "../asset/img/logo.svg";
import { Link } from "react-router-dom";
import LineIcon from "react-lineicons";
import style from '../asset/css/page.module.css'
// import {Scroll} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-transparent navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mx-5 " to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarTogglerDemo01">
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 ">
              <Link className="nav-link active " aria-current="page" to="/">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item mx-3 ">
              <a className="nav-link" href="#service">
                <b>Services</b>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link " href="#pricing">
                <b>Pricing</b>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link " href="#testimonial">
                <b>Testimonials</b>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link " href="#contact">
                <b> Contact</b>
              </a>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link btn btn-block btn-primary text-light"
                to="/dashboard"
              >
                <b>Dashboard</b>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link disabled" to="/dashboard">
                <h4 style={{ color: "grey" }}>
                  <b>Follow Us</b>
                </h4>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className={`${style.hoverforAll} nav-link`} to="/">
                <h3 style={{ color: "grey" }}>
                  <LineIcon name="facebook-filled" />
                </h3>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                <h3 style={{ color: "grey" }}>
                  <LineIcon name="twitter-original" />
                </h3>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                <h3 style={{ color: "grey" }}>
                  <LineIcon name="instagram-original" />
                </h3>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="/">
                <h3 style={{ color: "grey" }}>
               
                  <LineIcon name="linkedin-original" />
                </h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
