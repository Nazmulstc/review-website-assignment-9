import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";

const TopCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container">
      <h1>Top categories</h1>
      <Row xs={2} md={4} className="g-4">
        {courses.map((course) => (
          <Course course={course} key={course.Id}></Course>
        ))}
      </Row>
    </div>
  );
};

export default TopCourses;
