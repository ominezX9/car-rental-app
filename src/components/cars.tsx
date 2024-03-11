import React, { useEffect, useState } from 'react'
import CarCards from './parts/car-cards';
// import CarData from './data/cars.json';


const Cars = ({Cars}) => {


  console.log(Cars)
  return (
    <div className='flex flex-row flex-wrap items-between justify-between'> 
      { Cars.map( car => (
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
