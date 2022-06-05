import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroduceBlock } from "../IntroduceBlock/IntroduceBlock";
import "./Authours.scss";

export const Authours = () => {
    return (
        <>
            <div className="authors">
                <div className="authors-first-author">
                    <IntroduceBlock />
                </div>
                <div className="authors-second-author">
                    <div className="authors-second-author-container">
                        <img
                            src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/person.jpg"
                            alt=""
                            className="authors-second-author-container-photo"
                        />
                        <div className="authors-second-author-container-information">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/icon-camera.png"
                                alt=""
                                className="authors-second-author-container-information-image"
                            />
                            <h3 className="authors-second-author-container-information-title">
                                MARK PARCELL
                            </h3>
                            <p className="authors-second-author-container-information-text">
                                Aliquam ac dui vel dui vulputate consectetur.
                                Mauris accumsan, massa non consectetur
                                condimentum, diam arcu tristique nibh, nec
                                egestas diam elit at nulla. Suspendisse potenti.
                                In non lacinia risus, ac tempor ipsum. Phasellus
                                venenatis leo eu semper varius.
                            </p>
                            <button className="authors-second-author-container-information-btn">
                                <Link to="/about">MORE DETAILS</Link>
                            </button>
                        </div>
                    </div>
                </div>{" "}
                <div></div>
            </div>
        </>
    );
};
