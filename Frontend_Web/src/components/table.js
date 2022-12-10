import * as React from "react";
import '../styles/table.css'
import Dropdown from "./Dropdown";

const Table = () => {
    const options = [
        { value: "1", label: "P" },
        { value: "2", label: "A" },
        { value: "3", label: "L" },
      ];  
  return (
    <div className="App">
            <div className="tableApp">
    <table>
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Attendance</th>
      </tr>
      <tr>
        <td>Anom</td>
        <td>19</td>
        <td><Dropdown
        isMulti
        placeHolder="Select"
        options={options}
        onChange={(value) => console.log(value)}
      /></td>
      </tr>
      <tr>
        <td>Megha</td>
        <td>19</td>
        <td><Dropdown
        isMulti
        placeHolder="Select"
        options={options}
        onChange={(value) => console.log(value)}
      /></td>
      </tr>
      <tr>
        <td>Subham</td>
        <td>25</td>
        <td><Dropdown
        isMulti
        placeHolder="Select"
        options={options}
        onChange={(value) => console.log(value)}
      /></td>
      </tr>
    </table>
  </div>
    </div>

);
}

export default Table;
