import * as React from "react";
import '../styles/table.css'
import { useNavigate } from "react-router-dom";


export const ViewAttendance = () => {
    const navigate = useNavigate();
    const navigateToPage = (url) =>{
        navigate(url);
    }
  return (
    <div>
            <div className="tableApp">
    <table>
      <tr>
        <th>Date</th>
        <th>Attendance</th>
      </tr>
      <tr>
        <td>1-12-2022</td>
        <td>P</td>
      </tr>
      <tr>
        <td>1-12-2022</td>
        <td>A</td>
      </tr>
      <tr>
        <td>1-12-2022</td>
        <td>L</td>
      </tr>
    </table>
  </div>
  <br/>
  <button onClick={() =>navigateToPage('/StartPage')}>Logout</button>
    </div>



);
}
