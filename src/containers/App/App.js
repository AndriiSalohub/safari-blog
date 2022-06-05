import React from "react";

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavBar } from "../../components/NavBar/NavBar";
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { Introduce } from "../../components/Introduce/Introduce";
import { SliderList } from "../../components/SliderList/SliderList";
import { TripInfo } from "../../components/TripInfo/TripInfo";
import { VideoPopup } from "../../components/VideoPopup/VideoPopup";
import { ArticlesList } from "../../components/Articles/ArticlesList";
import { OurMission } from "../../components/OurMission/OurMission";
import { Authours } from "../../components/Authours/Authours";
import { OurAuthoursInformation } from "../../components/OurAuthoursInformation/OurAuthoursInformation";
import { UpperFooter } from "../../components/UpperFooter/UpperFooter";
import { Footer } from "../../components/Footer/Footer";

import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { OfferPage } from "../../pages/OfferPage/OfferPage";
import { ArticlesPage } from "../../pages/ArticlesPage/ArticlesPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

export const App = () => {
    const articlePath = useSelector((state) => state.pathDetect);
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
                            <NavBar /> <ArticlesList />
                            <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/offer"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <OfferPage /> <TripInfo /> <OurMission />{" "}
                            <UpperFooter /> <Footer />
                        </div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <div>
                            {" "}
                            <NavBar /> <AboutPage /> <Authours />{" "}
                            <OurAuthoursInformation /> <QuoteSlider />{" "}
                            <VideoPopup />
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
                    path={`our-travels/${articlePath[1]}`}
                    element={
                        <div>
                            {" "}
                            <NavBar /> <ArticlesPage /> <UpperFooter />{" "}
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </>
    );
};
