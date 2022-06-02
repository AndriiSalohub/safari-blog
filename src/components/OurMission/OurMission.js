import React from "react";
import "./OurMission.scss";
import { ourMissionArray } from "./ourMissionArray";

export const OurMission = () => {
    return (
        <>
            <div className="our-mission">
                {ourMissionArray.map(({ id, title, description, img }) => (
                    <div className="our-mission-item">
                        <img
                            src={img}
                            alt=""
                            className="our-mission-item-img"
                        />
                        <div className="our-mission-item-information">
                            <h3 className="our-mission-item-information-title">
                                {" "}
                                {title}{" "}
                            </h3>
                            <p className="our-mission-item-information-description">
                                {" "}
                                {description}{" "}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
