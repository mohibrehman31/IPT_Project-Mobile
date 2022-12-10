import * as React from "react";

import { useNavigate } from "react-router-dom";

export const ViewAttendance = () => {
    const navigate = useNavigate();
    const navigateToPage = (url) =>{
        navigate(url);
    }
  return (
    <div className="auth-form-container">
      <button onClick={() =>navigateToPage('/CourseAtten')}>CS3002</button>
      <br/>
      <button onClick={() =>navigateToPage('/CourseAtten')}>CS3003</button>
      <br/>
      <button onClick={() =>navigateToPage('/CourseAtten')}>BB1002</button>
      <br/>
      <button onClick={() =>navigateToPage('/CourseAtten')}>Logout</button>
    </div>
);
}
