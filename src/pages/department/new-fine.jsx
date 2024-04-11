import React from 'react';
import { UserRound, BookUser, Mail, IndianRupee, Calendar, AlignJustify } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import images from "@/constants/images";

const NewFine = () => {
  const detailHandler = (event) => {
    //using api to fetch and view the details of fines 
  }

  return (
    <>
      <h1 className="text-3xl font-medium mb-8 text-blue-500">Add Fine</h1>
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
      <div className="flex items-center mb-8">
        <Mail className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
        <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Web-mail" />
      </div>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="flex items-center mb-4 md:mb-0 md:mr-8 w-full md:w-auto">
          <IndianRupee className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
          <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Amount" />
        </div>
        <div className="flex items-center w-full md:w-auto">
          <Calendar className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
          <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="date" placeholder="Due Date" />
        </div>
      </div>

      <div className="flex items-center mb-8">
        <AlignJustify className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
        <input className="border-b-2 border-black border-opacity-50 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Reason" />
      </div>
      <div className="flex flex-col items-center mb-8 ">
        <h1 className="font-md text-xl mb-4">Attach the proof</h1>
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
        <NavLink to="/department">
          <Button variant="ezDues" className="text-lg py-6 px-7 flex items-center gap-2">
            + Add
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default NewFine;
