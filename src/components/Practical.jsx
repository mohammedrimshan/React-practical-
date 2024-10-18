import React, { useState } from 'react'

const Practical = () => {

    const [style,setStyle]=useState("red")

    const handleClick=()=>{
        setStyle("green")
    }


  return (
    <>
      <h1 style={{color:style}}>Hello</h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default Practical
