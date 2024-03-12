import Search from '../assets/icons/search-normal.svg';
import Filter from '../assets/icons/filter.svg';
import Heart from '../assets/icons/heart.svg';
import Bell from "../assets/icons/notification.svg";
import Cog from '../assets/icons/setting-2.svg';


const NavBar = () => {
  return (
    <div className='flex items-center  justify-between nav-header px-10 py-5 bg-white border-b-2 border-[#C3D4E955]'>
        <div className="flex items-center justify-between">
            <div className="title mr-[80px]">
                <h1 className="text-primary text-3xl font-bold">MORENT</h1>
            </div>

            
            <div className="flex flex-row items-center justify-center custom-search-bar search border border-lightgrey border flex rounded-full p-2">
                <div className="search-ico w-[30px] flex-and-center">
                    <img src={Search} width={"23px"} alt="" />
                </div>
                <input className="input outline-none text-sm px-3 w-[350px]" type="text" placeholder='Search something here...' />
                <div className="filter-ico w-[30px] flex-and-center">
                    <img src={Filter} width={"23px"} alt="" />
                </div>
            </div>
        </div>

        <div className="flex flex-row options">
            <div className="mr-2 favourites rounded-full border-1 flex-and-center w-10 h-10 border">
                <img src={Heart} alt="" width={"20px"} />
            </div>
            <div className="mr-2 notifications relative rounded-full border-1 flex-and-center w-10 h-10 border">
                <span className='absolute top-[1px] right-[0px] bleep bg-danger rounded-full w-2.5 h-2.5'></span>
                <img src={Bell} alt="" width={"20px"} />        
            </div>
            <div className="mr-2 settings rounded-full border-1 flex-and-center w-10 h-10 border">
                <img src={Cog} alt="" width={"20px"} />

            </div>
            <div className="profile rounded-full border-1 flex-and-center w-10 h-10 border">
                {/* <img src={Profile} alt="" />                 */}
            </div>
        </div>

    </div>
  )
}

export default NavBar
