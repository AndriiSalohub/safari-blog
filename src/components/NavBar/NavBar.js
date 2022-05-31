import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { NavLink, Link } from "react-router-dom";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "./NavBar.css";

export const NavBar = () => {
    const { scrollY } = useViewportScroll(0);
    const offsetY = [0, 150];
  const heightSizesSm = [110, 70];
  const heightSizesLg = [150, 70];
  const marginSizes = [30, 10];
  const heightSm = useTransform(scrollY, offsetY, heightSizesSm);
  const heightLg = useTransform(scrollY, offsetY, heightSizesLg);
  const margin = useTransform(scrollY, offsetY, marginSizes);
  const [isOpen, setOpen] = useState(false);

  if (window.screen.width < 1400) {
    return (
      <>
        <motion.div
          className="nav-bar"
          style={{
            heightSm,
          }}
        >
          <div className="nav-bar-logo">
            <motion.img
              src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/logo-retina.png"
              alt=""
              style={{
                  marginTop: margin,
                  marginBottom: margin,
              }}
            />
          </div>
          <div className="nav-bar-humburger-menu-icon">
            {" "}
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#b0893d"
              distance="lg"
              size={22}
            />
          </div>
          <ul className={isOpen ? "nav-bar-menu active-menu" : "nav-bar-menu"}>
            <li className="nav-bar-menu-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                {" "}
                HOME
              </NavLink>
            </li>
            <li className="nav-bar-menu-item ">
              <NavLink
                to="/our-travels"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                {" "}
                OUR TRAVELS
              </NavLink>
            </li>
            <li className="nav-bar-menu-item ">
              <NavLink
                to="/offer"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                {" "}
                OFFER
              </NavLink>
            </li>
            <li className="nav-bar-menu-item ">
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                {" "}
                ABOUT
              </NavLink>
            </li>

            <li className="nav-bar-menu-item ">
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                {" "}
                CONTACT
              </NavLink>
            </li>
            <li className="nav-bar-menu-item ">
              <NavLink
                to="/buy-now"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected-hamburger" : ""
                }
              >
                BUY NOW
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div className="navigation-bar" style={{
            height: heightLg,
        }} >
          <ul className="navigation-bar-menu">
            <li className="navigation-bar-menu-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                {" "}
                HOME
              </NavLink>
            </li>
            <li className="navigation-bar-menu-item ">
              <NavLink
                to="/our-travels"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                {" "}
                OUR TRAVELS
              </NavLink>
            </li>
            <li className="navigation-bar-menu-item ">
              <NavLink
                to="/offer"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                {" "}
                OFFER
              </NavLink>
            </li>
            <li className="navigation-bar-menu-img">
              <Link to="/">
                {" "}
                <img
                  src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/logo-retina.png"
                  alt=""
                  className="navigation-bar-menu-img-logo"
                />
              </Link>
            </li>
            <li className="navigation-bar-menu-item ">
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                {" "}
                ABOUT
              </NavLink>
            </li>
            <li className="navigation-bar-menu-item ">
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                {" "}
                CONTACT
              </NavLink>
            </li>
            <li className="navigation-bar-menu-item ">
              <NavLink
                to="/buy-now"
                className={(navData) =>
                  navData.isActive ? "nav-link-selected" : ""
                }
              >
                BUY NOW
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </>
    );
  }
};
