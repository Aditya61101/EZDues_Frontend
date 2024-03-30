import { Outlet } from "react-router-dom";
import DepartmentNavbar from "@/components/department/navbar";
import DepartmentSidebar from "@/components/department/sidebar";

export const DepartmentLayout = () => {
  return (
    <div className="h-screen w-screen bg-[#E5E8EC] overflow-hidden">
      <DepartmentNavbar>
        <DepartmentSidebar />
      </DepartmentNavbar>
      <div
        className="main md:absolute md:left-80 mt-16 p-10 overflow-y-auto w-full md:w-[calc(100vw-20rem)]"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {" "}
        <Outlet />
      </div>
    </div>
  );
};
