import React, { useState } from 'react'

function Car() {
    const [car,setCar]=useState({year:2024,
                                make:"ford",
                                model:"Mustang"})

  const handleYear=(event)=>{
    setCar(c=>({...c,year:event.target.value}))
  } 
  const handleMake=(event)=>{
    setCar(c=>({...c,make:event.target.value}))
  } 
  const handleModel=(event)=>{
    setCar(c=>({...c,model:event.target.value}))
  } 

  return (
    <div>
      <h3>Your Favorite Car is {car.make} model {car.model} in {car.year}</h3>
      <input type='number' value={car.year} onChange={handleYear}></input><br></br>
      <input value={car.make} onChange={handleMake}></input><br></br>
      <input value={car.model} onChange={handleModel}></input>
    </div>
  )
}

export default Car
