import React, { useState } from "react";
import "./signUp.css";
import { useHistory } from "react-router-dom";
import Button from "../../components/customButton/button";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../../components/Input/input";
import { Row, Col, Container } from "react-bootstrap";
import { registerUser } from "../../config/firebase";

export default function SignUp() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
  });
  let history = useHistory();
  const onhandleChange = (name, val) => {
    setFields({ ...fields, [name]: val });
  };
  const signIn = () => {
    if (
      fields.firstName === "" ||
      fields.email === "" ||
      fields.password === ""
    ) {
      alert("Fields Required");
    } else {
      registerUser(fields, history);
    }

    console.log("fields obj--> ", fields);
  };
  return (
    <>
      <Container>
        <Row className="sign-Up-Main-Col">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="sign-Up-Card-Div"
          >
            <Col
              xs={11}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="fac-Google-Button-Main-Col"
            >
              <Col xs={6} sm={12} md={6} lg={6} xl={6}>
                <Button
                  className="facebook-Button"
                  icon={<FaFacebookF size={22} color={"white"} />}
                />
              </Col>
              <Col
                xs={7}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="google-Icon-Col"
              >
                <div className="goodle-Icon">
                  <FcGoogle size={22} />
                </div>
                <Button
                  className="google-Button"
                  Text={"Sign in with Google"}
                />
              </Col>
            </Col>
            <Col
              className="sign-Up-Line-Main-Div"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Col
                className="sign-Up-Line-Col"
                xs={4}
                sm={4}
                md={12}
                lg={3}
                xl={3}
              ></Col>
              <Col
                xs={4}
                sm={4}
                md={12}
                lg={4}
                xl={4}
                className="or-Email-Text-Col"
              >
                <p className="Or-Email-Text">OR USE EMAIL</p>
              </Col>
              <Col
                className="sign-Up-Line-Col"
                xs={4}
                sm={4}
                md={12}
                lg={3}
                xl={3}
              ></Col>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Input
                className="sign-Up-Inputs"
                type="text"
                placeholder="First Name :"
                onChange={(e) => onhandleChange("firstName", e.target.value)}
              />
              <Input
                className="sign-Up-Inputs"
                type="text"
                placeholder="Last Name :"
                onChange={(e) => onhandleChange("lastName", e.target.value)}
              />
              <Input
                className="sign-Up-Inputs"
                type="number"
                placeholder="11 digit Mobile Number :"
                onChange={(e) => onhandleChange("number", e.target.value)}
              />
              <Input
                className="sign-Up-Inputs"
                type="email"
                placeholder="Email :"
                onChange={(e) => onhandleChange("email", e.target.value)}
              />
              <Input
                className="sign-Up-Inputs"
                type="password"
                placeholder="Password :"
                onChange={(e) => onhandleChange("password", e.target.value)}
              />
            </Col>
            <Col
              className="sign-In-Button-Col"
              xm={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Button
                onClick={() => signIn()}
                className="sign-In-Button"
                Text={"Sign In"}
              />
            </Col>
            <Col
              className="sign-In-Line"
              xm={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            ></Col>
            <Col
              style={{ textAlign: "left" }}
              xm={12}
              sm={12}
              md={12}
              lg={11}
              xl={11}
            >
              <p className="already-Have-Text">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    history.push("/login");
                  }}
                  className="log-In-Text"
                >
                  Log in
                </span>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
