import React, { useState } from 'react';
import { Search } from 'lucide-react';
import images from "@/constants/images";
import { Button } from '@/components/ui/button';
import { NavLink } from "react-router-dom";

const AdminStudents = () => {
    const [searchStudent, setSearchStudent] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const studentDetails = [
        {
            name: 'Hemant Kumar',
            roll: '2301CS20',
            department: 'CSE',
            role: 'BTech',
            batch: '2023-27',
            pendingDues: false,
        },
        {
            name: 'Kushal Agarwal',
            roll: '2201MC22',
            department: 'MnC',
            role: 'BTech',
            batch: '2023-27',
            pendingDues: false,
        },
        {
            name: 'Bibhuti Jha ',
            roll: '2301CS11',
            department: 'CSE',
            role: 'BTech',
            batch: '2023-27',
            pendingDues: false,
        },
        {
            name: 'Himanshu',
            roll: '2201MC18',
            department: 'MnC',
            role: 'BTech',
            batch: '2023-27',
            pendingDues: false,
        },
    ];

    const handleSearch = (event) => {
        event.preventDefault();
        const results = studentDetails.filter(student =>
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.roll.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.department.toLowerCase().includes(searchStudent.toLowerCase())
        );
        setSearchResults(results);
    }

    const handleChange = (event) => {
        setSearchStudent(event.target.value);
        const searchTerm = event.target.value.toLowerCase();

        const results = studentDetails.filter(student =>
            student.name.toLowerCase().includes(searchTerm) ||
            student.roll.toLowerCase().includes(searchTerm) ||
            student.department.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    }

    const detailHandler = (event) => {
        // To-Do: Fetch and view the details of fines using API
    }

    const sortedStudentNames = searchResults.length === 0 ?
        studentDetails.map(student => student.name).sort() : searchResults.map(student => student.name);

    return (
        <>
            <div className="flex flex-col justify-start h-full">
                <div className="w-full flex flex-col md:flex-row justify-between items-center py-4">
                    <div className='w-full md:w-3/5 flex flex-row justify-center mb-4 md:mb-0'>
                        <form onSubmit={handleSearch} className='flex items-center relative w-full'>
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                className='rounded-[33px] p-3 pl-12 border border-gray-300 focus:outline-none focus:border-blue-500 w-full'
                                type="text"
                                placeholder="Name, Roll No, Branch, ..."
                                value={searchStudent}
                                onChange={handleChange}
                                onKeyDown={handleKeyPress}
                            />
                        </form>
                    </div>
                    <NavLink to="/admin/add-student" className="w-full md:w-auto mx-auto lg:mx-0">
                        <Button variant="ezDues" className="text-lg py-6 px-7">
                            + Register Students
                        </Button>
                    </NavLink>
                </div>
                <div className="w-full h-4/5 flex-col flex-wrap">
                    {sortedStudentNames.map((studentName, index) => {
                        const studentDetail = studentDetails.find(student => student.name === studentName);
                        return (
                            <div key={index} className="w-full p-2 h-auto md:h-[107px] rounded-[20px] flex flex-row bg-[#fff] justify-between pt-5 flex-wrap" style={{ marginBottom: '0.5rem' }}>
                                <div className="flex flex-row justify-start items-center basis-1/3">
                                    <img src={images.Profile} className="w-[54.874px] h-[54.874px] ml-2 mb-2 rounded-full border-2 border-blue-500" alt="profile" />
                                    <div className="ml-[30px] font-medium md:text-[20px] text-[12px]">
                                        {studentDetail.name}<br />
                                        <div className="md:text-[20px] text-[12px] font-light">{studentDetail.roll}</div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start items-center text-[12px] lg:text-[20px] font-light mb-7 basis-1/3">
                                    <div className="mr-4 md:mr-[27px]">{studentDetail.role}</div>
                                    <div className="mr-4 md:mr-[27px]">{studentDetail.department}</div>
                                    <div className='mr-4 md:mr-[27px]'>{studentDetail.batch}</div>
                                </div>
                                <div className="flex flex-row justify-center items-center md:basis-1/3 basis-1">
                                    <Button
                                        className={`${"bg-[#f9f9f9] text-[#3d3d3d] hover:text-[#538ff8] hover:bg-[#538ff81f]"
                                            }  w-auto md:w-1/2 w-auto h-3/5 mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[20px] font-light mr-2 md:mr-4`}
                                        onClick={detailHandler}
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default AdminStudents;
