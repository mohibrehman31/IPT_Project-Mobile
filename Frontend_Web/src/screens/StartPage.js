import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";
import { Image } from "../components/StartImage";

export const StartPage = () => {
    const navigate = useNavigate();
    const navigateToPage = (url) =>{
        navigate(url);
    }
    return (
        <div>
            <div className="auth-form-container">
              <Image/>
            <button onClick={() =>navigateToPage('/StudentLogin')}>Student Login</button>
            <br />
            <br />
            <button onClick={() =>navigateToPage('/TeacherLogin')}>Teacher Login</button>
        </div>
        </div>

    )
}