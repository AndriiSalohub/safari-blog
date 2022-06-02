import React from "react";
import "./reset.css";
import "./ArticlesPage.scss";

export const ArticlesPage = () => {
    return (
        <>
            <div className="articles-page">
                <div className="articles-page-navbar-img-block">
                    <img
                        src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/elephants.jpg"
                        alt=""
                        className="articles-page-navbar-img-block-img"
                    />
                    <h3 className="articles-page-navbar-img-block-title">
                        GOING DEEP INTO THE SAVANNA
                    </h3>
                </div>
            </div>
        </>
    );
};
