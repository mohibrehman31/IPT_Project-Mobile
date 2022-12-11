import { React, useState, useEffect } from "react";
import "../styles/table.css";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/app.css";
import axios from "axios";

import Dropdown from "../components/Dropdown";

export const MarkAttendance = () => {

  const location = useLocation();
  const teacher_id = location.state.teacher_id;
  const selectedCourse = location.state.selectedCourse;
  const selectedSection = location.state.selectedSection;
  const selectedCrHr = location.state.selectedCrHr;
  const selectedDate = location.state.selectedDate;
  const [att, setAtt] = useState([]);



 
  useEffect(() => {
    console.log(teacher_id)
    console.log(selectedCourse)
    console.log(selectedSection)
    console.log(selectedCrHr)
    console.log(selectedDate)

    const getData = async () => {
      try {
        await axios
          .post("https://localhost:44323/api/GetUpdatedAttendances",{
            Course_Code : selectedCourse,
            section : selectedSection,
            Date : selectedDate
          })
          .then((responce) => {
            console.log(responce.data);
            setAtt(responce.data)
          
          });
      } catch (error) {
        console.log(error);
      }
    };
    
    getData();

  }, []);
  const navigate = useNavigate();
  const navigateToPage = (url) => {
    navigate(url);
  };
  const options = [
    { value: "P", label: "P" },
    { value: "A", label: "A" },
    { value: "L", label: "L" },
  ];
  const handleSubmit = async () =>{

    var data = att;

    for(let i=0;i<data.length;i++){
      data[i]["date"] = selectedDate;
      data[i]["teacher_id"] = teacher_id;
      data[i]["course_id"] = selectedCourse;
      data[i]["cr_hr"] = parseInt(selectedCrHr);
    }
    try {
        await axios
          .post("https://localhost:44323/api/InsertAttendances",{
            attendances : data
          })
          .then((responce) => {
            console.log(responce.data)
          });
      } catch (error) {
        console.log(error);
      }
      
      navigate("/EnterData",{state : {teacher_id : teacher_id}});
    }
  return (
    <div className="auth-form-container">
      <h4>Teacher:{teacher_id}&emsp;&emsp;Course: {selectedCourse}&emsp;&emsp;Section: {selectedSection}&emsp;&emsp;Date: {selectedDate}&emsp;&emsp;Cr Hrs: {selectedCrHr}</h4>
      <div className="tableApp">
        <table>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
          {att.map((x, idx) => {
            return (
              <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>
                  <Dropdown
                    options={options}
                    placeHolder={ x.attendance.length === 0 ? "Enter" : x.attendance}
                    onChange={(item) => {
                      x.attendance = item.label;
    
                      var updateStates = att;
                      for (var i=0; i < updateStates.length; i++) {
                        if (updateStates[i].id === x["id"]){
                          updateStates[i].attendance = item.label
                        }
                      } 
                      setAtt(updateStates)
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <br />
      <button onClick={() => {handleSubmit()}}>Submit</button>
    </div>
  );
};
