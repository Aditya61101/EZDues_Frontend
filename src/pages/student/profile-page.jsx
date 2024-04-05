import { Link } from "react-router-dom";
import images from "@/constants/images";
import { LogOut } from "lucide-react";
import { CircleArrowRight } from 'lucide-react';

const StudentProfile = () => {
    return (
        <div className="">
    
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
                    <div className="gap-x-3 flex items-center">
                    <Link
                        to="/"
                        className="text-black px-3 py-2 rounded-md text-md font-medium hover:bg-gray-200"
                    >
                        Home
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>

            <div
            className="flex flex-wrap max-[768px]:justify-center w-full relative bg-white h-[1024px] text-left text-16xl text-black font-heading"
            >
                

                <div
                    className="absolute flex justify-center top-[102px]  md:left-[95px] w-[493px] h-[539px] text-23xl text-[#6d718b]"
                >
                    <div className="relative w-[150px] h-[150px] mt-[85px] rounded-full border-2 border-blue-200 ">
                        
                    </div>

                    <div
                    className="absolute top-[0px] left-[0px] rounded-[45px] bg-[#A7AABD] bg-opacity-[0.12] w-[493px] h-[539px] overflow-hidden"
                    >
                        <div
                        className="relative flex justify-center top-[270px] font-medium text-black text-4xl"
                    >
                        Hemant Kumar
                    </div>
                    <div className="relative flex justify-center top-[270px]  text-[25px]">
                        2301CS20
                    </div>
                    <div className="relative flex justify-center top-[270px] text-xl">
                        B.Tech CSE
                    </div>
                    <div className="relative flex justify-center top-[270px] text-[14px] text-[#253d91] my-3">
                    hemant_2301CS20@iitp.ac.in
                    </div>
                    <div className = "relative flex justify-center top-[270px]  mt-[3rem]">
                        <LogOut/> <p className = "ml-2">Logout</p>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-[660px] md:top-[110px] md:left-[666px] text-[42px] font-medium text-[#253d91]"
                >
                    Fines
                </div>
                
                <div className="absolute flex-col top-[710px] md:top-[186px] md:left-[666px] w-[500px] md:w-[666px]">
                    <div className="rounded-3xl bg-[#f4f4f7] my-4 py-10 text-3xl">
                        <div className="grid grid-cols-5 content-center">
                            <div className="flex col-span-4 mx-12 items-center">
                                <div>
                                    Problem 1
                                </div>
                            </div>
                            <div className="flex items-center justify-self-center">
                                <CircleArrowRight style={{ width: '49px', height: '49px'}} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="rounded-3xl bg-[#f4f4f7] my-4 py-10 text-3xl">
                        <div className="grid grid-cols-5 content-center">
                            <div className="flex col-span-4 mx-12 items-center">
                                <div>
                                    Problem 2
                                </div>
                            </div>
                            <div className="flex items-center justify-self-center">
                                <CircleArrowRight style={{ width: '49px', height: '49px'}} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="rounded-3xl bg-[#f4f4f7] my-4 py-10 text-3xl">
                        <div className="grid grid-cols-5 content-center">
                            <div className="flex col-span-4 mx-12 items-center">
                                <div>
                                    Problem 3
                                </div>
                            </div>
                            <div className="flex items-center justify-self-center">
                                <CircleArrowRight style={{ width: '49px', height: '49px'}} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default StudentProfile;