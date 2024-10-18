import React, { useState,createContext } from 'react'
import ComponentBs from './ComponentBs'

export const userContext=createContext();
function ComponentAs() {
    const [user,setUser]=useState("Rimshan");
  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <h2>{`Hello , ${user}`}</h2>
      <userContext.Provider value={user}>
      <ComponentBs />
      </userContext.Provider>
    </div>
  )
}

export default ComponentAs
