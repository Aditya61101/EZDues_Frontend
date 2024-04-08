import React, { useState } from 'react';
import { Search } from 'lucide-react';

import images from "@/constants/images";
import { Button } from '@/components/ui/button';






const SearchStudent = () => {

  const [searchStudent , setSearchStudent] = useState('');

  const handleSearch= (event)=>
  {
    event.preventDefault();
    //searching in the DB - TODO

  }

  const handleChange= (event)=>
  {
    setSearchStudent(event.target.value );

  }
  const handleKeyPress= (event )=>
  {
    if(event.key== 'Enter')
    {
      handleSearch(event );
    }
  }
  const studentDetails =[{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
    pendingDues:false,
  },{
    name: 'Bibhuti Jha',
    roll: '2301AI37',
    pendingDues:true,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues:false,
    department:'CSE',
    role:'BTech',
    batch:'2023-27',
  },

]
  
const detailHandler= (event)=>
{
  //using api to fetch and view the details of fines 
}
const addFineHandler = (event)=>
{
  //using api to add fines
}




  return (
    <>
       <div className="flex flex-col justify-start h-full">
        <div className="w-full h-1/5 flex flex-row justify-between py-4 flex-wrap">
      <div className='md:w-3/5 w-full flex flex-row justify-center'>
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
      
    </div>
    <div className="w-full h-4/5 flex-col flex-wrap">
            {studentDetails.map((studentDetail, index) => (
              <div key={index} className="w-full p-2 h-auto md:h-[107px] rounded-[20px] flex flex-row bg-[#fff] justify-between pt-5 flex-wrap" style={{ marginBottom: '0.5rem' }}>
                <div className="flex flex-row justify-start items-center basis-1/3">
                  <img src={images.Profile} className="w-[54.874px] h-[54.874px] ml-2 mb-2 rounded-full border-2 border-blue-500" alt="profile"/>
                  <div className="ml-[30px] font-medium md:text-[20px] text-[12px]">
                    {studentDetail.name}<br/>
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
                      className={`${
                        
                          "bg-[#f9f9f9] text-[#3d3d3d] hover:text-[#538ff8] hover:bg-[#538ff81f]"
                      }  w-auto md:w-1/2 w-auto h-3/5 mb-2 md:mb-0 flex-1 shrink text-[12px] md:text-[20px] font-light mr-2 md:mr-4`}
                    

                      onClick= {detailHandler}
                    >
                      Details
                    </Button>

                    <Button
                      variant="ezDues"
                      className=" lg:text-lg w-auto md:w-1/2 h-3/5 rounded-md lg:py-6"
                      onClick={addFineHandler}
                    >
                      + Add Fine
                    </Button>
                </div>
              </div>
            ))}
</div>

      </div>


    </>
  );
};

export default SearchStudent;
