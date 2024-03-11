import React, { useEffect, useState } from 'react'
import Cars from '../cars';

const Header = ({title}) =>{
    return(
        <div className="flex cars-header justify-between">
            <div className="p-4 title text-grey font-bold">
                {title}
            </div>
            <div className="p-4 cta">
                <a className='text-primary font-bold' href="">View All</a>
            </div>
      </div>
    )
}

const CarsRender = () => {
  const [CarsData, setCarData ] = useState<Array<any>>([])
  const [loading, setLoading] = useState<Boolean>(false)

  //fetch and store 
  useEffect(() =>{
    setLoading(true)
    fetch('./data/cars.json').then(
      response => response.json()
    ).then(
      (data) => {console.log(data); setCarData(data?.data); setLoading(false)}
    )
    .catch(err => console.log(err))
  }, [])
  const PopularCar = CarsData.slice(0,4);
  const RecommendCar = CarsData.slice(4,12);
  console.log(PopularCar);
  return (
    <div className='mt-6'>
      <Header title={'Popular Car'} />
      {loading ? "Loading" : (<Cars Cars={PopularCar}/>)}

      <Header title={'Recommendation Car'} />
      {loading ? "Loading" : (<Cars Cars={RecommendCar}/>)}

    </div>
  )
}

export default CarsRender;
