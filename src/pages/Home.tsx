
import Ad from '../components/ad';
import CarOne from '../assets/images/cars_ads/Car1.svg';
import CarTwo from '../assets/images/cars_ads/Car2.svg';
import Rings from "../assets/images/cars_ads/BG_circle.svg";
import Arrow from '../assets/images/cars_ads/BG_arrow.svg';
import PickUpAndDropOff from '../components/PickUpAndDropOff';
import CarsRender from '../components/parts/cars-render';


const Home = () => {
  return (
    <div className='px-10 py-5'>
        <div className="sliders flex ad-block justify-between">
            <Ad 
              btn_type={'bg-primary'}
              ad_type={CarOne}
              ad_title={'The Best Platform for Car Rental'}
              ad_text={'Ease of doing a car rental safely and reliably. Of course at a low price.'}
              ad_bg={Rings} 
              bg_color={'bg-secondary'}   
              extra=' !w-[60%]'         
            />
            <Ad 
              btn_type={'bg-secondary'}
              ad_type={CarTwo}
              ad_title={'Easy way to rent a car at a low price'}
              ad_text={'Providing cheap car rental services and safe and comfortable facilities.'}
              ad_bg={Arrow} 
              bg_color={'bg-primary'}            
            />
        </div>
        <PickUpAndDropOff/>
        <CarsRender/>



    </div>
  )
}

export default Home
