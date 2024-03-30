import { Link } from "react-router-dom";
import images from "@/constants/images";
import { LogOutIcon } from "lucide-react";

const DepartmentNavbar = ({ children }) => {
  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="mx-auto px-5 sm:px-10">
        <div className="flex justify-between h-16">
          {children}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                loading="lazy"
                src={images.logo}
                alt="logo"
                className="h-3 lg:h-4"
              />{" "}
              <p className="lg:text-xl font-extralight mx-2">| Department</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="block">
              <Link
                to={"/"}
                className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200 mx-0 md:mx-4"
              >
                <LogOutIcon
                  size={25}
                  className="inline font-extralight text-slate-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DepartmentNavbar;
