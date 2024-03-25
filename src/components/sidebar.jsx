import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
            </SheetTrigger>
            <SheetContent>
            <div className="flex flex-col items-center justify-center gap-5">
                <Link to={"/"}>Home</Link>
                <Link to={"/student/sign-in"}>Login</Link>
            </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
