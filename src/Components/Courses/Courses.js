import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Courses.css";

const Courses = () => {
  const [skillCourse, setsSkillCourse] = useState([]);
  useEffect(() => {
    fetch("./fullCourses.json")
      .then((res) => res.json())
      .then((data) => setsSkillCourse(data));
  }, []);
  return (
    <div>
      <MenuBar></MenuBar>
      <div class="spacer"></div>
      <div className="container">
        <h1 className="text-center my-5">Start building skills today</h1>
        <h2 className="text-success mb-5">Our Most Popular Courses</h2>
        <Row xs={1} md={4} className="g-4 mb-5 border border-radius-5">
          {skillCourse.map((course) => (
            <Cart course={course} key={course.Id}></Cart>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
