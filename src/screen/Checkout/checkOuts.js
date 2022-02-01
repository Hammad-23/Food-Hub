import React from "react";
import "./checkOuts.css";
import { Container ,Row, Col, Carousel } from "react-bootstrap";
import Navbar from "../../components/Navbar/navbar";
import { FiUser } from "react-icons/fi"
import Input from "../../components/Input/input";
import Button from "../../components/customButton/button"
import { useHistory } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdPayment } from "react-icons/md"
import Slider from "../../components/Slider"
import Cake from "../../asset/images/cake.JPG"
import CupCake from "../../asset/images/cupcake.jpg"
import Brownie from "../../asset/images/brownie.JPG"

export default function CheckOuts() {
    let history = useHistory()
  return (
    <>
      {/* <Navbar /> */}
      <Container>

      <Row id="check-out-Card-Main-Row">
          <Col className="login-Signin-Card-Main-Div" xm={12} sm={12} md={12} lg={7} xl={7}>
             <Col xs={12} sm={12} md={12} lg={8} xl={8}>
               <Col className="login-SignUp-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
               <FiUser size={25}/>
               <h4 className="login-Signup-Text">Log in sign up</h4>
               </Col>
               <Col className="email-Input-Col" xs={12} sm={12} md={12} lg={10} xl={10} >
               <Input className="email-Input" placeholder="Email/ Mobile Number" />
               <Col className="btn-Dont-Have-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
               <Button className="send-OPT-Button" Text="Send OPT" />
               <p className="dont-Have-Acc-Text">
               Don't have an account?
               <span id="sign-Up-Text" onClick={()=>{history.push("/signup")}}>Sign Up</span>
               </p>
               </Col>
               </Col> 
             </Col> 
             <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                 <Button icon={<FaFacebookF size={25} color={"#4f73bb"} id="face-Icon" />} id="facebook-Button" Text={"FaceBook"} />
                 <Col xs={7} sm={12} md={6} lg={12} xl={12} id="google-Icon-Col">
                <div className="goodle-Icon">
                  <FcGoogle size={22} />
                </div>
                <Button
                  className="google-Button"
                  Text={"Sign in with Google"}
                />
              </Col>
              <Button className="contiune-As-Button" Text={"Continue as Guest "} />
              </Col>
          </Col>
          <Col className="deliver-Card-Main-Col" xs={12} sm={12} md={12} lg={4} xl={4}>
              <Col className="deliver-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
               <h5 id="deliver-Text">Dellvery Time</h5>
              </Col>
              <Col id="scheduled-Your-Order-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
              <h5 className="scheduled-Text">Scheduled for Later</h5>
              <span id="your-Order-Text">Your order will be deliverd within <span id="time-Text">45 minutes</span></span>
              </Col>
          </Col>
          <Col  xs={12} sm={12} md={12} lg={7} xl={7}>
          <Col className="location-Icon-Dellvery-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <MdPayment size={25} color={"#867684"} />
          <span className="dellvery-Address-Text">Payment Method</span>
          </Col>
          <Col className="location-Icon-Dellvery-Text-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <HiOutlineLocationMarker size={25} color={"#867684"} />
          <span className="dellvery-Address-Text">Dellvery Address</span>
          </Col>
          </Col>
          <Col id="you-Mlight-Card-Main-Col" style={{border:"solid red"}} xs={12} sm={12} md={12} lg={4} xl={4}>
          <p className="dellvery-Address-Text">You mlght aslo like</p>
          {/* <Col style={{border:"solid red"}} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Slider height={"100px"} width={"5%"} src={Cake} srcTwo={CupCake} srcThree={Brownie} />
          </Col> */}
          <Col style={{border:"solid green"}} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
           <Input type="checkbox" />
           <span className="french-Onion-Text"> french onion chicken soup, lemon pasta saled and peri peri crouton munchies</span>
          </Col>
          <Col xs={12} md={12} lg={4} xl={4}>
          <p>ammar</p>
          </Col>
          </Col>
          </Col>
        
      </Row>
      </Container>
    </>
  );
}
