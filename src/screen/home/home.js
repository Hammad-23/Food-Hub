import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Container } from "react-bootstrap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Navbar from "../../components/Navbar/navbar";
import Silder from "../../components/Slider/index";
import Card from "../../components/cart/cart";
import Burger from "../../asset/images/burger.jpg";
import Button from "../../components/customButton/button";
import Filter from "../../asset/images/filter.png";
import Customnavbar from "../../components/CustomNavbar/customnavbar";
import { getUser } from "../../config/firebase";

export default function Home() {
  const cardData = [
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
    {
      source: Burger,
      text: "veg . continental",
      price: "1500",
      title: "cheez burger",
    },
  ];
  const [user, setUser] = useState("");
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("UserID");

    if (id) {
      getUser(id);
      const userDetails = localStorage.getItem("UserInfo");
      setUser(userDetails);
      console.log("login user name : ",userDetails)
    } else {
      isUser(false);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Customnavbar />
      <Silder />
      <Container>
        <Row id="categorie-Main-Row">
          <Col
            className="categorie-Text-Col"
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
          >
            <p className="categorie-Text"> CATEGORIES</p>
          </Col>
          <Col className="filters-Col" xs={12} sm={12} md={12} lg={4} xl={4}>
            <Button className="veg-Button" Text={"VEG"} />
            <Button
              className="price-Text"
              Text={"PRICE"}
              icon={<HiOutlineMenuAlt2 color="#ee825c" />}
            />
            <img className="filter-Image" src={Filter} />
            <p className="filters-Text">FILTERS</p>
          </Col>
          <Col
            className="categorie-Line-Col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          ></Col>
          <Col
            className="all-Day-Break-Text-Col"
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
          >
            <p className="all-Day-BreakFast-Text">All day breakfast</p>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col xs={12} sm={12} md={12} lg={2} xl={2}>
            <p className="categorie-List-Text">All day breakfast</p>
            <p className="categorie-List-Text">biryani</p>
            <p className="categorie-List-Text">Sandwiches</p>
            <p className="categorie-List-Text">Buger & wraps</p>
            <p className="categorie-List-Text">fresh desserts</p>
            <p className="categorie-List-Text">rice bowl</p>
            <p className="categorie-List-Text">pastas & steak</p>
            <p className="categorie-List-Text">platters</p>
            <p className="categorie-List-Text">fit N fab</p>
            <p className="categorie-List-Text">keto special</p>
            <p className="categorie-List-Text">accompaniments</p>
          </Col>

          <Col>
            <Row>
              {cardData.map((item) => {
                return (
                  <Card
                    source={item.source}
                    text={item.text}
                    title={item.title}
                    price={item.price}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
