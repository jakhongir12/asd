import React, { createContext, useState } from "react";
import { grades as initialGrades } from "../data/grades";

export const GradeContext = createContext();

export const GradeProvider = ({ children }) => {
  const [grades, setGrades] = useState(initialGrades);

  const addGrade = (grade) => setGrades([...grades, grade]);
  const editGrade = (updatedGrade) =>
    setGrades(
      grades.map((grade) =>
        grade.studentId === updatedGrade.studentId &&
        grade.subjectId === updatedGrade.subjectId
          ? updatedGrade
          : grade
      )
    );
  // const deleteGrade = (id) =>
  //   setGrades(grades.filter((grade) => grade.id !== id));
  return (
    <GradeContext.Provider value={{ grades, addGrade, editGrade }}>
      {children}
    </GradeContext.Provider>
  );
};
