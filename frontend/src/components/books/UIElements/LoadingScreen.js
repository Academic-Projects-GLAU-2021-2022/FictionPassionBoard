import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <div className="welcomeLoadingScreen"> &#128218; Welcome &#128218;</div>
      <div id="loading-wrapper">
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
