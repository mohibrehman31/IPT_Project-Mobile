import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../components/LoginImage";
import axios from "axios";

export const TeacherLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      await axios.post("https://localhost:44323/api/Login",
        {
          Name : email,
          Pass : pass
        })
        .then((responce) => {

          if (responce.data !== 'Fail'){
            
            navigate("/EnterData",{state : {teacher_id : responce.data}});
          }
          else{

            alert("Login Failed")
          }
        });
    } catch (error) {
      console.log(error);
    }

  };


  return (
    <div className="auth-form-container">
      <Image />
      <h2>Teacher Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="Roll">User Name</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Username"
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
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};
