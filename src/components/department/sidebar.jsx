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
      <div className="flex flex-col items-start justify-center gap-4">
        <NavLink
          to={"/department/"}
          className={({ isActive }) =>
            isActive
              ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
              : "text-md p-3 w-full rounded-md flex items-center"
          }
          end={true}
        >
          <Home className="mx-2" size={20} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
              : "text-md p-3 w-full rounded-md flex items-center"
          }
          end={true}
          to={"/department/paid-fines/"}
        >
          <BadgeCheckIcon className="mx-2" size={20} />
          <p>Approve Paid Fines</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
              : "text-md p-3 w-full rounded-md flex items-center"
          }
          end={true}
          to={"/department/no-dues/"}
        >
          <FileCheck className="mx-2" size={20} />
          <p>No Dues Requests</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
              : "text-md p-3 w-full rounded-md flex items-center"
          }
          end={true}
          to={"/department/search/"}
        >
          <UserSearchIcon className="mx-2" size={20} />
          <p>Search Student</p>
        </NavLink>
      </div>
      <div className="flex flex-col gap-5 ml-5">
        <NavLink
          className="text-md w-full rounded-md text-[#538ff8]"
          to="/department"
        >
          <BellPlus className="inline mx-2" size={20} />
          Send Reminder
        </NavLink>
        <NavLink to="/department/new/">
          <Button variant="ezDues" className="text-lg py-6 px-7">
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
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div
        className="hidden md:flex fixed left-0 top-16 w-80 bg-white flex-col justify-between p-6"
        style={{ borderTop: "2px solid #E5E8EC", height: "calc(100vh - 4rem)" }}
      >
        <SidebarContent />
      </div>
    </>
  );
};

export default DepartmentSidebar;
