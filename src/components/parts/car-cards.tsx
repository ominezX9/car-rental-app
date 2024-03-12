import React from 'react'
import Like from '../../assets/icons/mini-car-icons/heart.svg';
import Unlike from '../../assets/icons/mini-car-icons/not-heart.svg';
import Shadow from '../../assets/images/shadow.png';
import CFC from '../../assets/icons/mini-car-icons/gas-station.svg';
import CType from '../../assets/icons/mini-car-icons/Car.svg';
import Capacity from '../../assets/icons/mini-car-icons/profile-2user.svg';

interface CarCardsProps{
    name : string, 
    brand : string, 
    image : string, 
    liked : boolean, 
    fuel_capacity : number, 
    car_type : string, 
    capactiy : number, 
    discount : string | null, 
    price : string
}

const CarCards = ({name, brand, image, liked, fuel_capacity, car_type, capactiy, discount, price} : CarCardsProps) => {
    const [toggle, setToggle] = React.useState(false)
    const handleToggle = () =>  { setToggle(!toggle) }
    return (
        <div className='p-5 pt-3 bg-white basis-[23%] rounded-[5px] mb-10'>
            <div className="title flex justify-between">
                <div className="specs">
                    <div className="carname text-lg font-bold">{name}</div>
                    <div className="brand text-grey text-sm">{brand}</div>
                </div>
                <div className="fav">
                    <button className="relative p-1 w-[20px]" onClick={handleToggle}>
                        <img className={'absolute w-full top-50% left-50% translate-x-[-50%] translate-y-[-50%]'} src={toggle || liked ? Like : Unlike} alt="add_to_fav"/>
                    </button>
                </div>
            </div>
            <div className="caritsself mt-6 mb-5 cursor-pointer">
                <div className="group relative flex-and-center display h-[120px]">
                    <img src={`./all_cars/${image}`} className="group-hover:w-[88%] transition-all ease-in-out" width={'80%'} alt={'car_image'} />
                    <img className='absolute left-[-1px] sm:bottom-[10px] bottom-[0px] group-hover:bottom-[-13px] right-[-5px] transition-all ease-in-out' width={'150%'} src={Shadow} alt="" />
                </div>
            </div>
            <div className="info flex justify-between">
                <div className="flex items-center fuelcapacity">
                    <span className='flex flex-row w-5'>
                        <img className="w-full" src={CFC} alt="" />
                    </span>
                    <span className='text-xs font-[500] text-grey ml-1'>{fuel_capacity}L</span>
                </div>
                <div className="flex items-center cartype">
                    <span className='flex flex-row w-5 '>
                        <img className="w-full" src={CType} alt="" />
                    </span>
                    <span className='text-xs font-[500] text-grey ml-1'>{car_type}</span>

                </div>
                <div className="flex items-center capactiy">
                    <span className='flex flex-row w-5 '>
                        <img className="w-full" src={Capacity} alt="" />
                    </span>
                    <span className='text-xs font-[500] text-grey ml-1'>{capactiy} People</span>
                </div>
            </div>

            <div className='pays mt-5 mb-1 flex justify-between items-center'>
                <div className="price">
                    <h1 className='font-[900] text-lg'>${price}.00/<span className='text-grey text-xs'> day</span></h1>
                    { discount === null ?  ("") : (<p className="strike font-bold text-xs text-grey line-through">${discount}.00</p>)}
                </div>
                <button className='bg-primary text-white py-2 px-[14px] rounded-[5px] text-sm font-bold basis-[1/2]'>
                    Rent Now
                </button>
            </div>
        </div>
    )
}

export default CarCards
