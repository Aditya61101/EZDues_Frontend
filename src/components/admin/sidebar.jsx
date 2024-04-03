import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Menu,
    GraduationCap,
    Landmark,
    ShieldPlus,
    CircleCheckBig,
    UserRoundCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SidebarContent = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-center gap-4">
                <NavLink
                    to={"/admin/"}
                    className={({ isActive }) =>
                        isActive
                            ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
                            : "text-md p-3 w-full rounded-md flex items-center"
                    }
                    end={true}
                >
                    <Landmark className="mx-2" size={20} />
                    <p>Departments</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-md p-3 bg-slate-200 w-full rounded-md flex items-center"
                            : "text-md p-3 w-full rounded-md flex items-center"
                    }
                    end={true}
                    to={"/admin/admin-students"}
                >
                    <GraduationCap className="mx-2" size={20} />
                    <p>Students</p>
                </NavLink>
            </div>
            <div className="flex flex-col gap-5 ml-5">
                <NavLink
                    className="text-md w-full rounded-md text-[#538ff8]"
                    to="/admin"
                >
                    <ShieldPlus className="inline mx-2" size={20} />
                    Create Admin
                </NavLink>
                <NavLink
                    className="text-md w-full rounded-md text-[#538ff8]"
                    to="/admin"
                >
                    <CircleCheckBig className="inline mx-2" size={20} />
                    Auto Approve
                </NavLink>
                <NavLink
                    className="text-md w-full rounded-md text-[#538ff8]"
                    to="/admin"
                >
                    <UserRoundCheck className="inline mx-2" size={20} />
                    Make Batch Eligible
                </NavLink>
            </div>
        </>
    );
};

const AdminSidebar = () => {
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

export default AdminSidebar;
