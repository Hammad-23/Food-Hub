import React, { useState } from "react";
import "./navbar.css";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import swal from "sweetalert";
export default function Navbar(props) {
  const [userIcon, setUserIcon] = useState(false);

  var history = useHistory();
  const logout = () => {
    swal({
      title: "Log Out!",
      icon: "success",
      button: "Ok",
    });
    history.push("/login");
  };
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
        <Col className="drop-Down-User-Col" xs={7} sm={7} md={12} lg={2} xl={2}>
          {/* {setUserIcon(true)} */}
          <DropdownButton
            variant="white"
            // menuVariant="dark"
            title={<FaRegUserCircle size={22} />}
          >
            <Dropdown.Item onClick={logout} href="#">
              Logout
            </Dropdown.Item>
          </DropdownButton>
          <p className="user-Name-Text">Ammar Qureshi</p>
        </Col>
        {/* <Col
          className="download-App-Col"
          xs={10}
          sm={10}
          md={12}
          lg={11}
          xl={11}
        >
          <p className="download-App-Text">Download App</p>
        </Col> */}
      </Row>
    </>
  );
}
