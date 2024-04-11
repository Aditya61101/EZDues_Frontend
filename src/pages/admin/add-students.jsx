import React from 'react';
import { UserRound, BookUser, Mail, UserRoundCog } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import images from "@/constants/images";
import { Upload } from 'lucide-react';

const CreateStudentAdmin = () => {
    const detailHandler = (event) => {
        //using api to fetch and view the details of fines 
    }
    return (
        <>
            <h1 className="text-3xl font-medium mb-8 text-blue-500">Add Student</h1>
            <div className="flex flex-col md:flex-row mb-8">
                <div className="flex items-center mb-4 md:mb-0 md:mr-8 w-full md:w-auto">
                    <UserRound className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                    <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Name" />
                </div>
                <div className="flex items-center w-full md:w-auto">
                    <BookUser className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                    <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Roll Number" />
                </div>
            </div>
            <div className="flex items-center mb-8 w-full md:w-3/5">
                <Mail className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Web-mail" />
            </div>
            <div className="flex items-center mb-8 w-full md:w-auto">
                <UserRoundCog className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <select className="border-none border-b-2 border-gray-300 px-3 py-2 focus:outline-none bg-transparent w-30">
                    <option selected value="student">Select</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="faculty">Faculty</option>
                </select>
            </div>
            <div className="flex flex-col items-center mb-8 w-full md:w-auto">
                <h1 className="font-md text-xl mb-4">Upload Image</h1>
                <div className="bg-gray-400 p-4 rounded-md flex items-center space-x-4">
                    <label htmlFor="upload" className="cursor-pointer">
                        <img src={images.DropBox} className="w-16 h-16" alt="Upload" />
                        <input type="file" id="upload" accept="image/*" className="hidden" />
                    </label>
                    <label htmlFor="upload" className="text-black font-md py-2 px-4 rounded cursor-pointer border border-gray-400">
                        Drop or Select File
                    </label>
                </div>
            </div>

            <div className="flex justify-end mb-8">
                <Button
                    className={`w-full md:w-auto w-249 h-74 px-12 py-3 text-14 md:text-14 font-md mr-2 md:mr-4 border border-solid border-[#005DFF] bg-white rounded-md flex items-center gap-2 hover:bg-[#f9f9f9] hover:text-[#538ff8] hover:border-[#538ff8]`}
                    onClick={detailHandler}
                >
                    + Add
                </Button>
            </div>

            <div className="hr-theme-slash-2 flex mb-8">
                <div className="hr-line w-full relative border-b-2 border-black"></div>
                <div className="hr-icon px-2 relative top-3 text-black-600">OR</div>
                <div className="hr-line w-full relative border-b-2 border-black"></div>
            </div>

            <div className="flex justify-center mb-8">
                <NavLink to="/admin/">
                    <Button variant="ezDues" className="text-lg py-6 px-7 flex items-center gap-2 w-full md:w-auto">
                        <Upload className='w-6 h-6' />
                        Bulk Upload
                    </Button>
                </NavLink>
            </div>
        </>
    );
};

export default CreateStudentAdmin;
