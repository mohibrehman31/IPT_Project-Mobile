import React from "react";
import './styles/loginform.css';
import { StudentLogin } from "./components/StudentLogin";
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
    return(
    <div className="App">
          <StudentLogin />
        </div>
    )

}
export default App;