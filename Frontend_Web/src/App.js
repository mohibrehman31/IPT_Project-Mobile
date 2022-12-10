import React from "react";
import "./styles/loginform.css";
import {
  StudentLogin,
  TeacherLogin,
  EnterData,
  table,
} from "./components/table";
//import { TeacherLogin } from "./components/TeacherLogin";
//import { EnterData } from "./components/EnterData";
//import Table from "./components/table";

function App() {
  /*const [currentForm, setCurrentForm] = useState('StudentLogin');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "StudentLogin" ? <StudentLogin onFormSwitch={toggleForm} /> : <TeacherLogin onFormSwitch={toggleForm} />
      }
    </div>
  );
}*/
  return (
    <div className="App">
      <table />
    </div>
  );
}
export default App;
