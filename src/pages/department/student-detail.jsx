import React from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { studentID } = useParams();
  return (
    <>
      <p>Department Student Details</p>
      <strong> Student ID: {studentID}</strong>
    </>
  );
};

export default StudentDetail;
