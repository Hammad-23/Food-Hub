import React from "react";
import "./navbar.css";
import { Row, Col, Container } from "react-bootstrap";
import Silders from "../Slider/index";
import { GoSearch } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiCart } from "react-icons/bi";

export default function Navbar(props) {
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
        <Col className="download-App-Col" xs={12} sm={12} md={12} lg={3} xl={3}>
          <p className="download-App-Text">Download App</p>
        </Col>
      </Row>
      <Row className="icons-Main-Row">
        <Col className="icon-Main-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="icons-Main-Div">
            <div className="search-Input-Main-Div">
              <div className="search-Icon-Div">
                <GoSearch className="Icon" size={22} />
              </div>
              <div className="search-Input-Div">
                <input className="search-Input" placeholder="Search" />
              </div>
            </div>
            <div className="offer-Text-Div">
              <p className="offer-Text">Offers</p>
            </div>
            <div className="user-Icon-Div">
              <AiOutlineUserAdd size={25} />
            </div>
            <div className="cart-Div">
              <BiCart size={25} />
            </div>
          </div>
        </Col>
      </Row>
      <Silders />
    </>
  );
}
