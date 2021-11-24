import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { Title, Owner, Price, Url } = props.course;
  console.log(props);
  return (
    <div>
      <Col>
        <Card className="card-style">
          <Card.Img variant="top" src={Url} />
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>
              <p>{Owner}</p>
              <p>
                <b>Price: ${Price}</b>
              </p>
            </Card.Text>
            <button className="btn btn-warning my-style">
              <Link to="Details">Add to Cart</Link>
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Cart;
