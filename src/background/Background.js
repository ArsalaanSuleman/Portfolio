import React from "react";
import "../styles/bg-universe.mp4";
import video from "../assets/bg-universe.mp4";
import fallBackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
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
        <source src={video} type="video7mp4"></source>
      </video>
    </>
  );
};

export default Background;
