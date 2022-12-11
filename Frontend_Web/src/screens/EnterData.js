import { React, useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "../components/DataImg";
import axios from "axios";
import "../styles/app.css";
import Form from 'react-bootstrap/Form';



export const EnterData = () => {

  const location = useLocation();
  const teacher_id = location.state.teacher_id;

  const [date, setDate] = useState(new Date());

  const [course, setCourses] = useState([]);
  const [section, setSections] = useState([]);
  const [creditHrs, setCreditHrs] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCrHr, setSelectedCrHr] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {

    getData();
    // const getData = async () => {
    //   try {
    //     await axios
    //       .post("https://localhost:44323/api/GetTeaches", {
    //         id: teacher_id
    //       })
    //       .then((responce) => {
    //         setCourses(responce.data);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }

    //   try {
    //     await axios
    //       .post("https://localhost:44323/api/GetSections", {
    //         teacher_id: "CS1313",
    //         courses: "CS3002",
    //       })
    //       .then((responce) => {
    //         setSections(responce.data);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  //  getData();
   
   setCreditHrs([
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
    ]);
  }, []);
  const getData = async () => {
    try {
      await axios
        .post("https://localhost:44323/api/GetTeaches", {
          id: teacher_id
        })
        .then((responce) => {
          console.log(course)
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
  const getSections = async () => {

    try {
      await axios
        .post("https://localhost:44323/api/GetSections",
        {
          'teacher_id' : teacher_id,
          'courses' : selectedCourse
        })
        .then((responce) => {
          setSections(responce.data);
        });
    } catch (error) {
      console.log(error);
    }

  }


  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };

  return (
    <div className="auth-form-container">
      <Image />
      <h2>Hello, {teacher_id}</h2>
      <h3>Enter Data to Mark Attendance </h3>
      <form>
        <Dropdown
          placeHolder="Course"
          options={course.map((a, idx) => ({
            value: a["courses"],
            label: a["courses"],
          }))}
          onChange={(item) => {
            setSelectedCourse(item.label)
            getSections();

          }}
        />
        <br />
        <Dropdown
          placeHolder="Section"
          options={section.map((a, idx) => ({
            value: a["sections"],
            label: a["sections"],
          }))}
          onChange={(value) => {
            console.log(value.label)
            setSelectedSection(value.label)
          }}
        />
        <br />
        <Dropdown
          placeHolder="Credit Hours"
          options={creditHrs}
          onChange={(value) => {
            console.log(value.label)
            setSelectedCrHr(value.label)
          }}
        />
         {/* <DatePicker selected={date} onChange={date => setDate(date)} /> */}
         <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => {setSelectedDate(e.target.value.split('-')[1]+"-"+e.target.value.split('-')[2]+"-"+e.target.value.split('-')[0])}}
              /> 
      </form>
      <button onClick={() => navigate("/MarkAttendance", {state : {teacher_id : teacher_id, selectedCourse : selectedCourse, selectedSection : selectedSection, selectedCrHr : selectedCrHr,selectedDate:selectedDate}})}>Submit</button>
      <button onClick={() => navigateToPage("/StartPage")}>Logout</button>
    </div>
  );
};
