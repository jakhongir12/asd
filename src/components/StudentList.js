import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import "./StudentList.css";

const StudentList = () => {
  const { students, addStudent, editStudent, deleteStudent } =
    useContext(StudentContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (name.trim()) {
      const existingStudent = students.find((student) => student.name === name);
      if (existingStudent) {
        setError("Student already exists");
      } else {
        addStudent({ id: Date.now(), name });
        setName("");
        setError("");
      }
    }
  };

  return (
    <div className="list-container">
      <h2>Student List</h2>
      <ul className="list">
        {students.map((student) => (
          <li key={student.id} className="list-item">
            {student.name}
            <button
              className="edit-button"
              onClick={() =>
                editStudent({
                  ...student,
                  name: prompt("New name", student.name),
                })
              }
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {error && <div className="error">{error}</div>}
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Student Name"
      />
      <button className="add-button" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
};

export default StudentList;
