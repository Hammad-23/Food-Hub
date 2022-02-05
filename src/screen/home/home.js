import React, { useState, useEffect } from "react";
import "./home.css";
import { Row, Col, Container } from "react-bootstrap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Navbar from "../../components/Navbar/navbar";
import Silder from "../../components/Slider/index";
import Button from "../../components/customButton/button";
import Filter from "../../asset/images/filter.png";
import Customnavbar from "../../components/CustomNavbar/customnavbar";
import { getUser } from "../../config/firebase";
// import { getAllproducts } from "../../config/firebase";
import Footer from "../../components/footer/footer";
import Drawer from "../../components/drawer/drawer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/products";
import Card from "../../components/cart/cart";
import Burger from "../../asset/images/burger.jpg";
import RollParatha from "../../asset/images/rollParatha.jpg";
import Cheezburger from "../../asset/images/cheezburger.JPG";
import { useHistory } from "react-router-dom";
import BbqImage from "../../asset/images/picOne.PNG";
import PizzaImage from "../../asset/images/picTwo.PNG";
import RollImage from "../../asset/images/picThree.PNG";
import Products from "../../components/productDetails/productDetails";

export default function Home() {
  const [user, setUser] = useState("");
  const [isUser, setIsUser] = useState(false);
  let history = useHistory();
  const productDetails=(data)=>{
    console.log(data)
    history.push({pathname:"/productdetals", state:data})
  }
  const dispatch = useDispatch();
  const allproduct = useSelector((state) => state.allProductReducer);
  const cardData = [
    // {
    //   // source: Burger,
    //   // text: "veg . continental",
    //   productPrice: "1500",
    //   productName: "cheez burger",
    // },
  ];

  console.log("all products in home--> ", allproduct.product);
  cardData.push(...allproduct.product);
  console.log("card data--> ", cardData);

  useEffect(() => {
    dispatch(getProducts());

    const id = localStorage.getItem("UserID");

    if (id) {
      getUser(id);
      const userDetails = localStorage.getItem("UserInfo");

      setUser(userDetails);

      console.log("login user name : ", userDetails);
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  return (
    <>
      {isUser ? <Navbar setIsUser={setIsUser} userName={user} /> : ""}
      <Customnavbar />
      <Silder src={BbqImage} srcTwo={PizzaImage} srcThree={RollImage} />
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
            <p
              onClick={() => {
                history.push("/checkout");
              }}
              className="filters-Text"
            >
              FILTERS
            </p>
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
            xs={9}
            sm={9}
            md={12}
            lg={8}
            xl={8}
          >
            <p className="all-Day-BreakFast-Text">All day breakfast</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={3} lg={2} xl={2}>
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

          <Col xs={12} sm={12} md={9} lg={2} xl={10}>
            <Row>
              {cardData.map((item) => {
                return (
                  <Col xxl={3} xl={4} lg={4} md={4} sm={6} xs={12} onClick={()=>productDetails(item)}>
                  <Card
                    source={item.imgUrl}
                    text={item.text}
                    title={item.productName}
                    price={item.productPrice}
                  />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
