import React, { Component } from 'react';
import img from '../assets/dataImg.svg';
import "../styles/app.css";

export const Image = () => {
    return (
      <div className="row">
          <img src={img} />
      </div>
    );
  }