import React from "react";

const NoMatchPage = () => {
  return (
    <div className="pagenotfound">
      <img
        src={process.env.PUBLIC_URL + "/assets/404-pagenotfound.png"}
        alt="Responsive image"
        className="pagenotfound-img"
        id="404img"
        style={{ paddingLeft: "35rem", paddingTop: "10rem" }}
      />
      <h1 style={{ textAlign: "center", color: "#8A0707" }}>
        We're Sorry
        <br />
        Page not Available
      </h1>
    </div>
  );
};

export default NoMatchPage;
