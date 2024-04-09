import React, { useState } from "react";
import "./home.css";
import { Filter } from "lucide-react";
import StudentCard from "@/components/student/card.jsx";
import StudentNavbar from "@/components/student/navbar";
import { Button } from "@/components/ui/button";
import Form from "react-bootstrap/Form";
import { Search } from "lucide-react";

const StudentHome = () => {
  const studentData = [
    { dept: "Department of CSE", status: "Initiate Request" },
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
      setFilterStatus("All");
    } else {
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
    <div className="pb-10 px-[5%]">
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
            className="filter-btn"
            onClick={() => handleFilterClick(filterStatus)}
          >
            <span className="icon-wrapper mr-1">
              <Filter size={20} color="#A7AABD" />
            </span>
            <span className="text-sm lg:text-base">Filter</span>
          </Button>
        </Form>
      </div>
      <div className="filter-options">
        <Button
          className={`filter-option-btn ${
            filterStatus === "All"
              ? "bg-[#538ff8] text-white"
              : "bg-white text-[#a7aabd]"
          } `}
          onClick={() => handleFilterClick("All")}
        >
          <span className="text-wrapper">All</span>
        </Button>
        <Button
          className={`filter-option-btn ${
            filterStatus === "Pending"
              ? "bg-[#538ff8] text-white"
              : "bg-white text-[#a7aabd]"
          } `}
          onClick={() => handleFilterClick("Pending")}
        >
          <span className="text-wrapper">Pending</span>
        </Button>
        <Button
          className={`filter-option-btn ${
            filterStatus === "Approved"
              ? "bg-[#538ff8] text-white"
              : "bg-white text-[#a7aabd]"
          } `}
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
  );
};

export default StudentHome;
