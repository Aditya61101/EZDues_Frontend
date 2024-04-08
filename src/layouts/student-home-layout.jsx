import StudentNavbar from "@/components/student/navbar";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTop";

export const StudentHomeLayout = () => {
    return (
        <>
            {/* <StudentNavbar /> */}
            <ScrollToTopButton />
            <Outlet />
            <StudentNavbar/>
        <div className="home">
      <div className="overlap">
        <div className="group">
          <div className="text-wrapper">Filter</div>
          <Filter size={32} className="filer"/>
        </div>
      </div>
      <div className="heading">EZDues</div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div">Search...</div>
          <img className="search" alt="Search" src="search.svg" />
        </div>
      </div>
      <div className="card-deck">
      <StudentCard dept = "Department of CSxwnubxbdcfvdgfgfE" status ="Initiate Request"/>
      </div>
      
    </div>
        </>
    );
};
