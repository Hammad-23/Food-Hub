import React, { useState } from "react";
import "./checkOuts.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Navbar from "../../components/Navbar/navbar";
import { FiUser } from "react-icons/fi";
import Input from "../../components/Input/input";
import Button from "../../components/customButton/button";
import { useHistory } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import Slider from "../../components/Slider";
import Cake from "../../asset/images/cake.JPG";
import CupCake from "../../asset/images/cupcake.jpg";
import Brownie from "../../asset/images/brownie.JPG";
import Percentage from "../../asset/images/percentage.png";
import Visa from "../../asset/images/visacard.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function CheckOuts() {
  let history = useHistory();
  const [num, setNum] = useState(0);
  const increteament = () => {
    setNum((num) => num + 1);
  };
  const decreament = () => {
    setNum((num) => num + -1);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Row id="check-out-Card-Main-Row">
          <Col xs={12} sm={12} md={12} lg={7} xl={7}>
            <Row className="main-Row">
              <Col
                className="login-Signin-Card-Main-Div"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <Col
                  className="login-SiGnUp-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  xl={8}
                >
                  <Col
                    className="login-SignUp-Text-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <FiUser className="login-Icon" size={25} />
                    <h4 className="login-Signup-Text">Log in sign up</h4>
                  </Col>
                  <Col
                    className="email-Input-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={10}
                    xl={10}
                  >
                    <Input
                      className="email-Input"
                      placeholder="Email/ Mobile Number"
                    />
                    <Col
                      className="btn-Dont-Have-Text-Col"
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Button className="send-OPT-Button" Text="Send OPT" />
                      <p className="dont-Have-Acc-Text">
                        Don't have an account?
                        <span
                          id="sign-Up-Text"
                          onClick={() => {
                            history.push("/signup");
                          }}
                        >
                          Sign Up
                        </span>
                      </p>
                    </Col>
                  </Col>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <Button
                    icon={
                      <FaFacebookF size={25} color={"#4f73bb"} id="face-Icon" />
                    }
                    id="facebook-Button"
                    Text={"FaceBook"}
                  />
                  <Col
                    xs={11}
                    sm={12}
                    md={6}
                    lg={12}
                    xl={12}
                    id="google-Icon-Col"
                  >
                    <div className="goodle-Icon">
                      <FcGoogle size={22} />
                    </div>
                    <Button
                      className="google-Button"
                      Text={"Sign in with Google"}
                    />
                  </Col>
                  <Button
                    className="contiune-As-Button"
                    Text={"Continue as Guest "}
                  />
                </Col>
              </Col>
              <Col
                className="location-Icon-Dellvery-Text-Col"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <MdPayment size={25} color={"#867684"} />
                <span className="dellvery-Address-Text">Payment Method</span>
              </Col>
              <Col
                className="location-Icon-Dellvery-Text-Col"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <HiOutlineLocationMarker size={25} color={"#867684"} />
                <span className="dellvery-Address-Text">Dellvery Address</span>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={Visa} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Row className="delliveryMainRow">
              <Col
                className="deliver-Card-Main-Col"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <Col
                  className="deliver-Text-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <h5 id="deliver-Text">Dellvery Time</h5>
                </Col>
                <Col
                  id="scheduled-Your-Order-Text-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <h5 className="scheduled-Text">Scheduled for Later</h5>
                  <span id="your-Order-Text">
                    Your order will be deliverd within{" "}
                    <span id="time-Text">45 minutes</span>
                  </span>
                </Col>
              </Col>
              <Col
                id="you-Mlight-Card-Main-Col"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <Col
                  style={{ marginTop: "10px" }}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <p className="dellvery-Address-Text">You mlght aslo like</p>
                </Col>
                <Col
                  className="check-Input-Icre-Decre-Main-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Input type="checkbox" />
                    <span className="french-Onion-Text">
                      french onion chicken soup, lemon pasta saled and
                      pericrouton munchies
                    </span>
                  </Col>
                  <Col
                    className="incre-Decre-Main-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={4}
                    xl={4}
                  >
                    <Col
                      className="incre-Decre-Col"
                      xs={8}
                      sm={8}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <AiOutlinePlus
                        className="plus-Icon"
                        onClick={increteament}
                        size={15}
                        color={"#f04602"}
                      />
                      <p className="icre-Decre-Num-Text">{num}</p>
                      <AiOutlineMinus
                        className="plus-Icon"
                        onClick={decreament}
                        size={15}
                        color={"#f04602"}
                      />
                    </Col>
                  </Col>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Col
                    className="safety-Text-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <p className="safety-Text">
                      Safety Assured meals and contactless dellivery
                    </p>
                  </Col>
                </Col>
                <Col
                  className="item-Price-Main-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Col
                    className="item-Price-Tex-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <p>item price</p>
                    <p>175.00</p>
                  </Col>
                  <Col
                    className="item-Price-Tex-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <p className="packing-Text">Packaging Fee</p>
                    <p className="packing-Text">+25.00</p>
                  </Col>
                </Col>
                <Col
                  className="lineCol"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                ></Col>
                <Col
                  className="item-Price-Main-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Col
                    className="item-Price-Tex-Col"
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <p className="payable-Text">Payable</p>
                    <p className="payable-Text">200.00</p>
                  </Col>
                </Col>
              </Col>
              <Col
                className="need-Help-Number-Main-Col"
                xs={11}
                sm={11}
                md={12}
                lg={12}
                xl={12}
              >
                <Col
                  className="need-Help-Text-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <p className="need-Help-Text">Need Help?</p>
                </Col>
                <Col
                  className="need-Help-Text-Col"
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <p className="numberText">
                    080-4042-4242
                    <label className="lines-Open-Text">
                      Lines open from 9:00 AM to 12:00 AM
                    </label>
                  </p>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
