import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { OfferPage } from "../../pages/OfferPage/OfferPage";
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { Introduce } from "../../components/Introduce/Introduce";
import { SliderList } from "../../components/SliderList/SliderList";
import { TripInfo } from "../../components/TripInfo/TripInfo";
import { VideoPopup } from "../../components/VideoPopup/VideoPopup";
import { UpperFooter } from "../../components/UpperFooter/UpperFooter";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../../components/Footer/Footer";

export const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <HomePage /> <TripInfo /> <Introduce />{" "}
                            <SliderList /> <QuoteSlider /> <VideoPopup />{" "}
                            <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/our-travels"
                    element={
                        <div>
                            {" "}
                            <NavBar />
                            <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/offer"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <OfferPage /> <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <AboutPage /> <VideoPopup />
                            <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/buy-now"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <UpperFooter /> <Footer />
                        </div>
                    }
                />
            </Routes>
        </>
    );
};
