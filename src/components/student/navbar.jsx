import "./navbar.css";
import { Link } from "react-router-dom";
import { images } from "@/constants";
import { useMsal } from "@azure/msal-react";

const StudentNavbar = () => {
  const { accounts } = useMsal();
  return (
    <nav className="flex justify-between sticky my-8">
      <Link to={"/"} className="flex-shrink-0 flex items-center">
        <img loading="lazy" src={images.logo} alt="logo" className="h-6" />
      </Link>
      <Link
        to={"/student/profile"}
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-200"
      >
        <p className="text-3xl text-[#6d718b]">
          {accounts[0]?.username[0]?.toUpperCase()}
        </p>
      </Link>
    </nav>
  );
};

export default StudentNavbar;
