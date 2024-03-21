import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const StudentNavbar = () => {
    return (
        <Menubar>
            <div className="flex items-center">
                <Link to={"/"}>EZDues</Link>
                <MenubarMenu>
                    <Link to={"/student"}>
                        <MenubarTrigger>Home</MenubarTrigger>
                    </Link>
                    <Link to={"/student/profile"}>
                        <MenubarTrigger>Profile</MenubarTrigger>
                    </Link>
                    <Link to={"/student/sign-in"}>
                        <MenubarTrigger>Login</MenubarTrigger>
                    </Link>
                </MenubarMenu>
            </div>
        </Menubar>
    );
};

export default StudentNavbar;
