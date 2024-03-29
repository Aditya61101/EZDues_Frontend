import "./main.css";
import { Link } from "react-router-dom";
import images from "@/constants/images";
import { Button } from "@/components/ui/button";
import { Globe, Clock, CheckCheck } from "lucide-react";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import ScrollToTopButton from "@/components/ScrollToTop";

const HeroHeading = () => {
    return (
        <div className="heading">
            <div className="largest">No Dues</div>
            <div className="middle">With</div>
            <div className="largest bottom">
                No <span className=" text-[#538FF8]">Worries</span>
            </div>
        </div>
    );
};

const LandingPage = () => {
  return (
    <div className="bg-[#538ff8]">
      <div
        className="bg-cover bg-center rounded-b-[3rem] h-[99vh]"
        style={{
          backgroundImage: `url(${images.landingbg})`,
        }}
      >
        <nav>
          <div className="mx-auto px-5 sm:px-20">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    loading="lazy"
                    src={images.logo}
                    alt="logo"
                    className="h-4"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <Link
                    to="/"
                    className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200 mx-4"
                  >
                    Home
                  </Link>
                  <a
                    className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200 mx-4"
                    href="#about"
                  >
                    About
                  </a>
                  <Link
                    to={"/login"}
                    className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200"
                  >
                    Login
                  </Link>
                </div>
                <Sidebar />
              </div>
            </div>
          </div>
        </nav>

        <div className="main w-full flex justify-center items-center flex-col h-screen mt-[-64px]">
          <HeroHeading />
          <div className="subheading text-gray-600 mt-5">
            The Hassle-Free Path to your No Dues Certificate
          </div>
          <Link to={"/login"}>
            <Button
              variant="ezDues"
              className="px-7 lg:px-14 lg:py-7 lg:text-2xl my-12"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
      <section className="p-10 grid place-content-center h-max">
        <div className="flex justify-evenly items-center flex-wrap">
          <div className="card">
            <div className="icon">
              <Globe color="#142151" fill="#8ea5fa" size={60} />
            </div>
            Complete Online Process
          </div>
          <div className="card">
            <div className="icon">
              <Clock color="#142151" fill="#8ea5fa" size={60} />
            </div>
            Saves Your Time{" "}
          </div>
          <div className="card">
            <div className="icon">
              <CheckCheck color="#142151" size={60} />
            </div>
            Auto-Approving Feature
          </div>
        </div>
      </section>
      <section
        id="about"
        className="bg-white flex justify-evenly items-center flex-wrap bg-cover bg-center py-20 px-12"
        style={{
          backgroundImage: `url(${images.landingAbout})`,
        }}
      >
        <div className=" max-w-[500px]">
          <p className="text-[42px] font-medium mb-5 text-center md:text-left">
            About
          </p>
          <p className="md:text-lg leading-8 text-[#525971] text-justify">
            EZDues is a "No Dues Portal" which would serve as a centralized
            platform for students to clear any pending dues or obligations to
            the college before graduation. This eliminates the need for students
            to navigate through multiple departments or offices to obtain
            clearances, saving time and reducing administrative bottlenecks. The
            introduction of a "No Dues Portal" is a step towards digitizing the
            administrative processes within IIT Patna.
          </p>
        </div>
        <div>
          <img src={images.aboutIllustration} />
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
};

export default LandingPage;