import React from "react";
import "./index.css";
import { Row, Col, Carousel, Container } from "react-bootstrap";
export default function Sliders(props) {
  return (
    <>
      <Row className="slider-Row">
        <Col xs={12} sm={12} md={12} lg={11} xl={11}>
          <Container>
            <Carousel fade className="slider-Carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={props.src}
                  style={{ width: props.width, height: props.height }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: props.width, height: props.height }}
                  className="d-block w-100 slider-Image"
                  src={props.srcTwo}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: props.width, height: props.height }}
                  className="d-block w-100 slider-Image"
                  src={props.srcThree}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </Col>
      </Row>
    </>
  );
}
