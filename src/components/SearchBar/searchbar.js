import React, { useState } from "react";
import "./searchbar.css";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import Navbar from "../Navbar/navbar";
import Input from "../Input/input";
import Searchbox from "../SearchBox/searchbox";

export default function Searchbar() {
  let history = useHistory();
  const cardData = [
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
    {
      Text: "797 cal I Calorie",
    },
    {
      Text: "520 cal I Low Calorie",
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <Row id="search-Mein-Row">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            id="back-To-Menu-Main-Col"
          >
            <Col id="bac-To-Menu-Col" xs={5} sm={5} md={11} lg={2} xl={2}>
              <p
                onClick={() => {
                  history.push("/");
                }}
                className="back-To-Menu-Text"
              >
                Back to Menu
              </p>
            </Col>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            id="search-Icon-Input-Main-Col"
          >
            <Col id="search-Input-COL" xs={11} sm={11} md={11} lg={11} xl={11}>
              <GoSearch id="search-ICon" color="#5e5e5e" size={28} />
              <Input id="searchInput" placeholder="Search" />
              <p id="clear-Text">Clear</p>
            </Col>
          </Col>
          <Col
            id="Top-Categorie-Lin-Main-Col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Col
              id="top-Categories-Col"
              xs={11}
              sm={11}
              md={12}
              lg={11}
              xl={11}
            >
              <p id="top-Categories-Text">TOP CATEGORIES </p>
              <Col
                id="To-Categorie-Line-Col"
                xs={6}
                sm={6}
                md={8}
                lg={10}
                xl={10}
              ></Col>
            </Col>
          </Col>
        </Col>

        <Col>
          <Row>
            {cardData.map((item) => {
              return (
                <>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Searchbox Text={item.Text} />
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}
