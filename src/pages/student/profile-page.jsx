import { Link } from "react-router-dom";
import images from "@/constants/images";
import { CircleArrowRight, LogOut } from "lucide-react";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import axios from "axios";
import FineModal from "@/components/student/FineModal";

//TODO: extend this to more branches
const Branch = {
  cs: "CSE",
  ee: "EEE",
  mm: "MME",
  ce: "CEE",
  me: "ME",
  cb: "CBE",
};
const dummyFines = [
  {
    name: "Hostel Walls Fine",
    payment: "500",
    issued_on: "15-01-2024",
    issued_by: "Gymkhana",
    reason: "Student entered Gymkhana badminton court without wearing non marking shoes",
  },
  {
    name: "Chemistry Lab Breaking",
    payment: "700",
    issued_on: "18-01-2024",
    issued_by: "Academic",
    reason: "Student broke the test tube in the Chemistry lab",
  },
  {
    name: "Badminton Court Shoes Fine",
    payment: "1200",
    issued_on: "17-01-2024",
    issued_by: "Gymkhana",
    reason:
      "Student Entered Gymkhana Badminton Court without wearing non marking shoes",
  },
];
const StudentProfile = () => {
  const { accounts, instance } = useMsal();
  const [modalData, setModalData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const rollno = accounts[0]?.username.match(/(\d{4}[a-zA-Z]{2}\d{2})/)[0];
  const branch = rollno?.match(/[a-zA-Z]+/)[0];
  const getStudentFines = async () => {
    const accessTokenRequest = {
      account: accounts[0],
    };
    try {
      const res = await instance.acquireTokenSilent(accessTokenRequest);
      const resp = await axios.get("http://localhost:5000/student/fines", {
        headers: {
          "X-EZDues-IDToken": res?.idToken,
        },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentFines();
  }, []);
  return (
    <>
      {isOpen && (
        <FineModal isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      )}
      <nav>
        <div className="mx-auto px-5 sm:px-20">
          <div className="flex justify-between h-16">
            <Link to={"/"} className="flex-shrink-0 flex items-center">
              <img
                loading="lazy"
                src={images.logo}
                alt="logo"
                className="h-4"
              />
            </Link>
            <div className="flex items-center">
              <div className="gap-x-3 flex items-center">
                <Link
                  to="/student"
                  className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-wrap items-center lg:justify-center max-[768px]:justify-center w-screen bg-white text-black font-heading mt-10 gap-x-10">
        <div className="flex flex-col items-center rounded-[45px] px-10 py-7 lg:px-20 lg:py-14 text-[#6d718b] bg-[#f4f4f7]">
          <div className="mb-5 w-24 h-24 flex items-center justify-center rounded-full border-2 border-blue-200">
            <p className="text-5xl">
              {accounts[0]?.username[0]?.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-black text-lg md:text-xl lg:text-3xl">
              {accounts[0]?.name}
            </p>
            <p className="lg:text-[25px]">{rollno}</p>
            <p className="lg:text-xl">B.Tech {Branch[branch]}</p>
            <p className="text-[14px] text-[#253d91] my-3">
              {accounts[0]?.username}
            </p>
            <button
              onClick={() => instance.logoutRedirect()}
              className="flex justify-center"
            >
              <LogOut /> <p className="ml-2">Logout</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-[426px]:mt-5 text-2xl lg:text-4xl font-medium text-[#253d91]">
            Fines
          </div>
          <div className="flex-col lg:w-[500px] lg:md:w-[666px]">
            {dummyFines.map((fine, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#f4f4f7] my-4 py-5 text-3xl"
              >
                <div className="grid grid-cols-5 content-center">
                  <div className=" col-span-4 mx-12 items-center">
                    <p>{fine.name}</p>
                  </div>
                  <div className="flex items-center justify-self-center">
                    <CircleArrowRight
                      size={40}
                      className="cursor-pointer"
                      onClick={() => {
                        setIsOpen(true);
                        setModalData(fine);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
/* vi: set et sw=2: */
