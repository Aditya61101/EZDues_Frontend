import React, { useState } from "react";
import {Link} from "react-router-dom";
import images from "@/constants/images";
import { Button } from "@/components/ui/button";

const StudentField = () => {
    return (
        <div className="flex flex-col mt-6 space-y-6">
            <form method="post" action="#">
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]"> Roll number</label>
            <div className="flex items-center">
                <img src={images.userEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="text" name="username" />
            </div>
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]"> Password </label>
            <div className="flex items-center">
                <img src={images.passEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="password" name="password" />
            </div>
            <div className="flex md:justify-starflex flex-row flex-shrink justify-center items-center md:justify-start shrink-0 relativet justify center items-center  mt-10">
            <button
                    type="submit"
                    className="bg-[#538ff8] text-white px-4 py-2 w-full md:w-2/5 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Login
                </button>
             

            </div>
                </form>
        </div>
    );
};

const DeptField = () => {
    return (
        <div className="flex flex-col mt-6 space-y-6">
            <form action="#" method ="post">
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]">Department Name</label>
            <div className="flex items-center">
                <img src={images.depEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="text"  name="department-name" />
            </div>
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]">Username</label>
            <div className="flex items-center">
                <img src={images.userEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="text"  name="username" />
            </div>
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]">Password</label>
            <div className="flex items-center">
                <img src={images.passEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="password"  name="password" />
            </div>
            <div className="flex md:justify-start justify center items-center  mt-10">
            <button
                    type="submit"
                    className="bg-[#538ff8] text-white px-4 py-2 w-full md:w-2/5 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Login
                </button>
             

            </div>

            </form>
            
        </div>
    );
};

const AdminField = () => {
    return (
        <div className="flex flex-col mt-6 space-y-6">
            <form action="#" method="post">
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]">Username</label>
            <div className="flex items-center">
                <img src={images.userEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="text" name="username" />
            </div>
            <label className="mb-2 text-gray-1000 text-[12px] font-normal md:text-[18px]">Password</label>
            <div className="flex items-center">
                <img src={images.passEm} className="w-6 h-6 mr-2 mb-1" alt="Emblem" />
                <input className="border-b-2 border-gray-300 focus:border-blue-500 px-4 py-2 mb-2 focus:outline-none hover:border-blue-500 w-full" type="password" name="password" />
            </div>
            <div className="flex md:justify-start justify center items-center  mt-10">
            <button
                    type="submit"
                    className="bg-[#538ff8] text-white px-4 py-2 w-full md:w-2/5 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Login
                </button>
             

            </div>
               </form>
        </div>
    );
};





const LogIn = () => {

    const [student, setStudent]= useState(true);
    const [admin, setAdmin]= useState(false);
    const [dept, setDept]= useState(false);





    return (
        <div
        style={{ backgroundColor: '#E5E8EC' }}
      className="relative h-screen w-screen bg-gray-200">
         <div className="absolute top-10 md:left-20 left-5 right-5 md:right-10 bottom-10 bg-gray-200 ">
                <div className="flex flex-col h-full space-y-4 ">
                    <div className="w-full text-2xl flex justify-center items-center md:justify-start md:text-3xl font-medium">
                        EZDues
                    </div>

                    <div className="w-full flex h-full ">
                        <div className="w-full md:w-1/2 shrink relative ">
                       
                        <div className="w-1/1 md:w-4/5  flex-shrink-0 rounded-[23px] md:rounded-[73px] bg-white shadow-lg p-10 flex flex-col relative absolute">
                             <div className="w-full text-2xl md:text-4xl flex justify-center items-center md:justify-start font-semibold py-5 md:pt-10 pt-2 " style={{ color: '#538FF8' }}>
                                Login
                             </div>
                             <div className="flex flex-row flex-shrink justify-center items-center md:justify-start shrink-0 relative">
                                        <Button className="bg-[#f9f9f9] hover:bg-[#538ff81f] text-[#3d3d3d] hover:text-[#538ff8] w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light mr-2 md:mr-4"
                                                onClick={() => { setStudent(true); setAdmin(false); setDept(false); }}>Student</Button>
                                        <Button className="bg-[#f9f9f9] hover:bg-[#538ff81f] text-[#3d3d3d] hover:text-[#538ff8] w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light mr-2 md:mr-4"
                                                onClick={() => { setStudent(false); setAdmin(false); setDept(true); }}>Department</Button>
                                        <Button className="bg-[#f9f9f9] hover:bg-[#538ff81f] text-[#3d3d3d] hover:text-[#538ff8] w-full md:w-auto mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[18px] font-light"
                                                onClick={() => { setStudent(false); setAdmin(true); setDept(false); }}>Admin</Button>
                            </div>

                         {(student) ? <StudentField /> : (admin) ? <AdminField /> : (dept) ? <DeptField /> : <p>Doesn't look good</p>}

           

            
                        </div>
                        </div>

                        <div className=" w-1/2 flex justify-center items-center hidden md:block">
                        <div className="h-3/4 w-3/4 flex justify-center items-center ">
                          {(student)? (<img className="max-w-full max-h-full p-8" loading = "lazyy"src={images.studentLogin} alt="student login"></img>):
                          ((admin)? (<img className="max-w-full max-h-full p-8" src={images.adminLogin} loading = "lazyy" alt="admin login"></img> ):
                          (dept)?(<img className="max-w-full max-h-full p-8" src={images.deptLogin} loading = "lazyy" alt="department login"></img>):
                          <p>unavailable!</p>) 
                          }


                        </div>
                        </div>
                       
                        

                    </div>
                       
                    </div>
                </div>
            </div>
     
    
    )
};

export default LogIn;
