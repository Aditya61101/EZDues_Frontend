import { Link } from "react-router-dom";
import images from "@/constants/images";
import { CircleArrowRight, LogOut } from "lucide-react";

const StudentProfile = () => {
  return (
    <>
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
          <div className="mb-5 rounded-full border-2 border-blue-200 w-fit">
            <img loading="lazy" src={images.Profile} alt="User Logo" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-black text-lg md:text-xl lg:text-3xl">
              Hemant Kumar
            </p>
            <p className="lg:text-[25px]">2301CS20</p>
            <p className="lg:text-xl">B.Tech CSE</p>
            <p className="text-[14px] text-[#253d91] my-3">
              hemant_2301CS20@iitp.ac.in
            </p>
            <Link to={"/"} className="flex justify-center">
              <LogOut /> <p className="ml-2">Logout</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-[426px]:mt-5 text-2xl lg:text-4xl font-medium text-[#253d91]">
            Fines
          </div>
          <div className="flex-col lg:w-[500px] lg:md:w-[666px]">
            <div className="rounded-2xl bg-[#f4f4f7] my-4 py-5 text-3xl">
              <div className="grid grid-cols-5 content-center">
                <div className=" col-span-4 mx-12 items-center">
                  <p>Problem 1</p>
                </div>
                <div className="flex items-center justify-self-center">
                  <CircleArrowRight size={40} />
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#f4f4f7] my-4 py-5 text-3xl">
              <div className="grid grid-cols-5 content-center">
                <div className="flex col-span-4 mx-12 items-center">
                  <p>Problem 2</p>
                </div>
                <div className="flex items-center justify-self-center">
                  <CircleArrowRight size={40} />
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-[#f4f4f7] my-4 py-5 text-3xl">
              <div className="grid grid-cols-5 content-center">
                <div className="flex col-span-4 mx-12 items-center">
                  <p>Problem 3</p>
                </div>
                <div className="flex items-center justify-self-center">
                  <CircleArrowRight size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
