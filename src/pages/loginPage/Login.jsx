import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "@/constants/images";
import { Button } from "@/components/ui/button";
import { UserRound, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const StudentField = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const initializeSignIn = () => {
    navigate("/student");
    instance.loginRedirect();
  };
  return (
    <div className="flex flex-col mt-6 space-y-6">
      <form>
        <div className="flex md:justify-start justify center items-center mt-10">
          <Button
            onClick={initializeSignIn}
            variant="ezDues"
            className=" lg:text-lg w-full rounded-md lg:py-6"
          >
            Login with Outlook
          </Button>
        </div>
      </form>
    </div>
  );
};

const DeptField = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("pressed");
    navigate("/department");
  };
  return (
    <div className="flex flex-col mt-6 space-y-6">
      <form onSubmit={handleLogin}>
        <label className="text-gray-1000 text-[12px] font-normal md:text-[18px]">
          Department Name
        </label>
        <div className="flex items-end mb-5">
          <img src={images.depEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
          <input
            className="border-b-2 border-gray-300 focus:border-blue-500 px-4 focus:outline-none hover:border-blue-500 w-full"
            type="text"
            name="department-name"
          />
        </div>
        <label className="text-gray-1000 text-[12px] font-normal md:text-[18px]">
          Username
        </label>
        <div className="flex items-end mb-5">
          <UserRound color="#5c5c5c" size={30} />
          <input
            className="border-b-2 border-gray-300 focus:border-blue-500 px-4 focus:outline-none hover:border-blue-500 w-full"
            type="text"
            name="username"
          />
        </div>
        <label className="text-gray-1000 text-[12px] font-normal md:text-[18px]">
          Password
        </label>
        <div className="flex items-end mb-5">
          <Lock color="#5c5c5c" size={30} />
          <input
            className="border-b-2 border-gray-300 focus:border-blue-500 px-4 focus:outline-none hover:border-blue-500 w-full"
            type="password"
            name="password"
          />
        </div>
        <div className="flex md:justify-start justify center items-center mt-10">
          <Button
            variant="ezDues"
            className=" lg:text-lg w-full md:w-2/5 rounded-md lg:py-6"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

const AdminField = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("pressed");
    navigate("/admin");
  };
  return (
    <div className="mt-6">
      <form onSubmit={handleLogin}>
        <label className="text-gray-1000 text-[12px] font-normal md:text-[18px]">
          Username
        </label>
        <div className="flex items-end mb-5">
          <UserRound color="#5c5c5c" size={30} />
          <input
            className="border-b-2 border-gray-300 focus:border-blue-500 px-4 focus:outline-none hover:border-blue-500 w-full"
            type="text"
            name="username"
          />
        </div>
        <label className="text-gray-1000 text-[12px] font-normal md:text-[18px]">
          Password
        </label>
        <div className="flex items-end mb-2">
          <Lock color="#5c5c5c" size={30} />
          <input
            className="border-b-2 border-gray-300 focus:border-blue-500 px-4 focus:outline-none hover:border-blue-500 w-full"
            type="password"
            name="password"
          />
        </div>
        <div className="flex md:justify-start justify center items-center mt-10">
          <Button
            className="lg:text-lg w-full md:w-2/5 rounded-md lg:py-6"
            variant="ezDues"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  const [student, setStudent] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [dept, setDept] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-gray-200">
      <div className="absolute top-10 md:left-20 left-5 right-5 md:right-10 bottom-10 bg-gray-200 ">
        <div className="flex flex-col h-full space-y-8">
          <div className="w-full text-2xl flex justify-center items-center md:justify-start md:text-3xl font-medium">
            <Link to="/">EZDues</Link>
          </div>

          <div className="flex w-full h-full">
            {/* Login card */}
            <div className="w-full lg:w-1/2 shrink">
              <div className="xl:w-4/5 lg:w-[95%] md:w-4/5 flex-shrink-0 rounded-[23px] md:rounded-[33px] bg-white shadow-lg p-10 flex flex-col">
                <p className="w-full text-2xl md:text-4xl flex justify-center items-center md:justify-start font-semibold py-5 md:pt-10 pt-2 text-[#538ff8]">
                  Login
                </p>
                <div className="flex flex-row flex-shrink justify-center items-center md:justify-start relative">
                  <Button
                    className={`${
                      student
                        ? "text-[#538ff8] bg-[#538ff81f] hover:bg-[#538ff81f]"
                        : "bg-[#f9f9f9] text-[#3d3d3d] hover:text-[#538ff8] hover:bg-[#538ff81f]"
                    }  w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light mr-2 md:mr-4`}
                    onClick={() => {
                      setStudent(true);
                      setAdmin(false);
                      setDept(false);
                    }}
                  >
                    Student
                  </Button>
                  <Button
                    className={`${
                      dept
                        ? "text-[#538ff8] bg-[#538ff81f] hover:bg-[#538ff81f]"
                        : "bg-[#f9f9f9] text-[#3d3d3d] hover:text-[#538ff8] hover:bg-[#538ff81f]"
                    }  w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light mr-2 md:mr-4`}
                    onClick={() => {
                      setStudent(false);
                      setAdmin(false);
                      setDept(true);
                    }}
                  >
                    Department
                  </Button>
                  <Button
                    className={`${
                      admin
                        ? "text-[#538ff8] bg-[#538ff81f] hover:bg-[#538ff81f]"
                        : "bg-[#f9f9f9] text-[#3d3d3d] hover:text-[#538ff8] hover:bg-[#538ff81f]"
                    }  w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light mr-2 md:mr-4`}
                    onClick={() => {
                      setStudent(false);
                      setAdmin(true);
                      setDept(false);
                    }}
                  >
                    Admin
                  </Button>
                </div>

                {student ? (
                  <StudentField />
                ) : admin ? (
                  <AdminField />
                ) : (
                  <DeptField />
                )}
              </div>
            </div>
            {/* SVG */}
            <div className="w-1/2 hidden lg:block">
              <div className="relative h-3/4 w-3/4 flex justify-center items-center">
                <img
                  className={`${
                    student ? "opacity-100" : "opacity-0"
                  } absolute transition-opacity duration-1000 ease-in-out max-w-full max-h-full p-8`}
                  loading="lazy"
                  src={images.studentLogin}
                  alt="student"
                />
                <img
                  className={` ${
                    admin ? "opacity-100" : "opacity-0"
                  } absolute transition-opacity duration-1000 ease-in-out max-w-full max-h-full p-8`}
                  src={images.adminLogin}
                  loading="lazy"
                  alt="admin"
                />
                <img
                  className={` ${
                    dept ? "opacity-100" : "opacity-0"
                  } absolute transition-opacity duration-1000 ease-in-out max-w-full max-h-full p-8`}
                  src={images.deptLogin}
                  loading="lazy"
                  alt="department"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
/* vi: set et sw=2: */
