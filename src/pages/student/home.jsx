import React from "react";
import "./home.css";
import { Filter } from "lucide-react";
import StudentCard from "@/components/student/card.jsx";
import StudentNavbar from "@/components/student/navbar";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { Search } from "lucide-react";
// import React, { useState } from "react";

const StudentHome = () => {
  // Sample data for StudentCard components
  const studentData = [
    { dept: "Department of CS", status: "Initiate Request" },
    { dept: "Department of EEE", status: "Initiate Request" },
    { dept: "Department of MME", status: "Initiate Request" },
    { dept: "Department of Library", status: "Initiate Request" },
    { dept: "Department of Student Gymkhana", status: "Initiate Request" },
    { dept: "Department of Hostel", status: "Initiate Request" },
  ];

  return (
    <>
      <div className="home">
        <StudentNavbar />
        <div className="search-panel">
          <Form className="flex">
            <div className="search-box">
              <div className="search-icon">
                <Search size={25} color="#A7AABD" />
              </div>
              <Form.Control
                type="search"
                placeholder="Search....."
                className="me-2 search-inp"
                aria-label="Search"
              />
            </div>

            <Button variant="outline-success" className="filter-btn">
              <span className="icon-wrapper">
                <Filter size={20} color="#A7AABD" />
              </span>
              Filter
            </Button>
          </Form>
        </div>

        <div className="filter-options">
          <Button variant="outline-success" className="filter-option-btn">
            <span className="text-wrapper">All</span>
          </Button>
          <Button variant="outline-success" className="filter-option-btn">
            <span className="text-wrapper">Pending</span>
          </Button>

          <Button variant="outline-success" className="filter-option-btn">
            <span className=" text-wrapper">Approved</span>
          </Button>
        </div>

        <div className="card-grid">
          {studentData.map((student, index) => (
            <StudentCard
              key={index}
              dept={student.dept}
              status={student.status}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentHome;
