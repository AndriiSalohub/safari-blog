import React from "react";
import { Link } from "react-router-dom";
import "./UpperFooter.scss";

export const UpperFooter = () => {
  return (
    <>
      <div className="upper-footer">
        <div className="upper-footer-find-us">
          <h3 className="upper-footer-find-us-title upper-footer-title">
            Find us here
          </h3>
          <ul className="upper-footer-find-us-social-network-menu">
            <li className="upper-footer-find-us-social-network-menu-items">
              <Link className="facebook-icon icons" to="/">
                <img src="https://i.ibb.co/FKSfSdk/facebook.png" alt="" />
              </Link>
            </li>
            <li className="upper-footer-find-us-social-network-menu-items">
              <Link className="google-icon icons" to="/">
                <img src="https://i.ibb.co/pwpvTg0/google-glass.png" alt="" />
              </Link>
            </li>

            <li className="upper-footer-find-us-social-network-menu-items">
              <Link className="twitter-icon icons" to="/">
                <img src="https://i.ibb.co/y8wx0md/twitter.png" alt="" />
              </Link>
            </li>
            <li className="upper-footer-find-us-social-network-menu-items">
              <Link className="linked-in-icon icons" to="/">
                <img src="https://i.ibb.co/qxHzgt7/linkedin.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="upper-footer-contact-us">
          <h3 className="upper-footer-contact-us-title upper-footer-title">
            Contact us
          </h3>
          <p className="upper-footer-contact-us-first-paragraph upper-footer-text">
            Nullam viverra consectetuer quisque cursus et, porttitor risus.
          </p>
          <p className="upper-footer-contact-us-second-paragraph upper-footer-text">
            +61 (0) 3 8376 6284 noreply@envato.com
          </p>
        </div>
        <div className="upper-footer-localization">
          <h3 className="upper-footer-localization-title upper-footer-title">
            Localization
          </h3>
          <div className="upper-footer-localization-text-block">
            <p className="upper-footer-localization-text-block-first-paragraph localization-text-block-paragraph  upper-footer-text">
              Envato
            </p>
            <p className="upper-footer-localization-text-block-second-paragraph localization-text-block-paragraph upper-footer-text">
              Level 13, 2 Elizabeth
            </p>
            <p className="upper-footer-localization-text-block-third-paragraph localization-text-block-paragraph upper-footer-text">
              Victoria 3000
            </p>
            <p className="upper-footer-localization-text-block-fourth-paragraph localization-text-block-paragraph upper-footer-text">
              Australia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
