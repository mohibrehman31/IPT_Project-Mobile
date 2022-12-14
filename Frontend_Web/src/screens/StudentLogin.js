import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../components/LoginImage";

export const StudentLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const navigate = useNavigate();
  const navigateToPage = (url) =>{
      navigate(url);
  }

  return (
    
    <div className="auth-form-container">
        <Image/>
      <h2 >Student Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Roll">Roll No</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="YYXXXXX"
          id="Roll"
          name="Roll"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
  <button onClick={() =>navigateToPage('/ViewAttendance')}>Login</button>
      </form>
    </div>
  );
};
