import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./VideoPopup.css";
export const VideoPopup = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="video-pop-up">
        <h3 className="video-pop-up-title">Click to play</h3>
        <div className="video-pop-up-icon" onClick={() => setOpen(true)}>
          <img
            src="https://i.ibb.co/3y7z5BY/tryengle.png"
            alt="tryengle"
            className="video-pop-up-icon-tryengle"
          />
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="z0jjTU-H43M"
          onClose={() => setOpen(false)}
        />
        <p className="video-pop-up-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercit
        </p>
      </div>
    </>
  );
};
