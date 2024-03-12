
import CarCards from './parts/car-cards';
// import CarData from './data/cars.json';


const Cars = ({Cars} : any) => {


  console.log(Cars)
  return (
    <div className='flex flex-row flex-wrap items-between justify-between'> 
      { Cars.map( (car: { name: string; brand: string; image: string; liked: boolean; fuel_cap: number; type: string; capacity: number; discount: string | null; price: string; }) => (
        <CarCards 
          name={car?.name} 
          brand={car?.brand} 
          image={car?.image} 
          liked={car?.liked}
          fuel_capacity={car?.fuel_cap} 
          car_type={car?.type} 
          capactiy={car?.capacity}  
          discount={car?.discount}
          price={car?.price}
          />   

      ))}
      {/* <CarCards/>
      <CarCards/>
      <CarCards/> */}

    </div>
  )
}

export default Cars
