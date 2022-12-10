import React, { Component } from 'react';
import '../styles/table.css'
import "../styles/app.css";

export const CourseAttendance = () => {
    return (
      <div>
          <div className="tableApp">
            <table>
            <tr>
            <th>Date</th>
            <th>Attendance</th>
            </tr>
            <tr>
            <td>12-11-2022</td>
            <td>P</td>
            </tr>
            <tr>
            <td>12-10-2022</td>
            <td>A</td>
            </tr>
            <tr>
            <td>12-09-2022</td>
            <td>P</td>
            </tr>
            <tr>
            <td>12-08-2022</td>
            <td>P</td>
            </tr>
            <tr>
            <td>12-07-2022</td>
            <td>P</td>
            </tr>
            </table>
            </div>
      </div>
    );
  }
