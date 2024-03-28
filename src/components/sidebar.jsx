import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, UserCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { images } from "@/constants";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="py-16 flex flex-col items-start justify-center gap-5">
          <Link className="text-2xl my-5" to={"/"}>
            <Home className="inline mx-5" /> Home
          </Link>
          <Link className="text-2xl my-5" to={"/student/sign-in"}>
            <UserCircle2 className="inline mx-5" />
            Login
          </Link>
        </div>
        <div className="w-screen p-10 md:w-full md:p-16 flex flex-col md:flex-row items-center md:justify-evenly md:items-start rounded-t-[3rem] gap-y-6 md:gap-y-0">
          <div
            className="flex flex-col justify-start items-center"
            style={{ position: "absolute", bottom: "2rem", left: "2rem" }}
          >
            <h1 className="w-full text-black text-3xl font-medium">EZDues</h1>
            <h2 className="w-full text-gray-300 text-xl">Cassiopeia</h2>
            <div className="flex gap-3 justify-start items-center">
              <img
                loading="lazy"
                src={images.IITPatnaLogo}
                alt="IIT Patna"
                className="h-14 mt-7"
              />
              <img
                loading="lazy"
                src={images.STCLogo}
                alt="STC"
                className="h-14 mt-7"
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
