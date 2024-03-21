import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import images from '../../constants/images';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img src={images.logo} alt="logo" className="h-6 px-5" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <a
                                    href="#"
                                    className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200 hover:underline"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200 hover:underline"
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

            <div className="container h-screen" style={{
                backgroundImage: `url(${images.landingbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <p>Welcome to EZDues</p>
                <div className=" flex gap-x-2" >
                    <Link to={"/student/sign-in"}>
                        <Button>Log in As Student</Button>
                    </Link>
                    <Link to={"/admin/sign-in"}>
                        <Button>Log in As Admin</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage