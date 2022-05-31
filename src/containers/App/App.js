import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { OfferPage } from "../../pages/OfferPage/OfferPage";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <NavBar /> <HomePage />
            </div>
          }
        />
        <Route
          path="/our-travels"
          element={
            <div>
              {" "}
              <NavBar />
            </div>
          }
        />
        <Route
          path="/offer"
          element={
            <div>
              {" "}
              <NavBar /> <OfferPage />{" "}
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              {" "}
              <NavBar /> <AboutPage />{" "}
            </div>
          }
        />
        <Route path="/contact" element={<NavBar />} />
        <Route path="/buy-now" element={<NavBar />} />
      </Routes>
    </>
  );
};
