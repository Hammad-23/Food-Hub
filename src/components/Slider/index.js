import React from "react";
import "./index.css";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import BbqImage from "../../asset/images/picOne.PNG";
import PizzaImage from "../../asset/images/picTwo.PNG";
import RollImage from "../../asset/images/picThree.PNG";
export default function Sliders() {
  return (
    <>
      <Row className="slider-Row">
        <Col xs={12} sm={12} md={12} lg={11} xl={11}>
          <Container>
            <Carousel fade className="slider-Carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={BbqImage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={PizzaImage}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={RollImage}
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
