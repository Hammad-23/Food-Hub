import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import "./login.css";
import Button from "../../components/customButton/button";
import Input from "../../components/Input/input";
import { loginUser } from "../../config/firebase";

export default function Login(props) {
  let history = useHistory();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const onhandleChange = (name, val) => {
    setFields({ ...fields, [name]: val });
  };
  const logIn = () => {
    if (fields.email === "" || fields.password === "") {
      alert("Fields Required");
    } else {
      loginUser(fields, history);
    }
  };
  return (
    <>
      <Container>
        <Row className="login-Main-Row">
          <Col
            className="login-Main-Col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <div className="login-Card-Main-Div">
              <div className="button-Main-Div">
                <div className="facebook-Button-Div">
                  <Button
                    className="face-Btn"
                    icon={<FaFacebookF size={22} color={"white"} />}
                  />
                </div>
                <div className="google-icon-Div">
                  <FcGoogle size={22} />
                </div>
                <Button
                  className="login-Google-Button"
                  Text={"Sign in with Google"}
                />
              </div>
              <div className="or-Text-Main-Div">
                <div className="line-Container">
                  <div className="line-Div"></div>
                  <div>
                    <p style={{ paddingTop: "10px" }}>OR</p>
                  </div>
                  <div className="line-Div"></div>
                </div>
              </div>
              <div>
                <Input
                  type="email"
                  className="login-Input"
                  placeholder="Email ID /Mobile Number"
                  onChange={(e) => onhandleChange("email", e.target.value)}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <Input
                  type="password"
                  className="login-Input"
                  placeholder="Password :"
                  onChange={(e) => onhandleChange("password", e.target.value)}
                />
              </div>
              <div className="send-Button">
                <Button
                  onClick={() => logIn()}
                  className="login-Button"
                  Text="Login"
                />
              </div>
              <div className="login-Line-DIV">
                <div className="line"></div>
              </div>
              <div className="dont-Have-Account-Text">
                <p className="dont-Have-Text">
                  Don't have an account?
                  <span
                    onClick={() => {
                      history.push("/signup");
                    }}
                    className="sign-Up-Text"
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
