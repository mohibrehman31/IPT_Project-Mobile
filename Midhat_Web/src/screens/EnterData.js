import React from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { Image } from "../components/DataImg";
import "../styles/app.css";

export const EnterData = () => {
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" }
  ];
  return (
    <div className="auth-form-container">
      <Image/>
      <form>
      <Dropdown
        isMulti
        placeHolder="Course"
        options={options}
        onChange={(value) => console.log(value)}
      />
      <br/>
      <Dropdown
        isMulti
        placeHolder="Section"
        options={options}
        onChange={(value) => console.log(value)}
      />
      <br/>
      <Dropdown
        isMulti
        placeHolder="Cr Hours"
        options={options}
        onChange={(value) => console.log(value)}
      />
      <input type="date" id="date" name="date"/>
      </form>
      <button onClick={() => navigateToPage("/MarkAttendance")}>
        Mark Attendance
      </button>
    </div>
  );
};
