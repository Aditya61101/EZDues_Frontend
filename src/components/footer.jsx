import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { images } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#253d91] w-screen p-10 md:w-full md:p-16 flex flex-col md:flex-row items-center md:justify-evenly md:items-start rounded-t-[3rem] gap-y-6 md:gap-y-0">
        <div className="flex flex-col justify-start items-center">
          <h1 className="w-full text-white text-3xl font-medium">EZDues</h1>
          <h2 className="w-full text-gray-300 text-xl">Cassiopeia</h2>
          <div className="flex gap-3 justify-start items-center">
            <a href="https://iitp.ac.in/" target="_blank">
              <img loading="lazy" src={images.IITPatna} alt="IIT Patna" className="h-14 mt-7"/>
            </a>
            <a href="https://stc.iitp.ac.in/" target="_blank">
              <img loading="lazy" src={images.STC} alt="STC" className="h-14 mt-7" />
            </a>
          </div>
        </div>
        <div className="text-white flex flex-col justify-start items-start gap-y-2">
          <h3 className="text-lg underline font-semibold">Important Links</h3>
          <a
            className="text-slate-300  hover:underline"
            href={"https://iitp.ac.in/"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            IIT Patna Website
          </a>
          <a
            className="text-slate-300 hover:underline"
            href={"https://iitp.ac.in/gymkhana/"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            Gymkhana
          </a>
          <a
            className="text-slate-300 hover:underline"
            href={"https://stc.iitp.ac.in/"}
            referrerPolicy="no-referrer"
            target="_blank"
          >
            STC
          </a>
        </div>
        <div className="text-white flex flex-col justify-start items-start gap-y-2 md:gap-y-5">
          <Link to={"/login"}>
            <Button variant="ezDues" className="min-w-28 md:px-10 md:py-6 md:min-w-40 md:text-lg">
              Login
            </Button>
          </Link>
          <a href={"mailto:stc@iitp.ac.in"} target="_blank" rel="no-referrer">
            <Button className=" hover:bg-[#538ff8] hover:text-white min-w-28 md:px-10 md:py-6 md:min-w-40 md:text-lg text-[#538ff8] border border-[#538ff8] bg-transparent">
              Contact
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
/* vi: set et sw=2: */
