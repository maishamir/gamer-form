import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">
        <span className="hero__title--green">//</span> join the nexus
      </h1>
      <p className="hero__tagline">Initialize your neoncore identity</p>

      <hr />

      <div className="opID">
        <p className="opID__label">operator id</p>
        <p className="opID__value">unassigned</p>
      </div>
    </div>
  );
}

export default Hero;
