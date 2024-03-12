
interface FilterType{
  type?: boolean,
  
}
const Filter = ({type}: FilterType) => {
  return (
    <div className='rounded-[5px] bg-white px-12 pt-4 pb-6'>
      <div className="flex items-center justify-start py-2 pay-title">
        <div className={`flex-none w-5 flex-and-center h-5 relative ${type ? "bg-primary-opacity" : "bg-secondary-opacity"} rounded-full mr-3`}>
              <div className={`w-2.5 h-2.5 ${type ? "bg-primary" : "bg-secondary"} rounded-full`}>
              </div>
        </div>
        <div className="font-bold">{type ? "Pick - Up" : "Drop - Off"} </div>
      </div>
      <div className='options flex text-sm basis[33.3%]'>
        <div className='px-3 border-r border-lightergrey ml-[-13px]'>
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
