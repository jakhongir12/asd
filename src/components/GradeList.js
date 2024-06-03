import React, { useContext, useState } from "react";
import { GradeContext } from "../contexts/GradeContext";
import { StudentContext } from "../contexts/StudentContext";
import { SubjectContext } from "../contexts/SubjectContext";
import "./GradeList.css";

const GradeList = () => {
  const { grades, addGrade, editGrade } = useContext(GradeContext);
  const { students } = useContext(StudentContext);
  const { subjects } = useContext(SubjectContext);
  const [studentId, setStudentId] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");

  const handleAddGrade = () => {
    if (studentId && subjectId && grade && date) {
      addGrade({
        studentId: Number(studentId),
        subjectId: Number(subjectId),
        grade,
        date,
      });
      setStudentId("");
      setSubjectId("");
      setGrade("");
      setDate("");
    }
  };

  return (
    <div className="list-container">
      <h2>Grade List</h2>
      <ul className="list">
        {grades.map((grade, index) => (
          <li key={index} className="list-item">
            <span>
              Student: {students.find((s) => s.id === grade.studentId)?.name},
              Subject: {subjects.find((s) => s.id === grade.subjectId)?.name},
              Grade: {grade.grade}, Date: {grade.date}
            </span>
            <button
              className="edit-button"
              onClick={() =>
                editGrade({ ...grade, grade: prompt("New grade", grade.grade) })
              }
            >
              Edit
            </button>
            {/* <button
              className="delete-button"
              onClick={() => deleteGrade(grade.id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
      <select
        className="select"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      >
        <option value="">Select Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      <select
        className="select"
        value={subjectId}
        onChange={(e) => setSubjectId(e.target.value)}
      >
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.name}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
      />
      <input
        className="input"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="add-button" onClick={handleAddGrade}>
        Add Grade
      </button>
    </div>
  );
};

export default GradeList;
