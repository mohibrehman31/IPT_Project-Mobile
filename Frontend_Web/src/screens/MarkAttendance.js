import { React, useState, useEffect } from "react";
import "../styles/table.css";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";
import axios from "axios";

import Dropdown from "../components/Dropdown";

export const MarkAttendance = () => {
  const [att, setAtt] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .post("https://localhost:44323/api/GetUpdatedAttendances", {
            Course_code: "CS3002",
            section: "7G",
            Date: "08-02-2022",
          })
          .then((responce) => {
            console.log(responce.data);
            setAtt(responce.data);
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
  return (
    <div className="auth-form-container">
      <h4>Teacher:CS1313&emsp;&emsp;Course: CS3002&emsp;&emsp;Section: 7G&emsp;&emsp;Date: 12/11/2022&emsp;&emsp;Cr Hrs: 2</h4>
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
                    placeHolder="Select"
                    options={options}
                    onChange={(value) => console.log(value)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <br />
      <button onClick={() => navigateToPage("/EnterData")}>Submit</button>
    </div>
  );
};
