import React from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";

const StudentNavbar = () => {
  return (
    <>
      {/* <div className="navbar">
        <div className="navbar-heading">EZDues</div>
        <div className="circle"></div>
      </div> */}
      <Navbar bg="light" expand="lg" className="nav justify-content-between">
        <h1 className="navbar-heading">EZDues</h1>
        <div className="circle">
          <img
            className="ellipse"
            src="src\assets\user-logo.svg"
            alt="User Logo"
          />
        </div>
      </Navbar>
    </>
  );
};

export default StudentNavbar;
