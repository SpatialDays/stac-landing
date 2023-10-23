import React from "react";
import "./FloatingActionButton.scss";
import RocketIcon from "/icons/rocket.svg";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

const FloatingActionButton = ({ openModal }) => {
  return (
    <>
      <button className="fab" onClick={openModal} data-tip="Try it out">
        <img src={RocketIcon} alt="Rocket" />
        <Tooltip anchorSelect="button.fab" place="top" type="dark">
          Try it out
        </Tooltip>
      </button>
    </>
  );
};

export default FloatingActionButton;
