import React from "react";
import { articlesArray } from "./articlesArray.js";
import { ArticlesListItem } from "./ArticlesListItem.js";
import "./ArticlesList.scss";

export const ArticlesList = () => {
    return (
        <>
            <h3 className="articles-list-title">Our travels</h3>
            <div className="articles-list-container">
                {articlesArray.map(({ id, img, title, path }) => (
                    <div key={id}>
                        <ArticlesListItem
                            id={id}
                            img={img}
                            title={title}
                            path={path}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
