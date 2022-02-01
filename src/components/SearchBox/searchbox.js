import React from "react";
import "./searchbox.css";
import { Row, Col } from "react-bootstrap";
export default function Searchbox(props) {
  return (
    <>
      <Row className="blur-Image-Row">
        <Col
          className="blur-Image"
          xs={10}
          sm={10}
          md={10}
          lg={9}
          xl={9}
        >
          <p className="blur-Text">{props.Text}</p>
        </Col>
      </Row>
    </>
  );
}
