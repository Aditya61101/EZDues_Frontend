import React, { useState } from "react";
import { Search, CheckCheck } from "lucide-react";

import images from "@/constants/images";
import { Button } from "@/components/ui/button";

const PaidFines = () => {
  const [searchStudent, setSearchStudent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchStudent(value);
    setCurrentPage(1);
    const results = studentDetails.filter(
      (student) =>
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.roll.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStudents(results);
  };

  const studentDetails = [
    {
      name: "Hemant Kumar",
      roll: "2301CS20",
      fineAmount: 1000,
    },
    {
      name: "Bibhuti Jha",
      roll: "2301AI37",
      fineAmount: 1000,
    },
    {
      name: "Kushal Agarwal",
      roll: "2201MC22",
      fineAmount: 1000,
    },
    {
      name: "Himanshu",
      roll: "2201MC18",
      fineAmount: 1000,
    },
    {
      name: "Hemant Kumar",
      roll: "2301CS20",
      fineAmount: 1000,
    },
    {
      name: "Bibhuti Jha",
      roll: "2301AI37",
      fineAmount: 1000,
    },
    {
      name: "Kushal Agarwal",
      roll: "2201MC22",
      fineAmount: 1000,
    },
    {
      name: "Himanshu",
      roll: "2201MC18",
      fineAmount: 1000,
    },
  ];

  const studentsToDisplay = searchStudent ? filteredStudents : studentDetails;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsToDisplay.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(studentsToDisplay.length / studentsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const detailHandler = (event) => {
    //using api to fetch and view the details of fines
  };
  const approveHandler = (event) => {
    //using api to add fines
  };
  const paymentProofHandler = (event) => {
    //using api to add fines
  };
  return (
    <>
      <div className="flex flex-col justify-start h-full">
        <div className="w-full h-1/5 flex flex-row justify-between py-4 flex-wrap">
          <div className="md:w-3/5 w-full flex flex-row justify-center">
            <form
              onSubmit={handleSearch}
              className="flex items-center relative w-full"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="rounded-[33px] p-3 pl-12 border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                type="text"
                placeholder="Search..."
                value={searchStudent}
                onChange={handleSearch}
                // onKeyDown={handleKeyPress}
              />
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <ul className="flex">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  className={`mr-1 border px-1 py-1 ${
                    currentPage === number ? "text-red-500" : ""
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex-col flex-wrap pb-5">
          {currentStudents.map((studentDetail, index) => (
            <div
              key={index}
              className="w-full p-7 h-auto rounded-[20px] flex flex-col lg:flex-row bg-[#fff] justify-between flex-wrap mb-5"
            >
              <div className="flex w-full lg:w-auto flex-row justify-start items-center basis-1/3">
                <img
                  src={images.Profile}
                  className="w-[54.874px] h-[54.874px] ml-2 mb-2 rounded-full border-2 border-blue-500"
                  alt="profile"
                />
                <div className="ml-[30px] font-medium md:text-[20px]">
                  {studentDetail.name}
                  <br />
                  <div className="md:text-[20px] text-[#787878] font-light">
                    {studentDetail.roll}
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start lg:text-[20px] font-light mb-7 basis-1/3 mt-7 md:mt-auto">
                <div className="text-sm text-[#787878]">Fine Amount</div>
                <div className="text-[#538ff8] font-medium">
                  Rs {studentDetail.fineAmount}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-start items-start md:basis-1/3 basis-1 mt-7 xl:mt-0">
                <div className="flex flex-col gap-3 flex-1 w-full md:w-auto">
                  <Button
                    className={`${"bg-white text-[#538ff8] hover:text-[#538ff8] hover:bg-[#538ff81f]"} md:mb-0 lg:text-lg font-light  md:mr-4 py-5 px-5`}
                    style={{ border: "1px solid #538ff8" }}
                    onClick={detailHandler}
                  >
                    Fine Details
                  </Button>
                  <Button
                    className={`${"bg-white text-[#538ff8] hover:text-[#538ff8] hover:bg-[#538ff81f]"} md:mb-0 lg:text-lg font-light  md:mr-4 py-5 px-5`}
                    style={{ border: "1px solid #538ff8" }}
                    onClick={paymentProofHandler}
                  >
                    Payment Proof
                  </Button>
                </div>

                <Button
                  variant="ezDues"
                  className=" lg:text-lg rounded-md lg:py-6 py-5 my-5 md:my-0 w-full md:w-1/2"
                  onClick={approveHandler}
                >
                  <CheckCheck /> Approve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PaidFines;
