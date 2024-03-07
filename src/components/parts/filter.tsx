import React from 'react'


interface FilterType{
  type?: boolean,
  
}
const Filter = ({type}: FilterType) => {
  return (
    <div className='rounded-[5px] bg-white px-7 py-3'>
      <div className="flex items-center py-2 pay-title">
        <div className={`ping w-4 h-4 relative flex-and-center ${type ? "bg-primary-opacity" : "bg-secondary-opacity"} rounded-full mr-2`}>
            <div className={`flex-and-center w-2 h-2 ${type ? "bg-primary" : "bg-secondary"} rounded-full`}>
            </div>
        </div>
        <div className="font-bold">{type ? "Pick - Up" : "Drop - Off"} </div>
      </div>
      <div className='options flex text-sm basis[33.3%]'>
        <div className='px-3 border-r border-lightergrey'>
          <p className='font-bold'>Location</p>
          <select className='text-xs text-[#90A3BF] w-[130px] placeholder-shown:pl-[-5px] outline-none cursor-pointer pl-[-5px] pr-[10px]' name="" id="" aria-placeholder='Select your city'>
            <option className="" value="">Select your city</option>
          </select>
        </div>
        <div className='px-3 border-r border-lightergrey'>
          <p className='font-bold'>Date</p>
          <select className='text-xs text-[#90A3BF] w-[130px] placeholder-shown:pl-[-5px] outline-none cursor-pointer pl-[-5px] pr-[10px]' name="" id="" aria-placeholder='Select your city'>
            <option className="" value="">Select your date</option>
          </select>
        </div>
        <div className='px-3 '>
          <p className='font-bold'>Time</p>
          <select className='text-xs text-[#90A3BF] w-[130px] placeholder-shown:pl-[-5px] outline-none cursor-pointer pl-[-5px] pr-[10px]' name="" id="" aria-placeholder='Select your city'>
            <option className="" value="">Select your time</option>
          </select>
        </div>
        
      </div>


    </div>
  )
}

export default Filter
