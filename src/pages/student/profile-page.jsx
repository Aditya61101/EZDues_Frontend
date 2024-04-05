import { Link } from "react-router-dom";
import images from "@/constants/images";
import { LogOut } from "lucide-react";
import { CircleArrowRight } from 'lucide-react';

const StudentProfile = () => {
    return (
        <div
        className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-16xl text-black font-heading"
        >
            <div
                className="absolute top-[55px] left-[95px] text-2xl font-medium"
                id="headingText"
            >
                EZDues
            </div>

            <div
                className="absolute top-[55px] left-[1292px] text-xl leading-[149%] font-medium text-center inline-block w-20 cursor-pointer hover:bg-[#A7AABD] hover:bg-opacity-[0.12] rounded-[10px] px-2 py-2"
                id="headingText5"
            >
                <Link to="/">Home</Link>
            </div>
            <div
                className="absolute flex justify-center top-[207px] left-[95px] w-[493px] h-[539px] text-23xl text-[#6d718b]"
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
                className="absolute top-[215px] left-[666px] text-[42px] font-medium text-[#253d91]"
            >
                Fines
            </div>
            
            <div className="absolute flex-col top-[291px] left-[666px] w-[666px]">
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
    )
};

export default StudentProfile;