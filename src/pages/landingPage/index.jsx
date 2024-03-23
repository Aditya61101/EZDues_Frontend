import { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { Button } from "@/components/ui/button";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faClock,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
// import { HeartIcon } from "lucide-react";

const HeroHeading = () => {
  return (
    <>
      <div className="heading">
        <div className="largest">No Dues</div>
        <div className="middle">With</div>
        <div className="largest bottom">
          No <span style={{ color: "#538FF8" }}>Worries</span>
        </div>
      </div>
    </>
  );
};

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ backgroundColor: "#538FF8" }}>
        <div
          className="hero w-screen mx-0"
          style={{
            borderBottomRightRadius: "3rem",
            borderBottomLeftRadius: "3rem",
            backgroundImage: `url(${images.landingbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "calc(100vh - 10px)",
          }}
        >
          <nav>
            <div className="mx-auto px-5 sm:px-20">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <img src={images.logo} alt="logo" className="h-4" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <a
                      href="#"
                      className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200"
                    >
                      Login
                    </a>
                  </div>
                  <div className="md:hidden">
                    <button
                      onClick={toggleMenu}
                      className="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Responsive menu */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    About
                  </a>
                </div>
              </div>
            )}
          </nav>
          {/* <div className="marquee-container relative">
                  {!marqueeClosed && (
                      <>
                          <marquee
                              id="marq"
                              behavior="scroll"
                              direction="left"
                              scrollamount="10"
                              className="bg-gray-50 text-gray-900 text-lg px-4 py-2 mt-4"
                          >
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, perspiciatis.
                              <Link to="#" className="text-blue-400 ml-2">Login Here</Link>
                          </marquee>
                          <button
                              onClick={closeMarquee}
                              className="absolute top-6 right-1 bg-gray-200 p-1 rounded-md hover:bg-gray-300 focus:outline-none"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          </button>
                      </>
                  )}
              </div> */}
          <div
            className="main w-full flex justify-center items-center flex-col"
            style={{ height: "calc(100vh - 64px)" }}
          >
            <HeroHeading></HeroHeading>
            <div className="subheading">
              The Hassle-Free Path to your No Dues Certificate
            </div>
            <Link to={"/student/sign-in"}>
              <Button
                className="px-7 sm:py-7 sm:px-12 sm:text-xl lg:px-15 lg:py-8 lg:text-3xl my-14"
                style={{ backgroundColor: "#538FF8" }}
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
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              Complete Online Process
            </div>
            <div className="card">
              <div className="icon">
                <div className="fa fa-globe">
                  <FontAwesomeIcon icon={faClock} />
                </div>
              </div>
              Saves Your Time{" "}
            </div>
            <div className="card">
              <div className="icon">
                <div className="fa fa-globe">
                  <FontAwesomeIcon icon={faCheckDouble} />
                </div>
              </div>
              Auto-Approving Feature
            </div>
          </div>
        </section>
        <section
          className="bg-white flex justify-evenly items-center flex-wrap"
          style={{
            backgroundImage: `url(${images.landingAboutBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "5em 3rem",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
            }}
          >
            <h1 className="text-4xl font-medium mb-10">About</h1>
            <p className="text-lg leading-8">
              {
                ' EZDues is a "No Dues Portal" which would serve as a centralised platform for students to clear any pending dues or obligations to the college before graduation. This eliminates the need for students to navigate through multiple departments or offices to obtain clearances, saving time and reducing administrative bottlenecks. The introduction of a "No Dues Portal" is a step towards digitising the administrative processes within IITP.'
              }
            </p>
          </div>
          <div>
            <img src={images.aboutIllustration}></img>
          </div>
        </section>
        <div style={{ backgroundColor: "white" }}>
          <div
            className="footer p-16 flex justify-evenly items-start flex-wrap"
            style={{
              backgroundColor: "#253D91",
              borderTopRightRadius: "3rem",
              borderTopLeftRadius: "3rem",
            }}
          >
            <div className="flex flex-col justify-start items-center">
              <h1 className="w-full text-white text-3xl font-medium">EZDues</h1>
              <h2 className="w-full text-gray-400 text-xl">Cassiopeia</h2>
              <div className="flex justify-start items-center">
                <img
                  src={images.IITPatnaLogo}
                  alt="IIT Patna"
                  className="h-14 mx-3 my-7"
                />
                <img
                  src={images.STCLogo}
                  alt="STC"
                  className="h-14 mx-3 my-7"
                />
              </div>
            </div>
            <div className="text-white flex flex-col justify-start items-start">
              <h3 className="text-lg underline font-semibold">
                Important Links
              </h3>
              <Link className="text-slate-400 my-2" to={"https://iitp.ac.in/"}>
                IIT patna Website
              </Link>
              <Link
                className="text-slate-400 my-2"
                to={"https://www.iitp.ac.in/gymkhana/"}
              >
                Gymkhana
              </Link>
              <Link
                className="text-slate-400 my-2"
                to={"https://stc.iitp.ac.in/"}
              >
                STC
              </Link>
            </div>
            <div className="text-white flex flex-col justify-start items-start gap-5">
              <Link to={"/student/sign-in"}>
                <Button
                  className="px-10 py-6 min-w-40 text-lg"
                  style={{ backgroundColor: "#538FF8" }}
                >
                  Login
                </Button>
              </Link>
              <Link to={"mailto:stc@iitp.ac.in"}>
                <Button
                  className="secondary px-10 py-6 min-w-40 text-lg"
                  style={{
                    backgroundColor: "transparent",
                    color: "#538FF8",
                    border: "1px solid #538FF8",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
