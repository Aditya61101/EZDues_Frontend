import React from 'react';
import { Landmark, UserRound, Lock } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AddDepartmentAdmin = () => {
    return (
        <>
            <h1 className="text-3xl font-medium mb-8 text-blue-500">Add Department</h1>
            <div className="flex items-center mb-8">
                <Landmark className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-none border-b-2 border-gray-300 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Department Name" />
            </div>
            <div className="flex items-center mb-8">
                <UserRound className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-none border-b-2 border-gray-300 px-3 py-2 focus:outline-none bg-transparent w-full" type="text" placeholder="Username" />
            </div>
            <div className="flex items-center mb-8">
                <Lock className="mr-2" size={30} style={{ strokeWidth: 1.7 }} />
                <input className="border-none border-b-2 border-gray-300 px-3 py-2 focus:outline-none bg-transparent w-full" type="password" placeholder="Password" />
            </div>
            <NavLink to="/admin/" className="mx-auto lg:mx-0">
                <Button variant="ezDues" className="text-lg py-6 px-7">
                    Add Department
                </Button>
            </NavLink>
        </>
    );
};

export default AddDepartmentAdmin;
