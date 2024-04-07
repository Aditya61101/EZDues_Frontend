import React, { useState } from 'react';
import { Search } from 'lucide-react';
import images from "@/constants/images";
import { Switch } from "@/components/ui/switch"

const Clear = () => {
  return (
    <>
      <div className='md:text-[16px] text-[10px]'>All Clear</div>
    </>
  )
}
const Pending = () => {
  return (
    <>
      <div className='md:text-[16px] text-[10px] text-[#ff5c00]'>Dues Pending</div>
    </>
  )
}

const NoDuesRequests = () => {

  const [searchStudent, setSearchStudent] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    //searching in the DB - TODO

  }

  const handleChange = (event) => {
    setSearchStudent(event.target.value);

  }
  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      handleSearch(event);
    }
  }

  //todo- connect to database-
  const studentDetails = [{
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues: false,
  }, {
    name: 'Bibhuti Jha',
    roll: '2301AI37',
    pendingDues: true,
  }, {
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues: false,
  }, {
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues: false,
  }, {
    name: 'Hemant Kumar',
    roll: '2301CS20',
    pendingDues: true,
  },
  ]

  const handleAutoApprove = () => {
    //handle auto approve api 
  }

  return (
    <>
      <div className="flex flex-col justify-start h-full">
        <div className="w-full h-1/5 flex flex-row justify-between py-4 flex-wrap">
          <div className='w-full md:w-3/5 flex flex-row justify-center'>
            <form onSubmit={handleSearch} className='flex items-center relative w-full'>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className='rounded-[33px] p-3 pl-12 border border-gray-300 focus:outline-none focus:border-blue-500 w-full'
                type="text"
                placeholder="Search..."
                value={searchStudent}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />
            </form>
          </div>
          <div className='p-3 flex flex-row justify-evenly'>
            <div className='md:text-[20px] text-xs mr-10 md:pt-2 '>Auto Approve</div>

            <div onClick={handleAutoApprove}><Switch className="bg-[#538ff8]" onClick={handleAutoApprove}></Switch></div>

          </div>
        </div>
        <div className="w-full h-4/5 flex-col flex-wrap">
          {studentDetails.map((studentDetail, index) => (
            <div key={index} className="w-full p-2 h-auto md:h-[107px] rounded-[20px] flex flex-row bg-[#fff]  pt-5 flex-wrap" style={{ marginBottom: '0.5rem' }}>
              <div className="flex flex-row justify-start items-center md:basis-1/3 ">
                <img src={images.Profile} className="w-[54.874px] h-[54.874px] ml-2 mb-2 rounded-full border-2 border-blue-500" alt="profile" />
                <div className="ml-[30px] font-medium md:text-[20px] text-[12px]">
                  {studentDetail.name}<br />
                  <div className="md:text-[20px] text-[12px] font-light">{studentDetail.roll}</div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center md:basis-1/3 ">
                <div className="md:text-[16px] text-[10px] font-light mr-10">
                  Status
                </div>
                <div>
                  {studentDetail.pendingDues ? <Pending /> : <Clear />}
                </div>
              </div>
              <div className="flex flex-row justify-end items-center md:basis-1/3">
                <button
                  className="flex md:w-[264px] w-full md:h-[55px] h-2/3 px-[33px] py-[17px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[10px] bg-[#2bc9ac] text-white"
                  onClick={() => {/* add onclick functionality here */ }}
                >
                  ✓✓ Approve No Dues
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default NoDuesRequests;