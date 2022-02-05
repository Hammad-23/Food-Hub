import React, { useState } from "react";
import "./productDetails.css";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../asset/images/burger.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../customButton/button";
import Leg from "../../asset/images/chickenLeg.png";
import RollParatha from "../../asset/images/rollParatha.jpg";
import { useLocation } from "react-router-dom";
import Customnavbar from "../../components/CustomNavbar/customnavbar";

export default function Products() {
  const [productItem, setProductItem] = useState([
    {
      image: Burger,
      itemName: "cheez burger",
      continentalName: "veg . continental",
      price: "$350",
    },
    {
      image: Burger,
      itemName: "cheez burger",
      continentalName: "veg . continental",
      price: "$350",
    },
    {
      image: Burger,
      itemName: "cheez burger",
      continentalName: "veg . continental",
      price: "$350",
    },
    {
      image: Burger,
      itemName: "cheez burger",
      continentalName: "veg . continental",
      price: "$350",
    },
  ]);
  let location = useLocation();
  const selectAllProducts = {
    itemImage: location.state.Burger,
    itemName: location.state.productName,
    itemPrice: location.state.productPrice,
    img: location.state.imgUrl,
  };
  return (
    <>
      <Customnavbar />
      <Container>
        <Row className="productBackground">
          <Col xl={6} lg={7} md={7} sm={12} xs={12}>
            <div className="productBox">
              <Row>
                <Col>
                  <div className="productImage">
                    <img className="img-fluid" src={location.state.imgUrl} />
                  </div>
                </Col>
              </Row>

              <div className="productLinks">
                <div className="links">
                  <a href="https://www.facebook.com/">
                    <FaFacebookSquare className="socialLinks" color="#15338c" />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitterSquare className="socialLinks" color="#11a8d6" />
                  </a>
                  <a href="https://www.google.com/">
                    <FaGooglePlusSquare
                      className="socialLinks"
                      color="#9e260e"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={5} md={5} sm={12} xs={12}>
            <div className="productText">
              <Row>
                <Col>
                  <div className="productHeading">
                    <p>{location.state.productName}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="productContinental">
                    <a href="##">continental</a>
                    <span>. Available from 8:30AM</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="productPrice">
                    <p>{location.state.productPrice}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button Text={"pre-order"} className="preOrderBtn" />
                  <p className="productbtnCustomise">Customisable</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="detailsAboutProduct">
                    <p>DETAILS ABOUT THIS MEAL</p>
                    <div className="detailsAboutText">
                      <span>
                        Scrambled eggs, sausages tossed in a special seasoning
                        are served alongside a hash brown. This blend isn't just
                        perfect for starting your day, but also great to get you
                        through your busy schedule. Order now.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="productFoodImage">
                    <img src={Leg} />
                    <p>non veg</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="productIngredients">
                    <p>ingredients</p>
                    <div className="productIngredientsText">
                      <span>
                        Yellow Cheddar, Chicken Sausage, Panko Crumbs, Parsley,
                        Black Pepper, Bell Peppers, Potato, Butter, Eggs.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="productNutritionList">
                    <p>NUTRITION</p>
                    <Row>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>436</h3>
                          <small>ENERGY (KCAL)</small>
                        </div>
                      </Col>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>22</h3>
                          <small>fat (g)</small>
                        </div>
                      </Col>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>8</h3>
                          <small>carbs (g)</small>
                        </div>
                      </Col>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>2</h3>
                          <small>fiber (g)</small>
                        </div>
                      </Col>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>19</h3>
                          <small>peotein (g)</small>
                        </div>
                      </Col>
                      <Col xl={3} lg={4} md={4} sm={3} xs={4}>
                        <div className="productNutritionItem">
                          <h3>2</h3>
                          <small>sugar (g)</small>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="productCardsBox">
              <div className="cardsTextBox">
                <div className="lineFisrt"></div>
                <div className="cardsText">
                  <p>YOU MIGHT ALSO LIKE</p>
                </div>
                <div className="lineSecond"></div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          {productItem.map((item) => {
            return (
              <Col xl={3} lg={3} md={4} sm={6} xs={12} className="col1">
                <div className="ProductsCardsContainer">
                  <div className="img-fluid cardsImage">
                    {" "}
                    <img src={Burger} />
                  </div>
                  <div className="cardsItemName">
                    <span>Spinach Corn Sandwich + Crumb</span>
                  </div>
                  <div className="cardsItemContinental">
                    <span>veg . continental</span>
                  </div>
                  <Row>
                    <Col style={{ border: "solid none" }}>
                      <div className="cardsItemPrice">
                        <span>₹145</span>
                      </div>
                    </Col>
                    <Col style={{ border: "solid none" }}>
                      <Button Text={"add"} className="cardsItemButton" />
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
