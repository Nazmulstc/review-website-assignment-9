import React from "react";
import img from "../../images/Frame.png";
import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 p-5">
          <h1 className="my-5 text-primary">Online Courses</h1>
          <p>
            Take courses from the world's best instructors and universities.
            Courses include recorded auto-graded and peer-reviewed assignments,
            video lectures, and community discussion forums. When you complete a
            course, you’ll be eligible to receive a shareable electronic Course
            Certificate for a small fee.
          </p>
          <h2 className="my-5 text-warning">Creativity & Services</h2>
          <button className="btn btn-success m-auto my-btn">
            <NavLink to="About">About us</NavLink>
          </button>
        </div>
        <div className="col-md-6">
          <img className="w-75" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
