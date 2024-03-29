import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, UserCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { images } from "@/constants";
import { useState } from "react";

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
          <Link className="flex items-center text-[22px] " to={"/"}>
            <Home className="mx-5" />
            <p>Home</p>
          </Link>
          <Link className="text-[22px] my-4 flex items-center" to={"/login"}>
            <UserCircle2 className="mx-5" />
            <p>Login</p>
          </Link>
        </div>
        <SheetFooter>
          <div className="w-screen p-10 flex flex-col items-center gap-y-6">
            <div className="flex flex-col justify-start items-center absolute bottom-8 left-8">
              <h1 className="w-full text-black text-2xl font-medium">EZDues</h1>
              <h2 className="w-full text-gray-300 text-lg">Cassiopeia</h2>
              <div className="flex gap-3 justify-start items-center">
                <img
                  loading="lazy"
                  src={images.IITPatna}
                  alt="IIT Patna"
                  className="h-12 mt-7"
                />
                <img
                  loading="lazy"
                  src={images.STC}
                  alt="STC"
                  className="h-12 mt-7"
                />
              </div>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
