import Filter from './parts/filter';
import Swap from "../assets/icons/Swap.svg"

const PickUpAndDropOff = () => {
  return (
    <div className='mt-6 flex items-center w-full justify-between '>
      <Filter type={true}/>
      <div className='flex-none flex-and-center bg-primary w-[50px] h-[50px] rounded-[7px]'>
        <img src={Swap} alt="" width={"50%"}/>
      </div>
      <Filter/>

    </div>
  )
}

export default PickUpAndDropOff
