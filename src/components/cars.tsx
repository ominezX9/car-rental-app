import React, { useEffect, useState } from 'react'
import CarCards from './parts/car-cards';
// import CarData from './data/cars.json';


const Cars = () => {
  const [CarsData, setCarData ] = useState([])

  //fetch and store 
  useEffect(() =>{
    fetch('./data/cars.json').then(
      response => response.json()
    ).then(
      data => setCarData(data)
    )
    .catch(err => console.log(err))
  }, [])


  return (
    <div className='flex flex-row justify-between'> 
      { CarsResponse.map( car => (
        
      ))}
      {/* <CarCards/>
      <CarCards/>
      <CarCards/> */}

    </div>
  )
}

export default Cars
