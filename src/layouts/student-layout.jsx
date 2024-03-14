import StudentNavbar from "@/components/student/navbar";
import { Outlet } from "react-router-dom";

export const StudentLayout = () => {
    return (
        <>
            <StudentNavbar/>
            <Outlet />
        </>
    );
};
