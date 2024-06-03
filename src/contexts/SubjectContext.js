import React, { createContext, useState } from "react";
import { subjects as initialSubjects } from "../data/subjects";

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [subjects, setSubjects] = useState(initialSubjects);

  const addSubject = (subject) => setSubjects([...subjects, subject]);

  const editSubject = (updatedSubject) =>
    setSubjects(
      subjects.map((subject) =>
        subject.id === updatedSubject.id ? updatedSubject : subject
      )
    );

  const deleteSubject = (id) =>
    setSubjects(subjects.filter((subject) => subject.id !== id));

  return (
    <SubjectContext.Provider
      value={{ subjects, addSubject, editSubject, deleteSubject }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
