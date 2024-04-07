import React, { useState } from "react";
import "./card.css";
import { CircleCheckBig, Clock } from "lucide-react";
import { faL } from "@fortawesome/free-solid-svg-icons";

const StudentCard = (props) => {
  const { status, dept } = props; // Destructure props directly
  const [isApproved, setIsApproved] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    try {
      //   const response = await fetch("https://api.example.com/data");
      //   const data = await response.json();

      //   // Extracting only "deptname" and "status" fields from the API response
      //   const { deptname, status } = data;
      //   setResponseData({ deptname, status });
      //   status = "Approved";

      setIsApproved(true); // Assuming response indicates approval
      setIsPending(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsPending(true); // Set as pending if there's an error
    }
  };

  const renderRequestElement = () => {
    if (status === "Initiate Request") {
      if (isApproved) {
        return (
          <div className="approved-result">
            <p className="auto-approved">
              <CircleCheckBig size={34} color="#A7AABD" />
              Auto Approved
            </p>
            <p className="date">
              <br />
              08 April 2024
            </p>
          </div>
        );
      } else if (isPending) {
        return (
          <div className="pending-result">
            <p className="pending">
              <Clock size={34} color="#545c75" />
              Pending
            </p>
            <p className="date">
              <br />
              08 April 2024
            </p>
          </div>
        );
      } else {
        return (
          <button className="frame-4" type="button" onClick={fetchData}>
            <div className="subheading-2">{status}</div>
          </button>
        );
      }
    }
    return null; // Return null if request element should not be rendered
  };

  // Determine the rectangle class dynamically based on states
  const getRectangleClassName = () => {
    if (isApproved) {
      return "rectangle green-rectangle approved";
    } else if (isPending) {
      return "rectangle gray-rectangle pending";
    } else {
      return "rectangle";
    }
  };

  return (
    <div className="box">
      <div className={getRectangleClassName()}>
        <div className="heading-4">{dept}</div>
        {renderRequestElement()}
      </div>
    </div>
  );
};

export default StudentCard;
