import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "../Contact/Contact.css";
import Footer from "../Footer/Footer";
import { Col, Row } from "react-bootstrap";
import img from "../../images/about.png";

const About = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div class="spacer"></div>
      <Row className="m-5">
        <Col className="col-md-6 p-5">
          <h1>We share knowledge with the world</h1>
          <p>
            Whether you want to learn or to share what you know, you’ve come to
            the right place. As a global destination for online learning, we
            connect people through knowledge.
          </p>
        </Col>
        <Col className="col-md-6">
          <img src={img} alt="" />
        </Col>
      </Row>
      <div className="container text-center">
        <h1>Changing learning for the better</h1>
        <p>
          Whether you want to learn or to share what you know, you’ve come to
          the right place. As a global destination for online learning, we
          connect people through knowledge.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
