import React from "react";
import "./signUp.css";
import { useHistory } from "react-router-dom";
import Button from "../../components/customButton/button";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../../components/Input/input";
import { Row, Col, Container } from "react-bootstrap";
export default function SignUp() {
  let history = useHistory();
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
              />
              <Input
                className="sign-Up-Inputs"
                type="text"
                placeholder="Last Name :"
              />
              <Input
                className="sign-Up-Inputs"
                type="number"
                placeholder="11 digit Mobile Number :"
              />
              <Input
                className="sign-Up-Inputs"
                type="email"
                placeholder="Email :"
              />
              <Input
                className="sign-Up-Inputs"
                type="password"
                placeholder="Password :"
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
              <Button className="sign-In-Button" Text={"Sign In"} />
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
