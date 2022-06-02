import React from "react";
import { Link } from "react-router-dom";
import "./ArticlesListItem.scss";

export const ArticlesListItem = ({ id, img, title }) => {
    return (
        <>
            <div className="articles-list-item">
                <img className="articles-list-item-img" src={img} alt="" />
                <p className="articles-list-item-title">
                    {" "}
                    <Link to="article"> {title} </Link>{" "}
                </p>
                <div className="articles-list-item-border-block">
                    <div className="articles-list-item-border-block-border"></div>
                </div>
            </div>
        </>
    );
};
