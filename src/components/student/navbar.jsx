import "./navbar.css";
import { Link } from "react-router-dom";
import { images } from "@/constants";

const StudentNavbar = () => {
  return (
    <nav className="flex justify-between sticky my-8">
      <Link to={"/"} className="flex-shrink-0 flex items-center">
        <img loading="lazy" src={images.logo} alt="logo" className="h-6" />
      </Link>
      <Link to={"/student/profile"} className="circle">
        <img
          loading="lazy"
          src={images.Profile}
          alt="User Logo"
        />
      </Link>
    </nav>
  );
};

export default StudentNavbar;
