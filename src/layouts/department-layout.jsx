import { Outlet } from "react-router-dom";
import DepartmentNavbar from "@/components/department/navbar";
import DepartmentSidebar from "@/components/department/sidebar";

export const DepartmentLayout = () => {
  return (
    <div className="h-screen w-screen bg-[#E5E8EC]">
      <DepartmentNavbar>
        <DepartmentSidebar />
      </DepartmentNavbar>
      <div className="main md:absolute md:left-80 md:top-16 p-10 overflow-y-auto">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};
