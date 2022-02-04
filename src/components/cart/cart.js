import React from "react";
import "./cart.css";
import Button from "../customButton/button";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Cart(props) {
  let history= useHistory();
  return (
    <>
      
        <div className="boxCard">
          <Row>
            <Col>
              <div className="textCard">
                <span>{props.text}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="boxImg">
                <div className="zoomIn">
                  <figure>
                    <img className="img-fluid img" src={props.source}/>
                  </figure>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="titleCard">
                <span>{props.title}</span>
              </div>
            </Col>
          </Row>
          <div className="detailCard">
            <Row>
              <Col>
                <div className="prizeCard">
                  <span>{props.price}</span>
                </div>
              </Col>
              <Col>
                <Button Text={"add"} className="button" />
                <p className="btnCustomise">Customisable</p>
              </Col>
            </Row>
          </div>
        </div>
      
    </>
  );
}
