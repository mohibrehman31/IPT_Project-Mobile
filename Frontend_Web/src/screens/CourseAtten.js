import * as React from "react";

import { CourseAttendance } from "../components/CourseAttendance";
import { useNavigate } from "react-router-dom";

export const CourseAtten = () => {
    const navigate = useNavigate();
    const navigateToPage = (url) =>{
        navigate(url);
    }
  return (
    <div>
      <h2>CS 3002</h2>
      <CourseAttendance/>
      <br/>
      <button onClick={() =>navigateToPage('/StartPage')}>Logout</button>
    </div>
);
}