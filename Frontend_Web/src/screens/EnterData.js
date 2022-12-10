import { React, useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { Image } from "../components/DataImg";
import axios from "axios";
import "../styles/app.css";

export const EnterData = () => {
  const [course, setCourses] = useState([]);
  const [section, setSections] = useState([]);
  const [creditHrs, setCreditHrs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .post("https://localhost:44323/api/GetTeaches", {
            id: "CS1313",
          })
          .then((responce) => {
            console.log(responce.data);
            setCourses(responce.data);
          });
      } catch (error) {
        console.log(error);
      }

      try {
        await axios
          .post("https://localhost:44323/api/GetSections", {
            teacher_id: "CS1313",
            courses: "CS3002",
          })
          .then((responce) => {
            setSections(responce.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    setCreditHrs([
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
    ]);
  }, []);

  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };

  return (
    <div className="auth-form-container">
      <Image />
      <h2>Hello, CS1313</h2>
      <h3>Enter Data to Mark Attendance </h3>
      <form>
        <Dropdown
          placeHolder="Course"
          options={course.map((a, idx) => ({
            value: a["courses"],
            label: a["courses"],
          }))}
          onChange={(item) => {
            console.log(item);
          }}
        />
        <br />
        <Dropdown
          placeHolder="Section"
          options={section.map((a, idx) => ({
            value: a["sections"],
            label: a["sections"],
          }))}
          onChange={(data) => console.log(data)}
        />
        <br />
        <Dropdown
          placeHolder="Credit Hours"
          options={creditHrs}
          onChange={(value) => console.log(value)}
        />
        <input type="date" id="date" name="date" />
      </form>
      <button onClick={() => navigateToPage("/MarkAttendance")}>Submit</button>
      <button onClick={() => navigateToPage("/StartPage")}>Logout</button>
    </div>
  );
};
