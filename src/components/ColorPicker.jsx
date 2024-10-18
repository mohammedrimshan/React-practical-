import React, { useState } from 'react'
import './Color.css'
function ColorPicker() {
    const [color,setColor]=useState("#ffffff");
    const handleColor=(event)=>{
        setColor(event.target.value)
    }

  return (
      <div className='color-picker'>
        <h1>Color Picker</h1>
        <div className='display' style={{backgroundColor:color}}>
            <p>Selected Color:{color}</p>
        </div>
        <label>Select a color:</label>
        <input type='color' value={color} onChange={handleColor}></input>
      </div>
  )
}

export default ColorPicker
