import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ArticlesListItem.scss";

export const ArticlesListItem = ({ id, img, title, path }) => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();

    const detectPath = (path) => {
        dispatch({
            type: "DETECT_PATH",
            path,
        });
    };

    return (
        <>
            <div className="articles-list-item">
                <img className="articles-list-item-img" src={img} alt="" />
                <p className="articles-list-item-title">
                    {" "}
                    <Link onClick={() => detectPath(path)} to={path}>
                        {" "}
                        {title}{" "}
                    </Link>{" "}
                </p>
                <div className="articles-list-item-border-block">
                    <div className="articles-list-item-border-block-border"></div>
                </div>
            </div>
        </>
    );
};
