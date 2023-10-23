import React from 'react';
import './FloatingActionButton.scss';
import RocketIcon from '/icons/rocket.svg';

const FloatingActionButton = ({ openModal }) => {
  return (
    <button className="fab" onClick={openModal}>
      <img src={RocketIcon} alt="Try it out" className="fab-icon" />
    </button>
  );
};

export default FloatingActionButton;
