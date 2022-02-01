import React, { useState } from "react";
import "./customnavbar.css";
import { Row, Col, Container } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import Drawer from '../../components/drawer/drawer';
// import { Navbar } from "../Navbar/navbar"
export default function Customnavbar(props) {
  var history = useHistory();
  // const [user, setUser] = useState(false);
  // console.log("--->>>>", user);
  return (
    <>
      <Row className="icons-Main-Row">
        <Col className="icon-Main-Col" xs={12} sm={12} md={10} lg={12} xl={12}>
          <div className="icons-Main-Div">
            <div
              onClick={() => {
                history.push("/searchbar");
              }}
              className="search-Input-Main-Div"
            >
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
              <AiOutlineUserAdd
                onClick={() => {
                  history.push("/login");
                }}
                size={25}
                />
            </div>
            <Drawer/>
          </div>
        </Col>
      </Row>
    </>
  );
}
