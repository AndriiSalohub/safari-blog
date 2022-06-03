import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ArticlesListItem.scss";

export const ArticlesListItem = ({ id, img, title, path }) => {
    const dispatch = useDispatch();
    const detectionPath = useSelector((state) => state.pathDetect);

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
