import React from "react";
import { StudentProvider } from "./contexts/StudentContext";
import { SubjectProvider } from "./contexts/SubjectContext";
import { GradeProvider } from "./contexts/GradeContext";
import StudentList from "./components/StudentList";
import SubjectList from "./components/SubjectList";
import GradeList from "./components/GradeList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <StudentProvider>
        <SubjectProvider>
          <GradeProvider>
            <div className="grid">
              <StudentList />
              <SubjectList />
              <GradeList />
            </div>
          </GradeProvider>
        </SubjectProvider>
      </StudentProvider>
    </div>
  );
};

export default App;
