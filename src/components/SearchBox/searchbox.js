import React from "react";
import "./searchbox.css";
import { Row, Col } from "react-bootstrap";
export default function Searchbox(props) {
  return (
    <>
      <Row className="blur-Image-Row">
        <Col className="blur-Image" xs={12} sm={12} md={12} lg={9} xl={9}>
          <p className="blur-Text">{props.Text}</p>
        </Col>
      </Row>
    </>
  );
}
