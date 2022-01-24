import React, { useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Silder from "../../components/Slider/index";
import Card from "../../components/cart/cart";
import Burger from "../../asset/images/burger.jpg";
export default function Home() {
  return (
    <>
      <Navbar />
      <Silder />
      <Card source={Burger} title="Burger" price="1500" />
    </>
  );
}
