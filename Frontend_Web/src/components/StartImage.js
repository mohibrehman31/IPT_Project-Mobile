import React from 'react';
import img from '../assets/startImg.svg';
import "../styles/app.css";

export const Image = () => {
    return (
      <div className="row">
          <img src={img} />
      </div>
    );
  }