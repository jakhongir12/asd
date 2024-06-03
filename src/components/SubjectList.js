import React, { useContext, useState } from "react";
import { SubjectContext } from "../contexts/SubjectContext";
import "./SubjectList.css";

const SubjectList = () => {
  const { subjects, addSubject, editSubject, deleteSubject } = useContext(SubjectContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAddSubject = () => {
    if (name.trim()) {
      const existingSubject = subjects.find((subject) => subject.name === name);
      if (existingSubject) {
        setError("Subject already exists");
      } else {
        addSubject({ id: Date.now(), name });
        setName("");
        setError("");
      }
    }
  };

  return (
    <div className="list-container">
      <h2>Subject List</h2>
      <ul className="list">
        {subjects.map((subject) => (
          <li key={subject.id} className="list-item">
            {subject.name}
            <button
              className="edit-button"
              onClick={() =>
                editSubject({
                  ...subject,
                  name: prompt("New name", subject.name),
                })
              }
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => deleteSubject(subject.id)}
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
        placeholder="New Subject Name"
      />
      <button className="add-button" onClick={handleAddSubject}>
        Add Subject
      </button>
    </div>
  );
};

export default SubjectList;
