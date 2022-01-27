import React from "react";
import "./navbar.css";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  var history = useHistory();
  return (
    <>
      <Row className="main-row">
        <Col className="hub-Food-Col" xs={5} sm={5} md={12} lg={2} xl={2}>
          <p className="hub-Food-Heading">Hub Food</p>
        </Col>
        <Col className="deliver-Col" xs={7} sm={7} md={12} lg={6} xl={6}>
          <p className="deliver-Text">Deliver to:</p>
          <p className="noth-Naz-Text"> North Nazmabad</p>
        </Col>
        <Col className="download-App-Col" xs={10} sm={10} md={12} lg={3} xl={3}>
          <p className="download-App-Text">Download App</p>
        </Col>
      </Row>
    </>
  );
}
