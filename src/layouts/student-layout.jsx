import StudentNavbar from "@/components/student/navbar";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTop";

export const StudentLayout = () => {
    return (
        <>
            {/* <StudentNavbar /> */}
            <ScrollToTopButton />
            <Outlet />
        </>
    );
};
