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
                <div className="articles-page-content">
                    <div className="articles-page-content-destination">
                        <h3 className="articles-page-content-destination-title articles-page-content-title">
                            DESTINATION
                        </h3>
                        <p className="articles-page-content-destination-text-first-paragraph articles-page-content-text">
                            Nunc quis nibh magna. Proin risus erat, fringilla
                            vel purus sit amet, mattis porta enim. Duis
                            fermentum faucibus est, sed vehicula velit sodales
                            vitae.
                        </p>
                        <p className="articles-page-content-destination-text-second-paragraph articles-page-content-text">
                            Nam ullamcorper rhoncus sem vitae tempus. Curabitur
                            ut tortor a orci fermentum ultricies. Mauris maximus
                            velit commodo, varius ligula vel, consequat est.
                        </p>
                    </div>
                    <div className="articles-page-content-mission">
                        <h3 className="articles-page-content-mission-title articles-page-content-title">
                            MISSION
                        </h3>
                        <p className="articles-page-content-mission-text-first-paragraph articles-page-content-text">
                            Sed vehicula velit sodales vitae. Mauris mollis
                            lobortis turpis, eget accumsan ante aliquam quis.
                        </p>
                        <p className="articles-page-content-mission-text-second-paragraph articles-page-content-text">
                            Nam ullamcorper rhoncus sem vitae tempus. Curabitur
                            ut tortor a orci fermentum ultricies. Mauris maximus
                            velit commodo, varius ligula vel, consequat est.
                        </p>
                        <p className="articles-page-content-mission-text-third-paragraph articles-page-content-text">
                            Sed ultrices nisl velit, eu ornare est ullamcorper
                            a.
                        </p>
                    </div>
                    <div className="articles-page-content-adventure">
                        <h3 className="articles-page-content-adventure-title articles-page-content-title">
                            ADVENTURE
                        </h3>
                        <p className="articles-page-content-adventure-text-first-paragraph articles-page-content-text">
                            Nunc quis nibh magna. Proin risus erat,{" "}
                            <span>
                                {" "}
                                fringilla vel purus sit amet, mattis porta
                            </span>{" "}
                            enim. Duis fermentum faucibus est, sed vehicula
                            velit sodales vitae. Mauris mollis lobortis turpis,
                            eget accumsan ante aliquam quis.
                        </p>
                    </div>
                </div>
                <div className="articles-page-img-block">
                    <div className="articles-page-img-block-first-item articles-page-img-block-item">
                        <div className="articles-page-img-block-img-container ">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/single-camels.jpg"
                                alt=""
                                className="articles-page-img-block-img"
                            />
                        </div>
                        <h3 className="articles-page-img-block-title">
                            Dolor es omnia ques
                        </h3>
                    </div>
                    <div className="articles-page-img-block-second-item articles-page-img-block-item">
                        <div className="articles-page-img-block-img-container ">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/single-tattoed-head.jpg"
                                alt=""
                                className="articles-page-img-block-img"
                            />
                        </div>
                        <h3 className="articles-page-img-block-title">
                            Dolor es omnia ques
                        </h3>
                    </div>
                    <div className="articles-page-img-block-third-item articles-page-img-block-item">
                        <div className="articles-page-img-block-img-container ">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/single-jeep.jpg"
                                alt=""
                                className="articles-page-img-block-img"
                            />
                        </div>
                        <h3 className="articles-page-img-block-title">
                            Dolor es omnia ques
                        </h3>
                    </div>
                    <div className="articles-page-img-block-fourth-item articles-page-img-block-item">
                        <div className="articles-page-img-block-img-container ">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/single-kitty.jpg"
                                alt=""
                                className="articles-page-img-block-img"
                            />
                        </div>

                        <h3 className="articles-page-img-block-title">
                            Dolor es omnia ques
                        </h3>
                    </div>
                    <div className="articles-page-img-block-fifth-item articles-page-img-block-item">
                        <div className="articles-page-img-block-img-container last-img-container">
                            <img
                                src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/single-chill.jpg"
                                alt=""
                                className="articles-page-img-block-img"
                            />
                        </div>
                        <h3 className="articles-page-img-block-title">
                            Dolor es omnia ques
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};
