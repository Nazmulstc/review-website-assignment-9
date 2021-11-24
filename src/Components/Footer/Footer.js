import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left-container text-start">
              <h1>NR Teaching</h1>
              <div className="icons-container d-flex text-center ">
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </div>
              </div>
              <p className="mt-4 ">
                <small>
                  Coursera is the global online learning platform that offers
                  anyone, anywhere access to online courses and degrees from
                  world-class universities and companies.
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu-container">
              <ul>
                <li className="footer-menu">
                  <NavLink to="Home">Home</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="Courses">Courses</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="Pricing">Pricing</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="about">About Us</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="Contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="right-footer-container">
              <h3>Sign up for the newsletter</h3>
              <input
                className="footer-input text-dark px-3"
                type="text"
                placeholder="Enter Your Email"
              />
              <div className="phone d-flex align-items-center mt-4">
                <h5>+8801518350140</h5>
              </div>
              <div className="map d-flex align-items-center">
                <p>20/3 Babor Road, Mohammadpur, Dhaka-1207</p>
              </div>
            </div>
          </div>
        </div>
        <p className="my-3 text-center">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link to="Home">Nazmul islam</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
