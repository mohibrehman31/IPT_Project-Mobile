import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DatePicker from 'react-date-picker';

export const EnterData = () =>{
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];  
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Dropdown
        isMulti
        placeHolder="Course"
        options={options}
        onChange={(value) => console.log(value)}
      />

      <Dropdown
        isMulti
        placeHolder="Section"
        options={options}
        onChange={(value) => console.log(value)}
      />
      
      <Dropdown
        isMulti
        placeHolder="Cr Hours"
        options={options}
        onChange={(value) => console.log(value)}
      />
      
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}
