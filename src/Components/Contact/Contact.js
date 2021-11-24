import React from "react";
import { Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-style">
      <MenuBar></MenuBar>
      <div class="spacer"></div>
      <div className="container">
        <Form>
          <Form.Group className="my-5" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
        </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
