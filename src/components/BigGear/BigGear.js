import React from "react";
import "./BigGear.css";
import gear from "./bigGear.svg";

const BigGear = () => {
  return (
    <div className="BigGear">
      <img src={gear} alt="gear" />
    </div>
  );
};

export default BigGear;
