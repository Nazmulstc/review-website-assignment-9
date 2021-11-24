import React from "react";
import banner from "../../images/transform-1x-v3.jpg";
import "./TransformSkill.css";

const TransformSkill = () => {
  return (
    <div className="banner-container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <img className="w-100 m-2" src={banner} alt="" />
        </div>
        <div className="col-md-6 p-5">
          <h1 className="my-5">Transform your life through education</h1>
          <p>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <button className="btn btn-dark m-auto">Find out how</button>
        </div>
      </div>
    </div>
  );
};

export default TransformSkill;
