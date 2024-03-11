import React from 'react'
import Cars from '../cars';

const Header = () =>{
    return(
        <div className="flex cars-header justify-between">
            <div className="p-4 title text-grey font-bold">
                Popular Car
            </div>
            <div className="p-4 cta">
                <a className='text-primary font-bold' href="">View All</a>
            </div>
      </div>
    )
}

const CarsRender = () => {
  return (
    <div className='mt-6'>
      <Header />
      <Cars/>

    </div>
  )
}

export default CarsRender;
