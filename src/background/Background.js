import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallBackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <React.Fragment>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallBackImage}
      >
        <source src={video} type="video/mp4" />
      </video>
    </React.Fragment>
  );
};

export default Background;
