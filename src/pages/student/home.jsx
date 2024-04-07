import React, { useState } from "react";
import "./home.css";
import { Filter } from "lucide-react";
import StudentCard from "@/components/student/card.jsx";
import StudentNavbar from "@/components/student/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Search } from "lucide-react";

const StudentHome = () => {
  const studentData = [
    { dept: "Department of CS", status: "Initiate Request" },
    { dept: "Department of EEE", status: "Initiate Request" },
    { dept: "Department of MME", status: "Initiate Request" },
    { dept: "Library", status: "Initiate Request" },
    { dept: "Student Gymkhana", status: "Initiate Request" },
    { dept: "Hostel", status: "Initiate Request" },
    { dept: "Library", status: "Initiate Request" },
    { dept: "Student Gymkhana", status: "Initiate Request" },
    { dept: "Hostel", status: "Initiate Request" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleFilterClick = (status) => {
    if (status === filterStatus) {
      // If the same filter is clicked again, toggle back to "All"
      setFilterStatus("All");
    } else {
      // Otherwise, set the filter to the selected status
      setFilterStatus(status);
    }
  };

  const filteredStudentData = studentData.filter((student) => {
    const matchesSearch = student.dept
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (filterStatus === "All") {
      return matchesSearch;
    } else {
      return student.status === filterStatus && matchesSearch;
    }
  });

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="outline-success"
              className="filter-btn"
              onClick={() => handleFilterClick(filterStatus)}
            >
              <span className="icon-wrapper">
                <Filter size={20} color="#A7AABD" />
              </span>
              Filter
            </Button>
          </Form>
        </div>
        <div className="filter-options">
          <Button
            variant="outline-success"
            className="filter-option-btn"
            onClick={() => handleFilterClick("All")}
          >
            <span className="text-wrapper">All</span>
          </Button>
          <Button
            variant="outline-success"
            className="filter-option-btn"
            onClick={() => handleFilterClick("Pending")}
          >
            <span className="text-wrapper">Pending</span>
          </Button>
          <Button
            variant="outline-success"
            className="filter-option-btn"
            onClick={() => handleFilterClick("Approved")}
          >
            <span className="text-wrapper">Approved</span>
          </Button>
        </div>

        <div className="card-grid">
          {filteredStudentData.map((student, index) => (
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
