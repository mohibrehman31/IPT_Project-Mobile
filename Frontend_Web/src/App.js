import React from "react";
import "./styles/app.css";
import { Header } from "./components/Header";
import {BrowserRouter as Router,useRoutes} from "react-router-dom";
import { StudentLogin } from "./screens/StudentLogin";
import { TeacherLogin } from "./screens/TeacherLogin";
import { StartPage } from "./screens/StartPage";
import { EnterData } from "./screens/EnterData";
import { MarkAttendance } from "./screens/MarkAttendance";
import { ViewAttendance } from "./screens/ViewAttendance";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <StartPage /> },
    { path: "/StartPage", element: <StartPage /> },
    { path: "/StudentLogin", element: <StudentLogin /> },
    { path: "/TeacherLogin", element: <TeacherLogin /> },
    { path: "/EnterData", element: <EnterData /> },
    { path: "/MarkAttendance", element: <MarkAttendance /> },
    { path: "/ViewAttendance", element: <ViewAttendance /> }

  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;
