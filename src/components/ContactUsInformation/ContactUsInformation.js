import React from "react";
import "./ContactUsInformation.scss";

export const ContactUsInformation = () => {
    return (
        <>
            <div className="contact-us-information">
                <h3 className="contact-us-information-title">
                    A LIST OF ACTUAL TRAVELS
                </h3>
                <img
                    src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/squigly-line.png"
                    alt=""
                    className="contact-us-information-title-img"
                />
                <div
                    src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/contact-boxed-watter.jpg"
                    alt=""
                    className="contact-us-information-img"
                >
                    <div className="contact-us-information-container">
                        <div className="contact-us-information-block">
                            <h3 className="contact-us-information-block-title">
                                Contact with us
                            </h3>
                            <div className="contact-us-information-block-item">
                                <img
                                    src="https://i.ibb.co/jRXnK9z/location.png"
                                    alt=""
                                    className="contact-us-information-block-item-img"
                                />
                                <p className="contact-us-information-block-item-description">
                                    <span className="">Envato</span>{" "}
                                    <span>Level 13, 2</span>
                                    <span> Elizabeth St,</span>{" "}
                                    <span>Melbourne,</span>{" "}
                                    <span>Victoria 3000</span>
                                    <span>Australia</span>
                                </p>
                            </div>
                            <div className="contact-us-information-block-item">
                                <img
                                    src="https://i.ibb.co/b3LLdrt/telephone-handle-silhouette.png"
                                    alt=""
                                    className="contact-us-information-block-item-img"
                                />
                                <p className="contact-us-information-block-item-description">
                                    <a href="tel:+61 (0) 7 9180 3458">
                                        +61 (0) 7 9180 3458
                                    </a>
                                </p>
                            </div>
                            <div className="contact-us-information-block-item">
                                <img
                                    src="https://i.ibb.co/FJB0RHy/letter.png"
                                    alt=""
                                    className="contact-us-information-block-item-img"
                                />
                                <p className="contact-us-information-block-item-description">
                                    <a href="mailto:noreply@envato.com">
                                        noreply@envato.com
                                    </a>
                                </p>
                            </div>
                            <div className="contact-us-information-block-item">
                                <img
                                    src="https://i.ibb.co/RcP5pNy/link.png"
                                    alt=""
                                    className="contact-us-information-block-item-img"
                                />
                                <p className="contact-us-information-block-item-description">
                                    <a
                                        href="https://www.envato.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        www.envato.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
