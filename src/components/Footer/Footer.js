import React from "react";
import "./Footer.scss";

export const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="footer">
                <div className="footer-scroll-to-top">
                    <img
                        src="https://i.ibb.co/NnTY4nC/tick.png"
                        alt=""
                        onClick={() => scrollUp()}
                        className="footer-scroll-to-top-img"
                    />
                </div>
                <p className="footer-text">
                    <span className="footer-text-span">
                        © 2021 Betheme by Muffin group | All
                    </span>{" "}
                    Rights Reserved | Powered by WordPress
                </p>
            </div>
        </>
    );
};
