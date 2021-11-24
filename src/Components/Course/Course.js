import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { Title, Url } = props.course;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={Url} />
          <Card.Body className="text-center">
            <NavLink className="card-link" to="Courses">
              {Title}
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;
