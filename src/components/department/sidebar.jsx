import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  FileCheck,
  BadgeCheckIcon,
  UserSearchIcon,
  BellPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { images } from "@/constants";

const SidebarContent = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-5">
        <NavLink
          to={"/department/"}
          className={({ isActive }) =>
            isActive
              ? "text-md p-5 bg-slate-200 w-full rounded-md"
              : "text-md p-5 w-full rounded-md"
          }
          end={true}
        >
          <Home className="inline mx-2" size={20} /> Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-5 bg-slate-200 w-full rounded-md"
              : "text-md p-5 w-full rounded-md"
          }
          end={true}
          to={"/department/paidfines/"}
        >
          <BadgeCheckIcon className="inline mx-2" size={20} /> Approve Paid
          Fines
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-5 bg-slate-200 w-full rounded-md"
              : "text-md p-5 w-full rounded-md"
          }
          end={true}
          to={"/department/nodues/"}
        >
          <FileCheck className="inline mx-2" size={20} /> No Dues Requests
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-5 bg-slate-200 w-full rounded-md"
              : "text-md p-5 w-full rounded-md"
          }
          end={true}
          to={"/department/search/"}
        >
          <UserSearchIcon className="inline mx-2" size={20} />
          Search Student
        </NavLink>
      </div>
      <div className="mb-5 flex flex-col gap-5 text-center">
        <NavLink
          className="text-md p-5 w-full rounded-md text-[#538ff8]"
          to={"/department/"}
        >
          <BellPlus className="inline mx-2" size={20} />
          Send Reminder
        </NavLink>
        <NavLink to="/department/new/">
          <Button className="bg-[#538ff8] text-lg py-7 px-10 hover:bg-blue-600">
            + New Fine
          </Button>
        </NavLink>
      </div>
    </>
  );
};

const DepartmentSidebar = () => {
  return (
    <>
      <Sheet className="bg-white">
        <SheetTrigger className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col justify-between pt-20"
        >
          <SidebarContent></SidebarContent>
        </SheetContent>
      </Sheet>
      <div
        className="hidden md:flex fixed left-0 top-16 w-80 bg-white flex-col justify-between p-6"
        style={{ borderTop: "2px solid #E5E8EC", height: "calc(100vh - 4rem)" }}
      >
        <SidebarContent></SidebarContent>
      </div>
    </>
  );
};

export default DepartmentSidebar;
