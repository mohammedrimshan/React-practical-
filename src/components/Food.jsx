import React, { useState } from 'react'
import './Food.css'
function Food() {
    const [food,setFood]=useState([])

    const handleAdd=()=>{
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value="";
        setFood(f=>[...f,newFood])
    }

    const handleDel=(ind)=>{
        setFood(food.filter((_,i)=>i!==ind))
    }
  return (
    <>
      <h2>List of Fruits</h2>
      <ul>
        {food.map((val,ind)=>
        <li key={ind} onClick={()=>handleDel(ind)}>
            {val}
            </li>
        )}
      </ul>
      <input type='text'id='foodInput' placeholder='enter fruits'></input>
    <button onClick={handleAdd}>Add </button>
    </>
  )
}

export default Food
