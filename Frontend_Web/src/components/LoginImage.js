import React, { Component } from 'react';
import img from '../assets/loginImg.svg';
import "../styles/app.css";

export const Image = () => {
    return (
      <div className="row">
          <img src={img} width="100" height="50" />
      </div>
    );
  }