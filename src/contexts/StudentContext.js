import React, { createContext, useState } from "react";
import { students as initialStudents } from "../data/students";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => setStudents([...students, student]);
  const editStudent = (updatedStudent) =>
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  const deleteStudent = (id) =>
    setStudents(students.filter((student) => student.id !== id));

  return (
    <StudentContext.Provider
      value={{ students, addStudent, editStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};
