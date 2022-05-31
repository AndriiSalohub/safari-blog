import React from "react";
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { Introduce } from "../../components/Introduce/Introduce";
import { SliderList } from "../../components/SliderList/SliderList";
import { TripInfo } from "../../components/TripInfo/TripInfo";
import { VideoPopup } from "../../components/VideoPopup/VideoPopup";
import { UpperFooter } from "../../components/UpperFooter/UpperFooter";
export const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-page-img-block page-img-block">
                    <img
                        className="home-page-img page-img"
                        src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/slider-bg-4.jpg"
                        alt=""
                    />
                    <div className="offer-page-img-title-block page-img-title-block">
                        <img
                            className="offer-page-img-title page-img-title"
                            src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/slider-logo-big.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <TripInfo /> <Introduce /> <SliderList /> <QuoteSlider />{" "}
            <VideoPopup /> <UpperFooter />
        </>
    );
};
