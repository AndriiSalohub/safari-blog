import React from "react";
import "./TripInfo.css";

export const TripInfo = () => {
  return (
    <>
      <section className="trip-info">
        <div className="trip-info-block">
          <div className="trip-info-block-first block-item">
            <h3 className="trip-info-block-first-title">
              ULTIMATE SAFARI TRIPS IN AFRICA
            </h3>
            <img
              src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/squigly-line.png"
              alt=""
              className="trip-info-block-first-small-img"
            />
          </div>
          <div className="trip-info-block-second block-item">
            <p className="trip-info-block-second-description description-text">
              Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
              nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis
              porta enim. Duis fermentum faucibus est, sed vehicula velit
              sodales vitae.
            </p>
          </div>
          <div className="trip-info-block-third block-item">
            <h3 className="trip-info-block-third-big-number">340K</h3>
            <p className="trip-info-block-third-description description-text">
              Sed ultrices nisl velit, eu ornare est ullamcorper.
            </p>
          </div>
          <div className="trip-info-block-fourth block-item animals-block">
            <img
              src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/hippo.png"
              alt=""
              className="trip-info-block-fourth-img animals-block-img"
            />
            <h3 className="trip-info-block-fourth-title animals-block-title">
              HIPPO
            </h3>
            <p className="trip-info-block-fourth-description description-text">
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus.
            </p>
          </div>
          <div className="trip-info-block-fifth block-item animals-block">
            <img
              src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/elepgnat.png"
              alt=""
              className="trip-info-block-fifth-img animals-block-img"
            />
            <h3 className="trip-info-block-fifth-title animals-block-title">
              ELEPHANT
            </h3>
            <p className="trip-info-block-fifth-description description-text">
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus.
            </p>
          </div>
          <div className="trip-info-block-sixth block-item animals-block">
            <img
              src="https://themes.muffingroup.com/be/safari2/wp-content/uploads/2019/04/camel.png"
              alt=""
              className="trip-info-block-sixth-img animals-block-img"
            />
            <h3 className="trip-info-block-sixth-title animals-block-title">
              GIRAFFE
            </h3>
            <p className="trip-info-block-sixth-description description-text">
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
