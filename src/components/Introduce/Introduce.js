import React from "react";
import { Link } from "react-router-dom";
import "./Introduce.css";

export const Introduce = () => {
  return (
    <>
      <section className="introduce-container">
        <div className="introduce-background">
          <div className="introduce-block">
            <div className="introduce">
              <img
                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/home-ginger.jpg"
                alt=""
                className="introduce-photo"
              />
              <div className="introduce-information">
                <img
                  src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/home-car-icon.png"
                  alt=""
                  className="introduce-information-image"
                />
                <h3 className="introduce-information-title">WE LOVE SAFARI</h3>
                <p className="introduce-information-text">
                  Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,
                  massa non consectetur condimentum, diam arcu tristique nibh,
                  nec egestas diam elit at nulla. Suspendisse potenti. In non
                  lacinia risus, ac tempor ipsum. Phasellus venenatis leo eu
                  semper varius.
                </p>
                <button className="introduce-information-btn">
                  <Link to="/about">MORE DETAILS</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
