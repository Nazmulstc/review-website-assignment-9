import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import TopCourses from "../TopCourses/TopCourses";
import TransformSkill from "../TronsformSkill/TransformSkill";

const Home = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <TopCourses></TopCourses>
      <TransformSkill></TransformSkill>
      <Footer></Footer>
    </div>
  );
};

export default Home;
