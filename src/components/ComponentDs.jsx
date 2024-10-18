import React ,{useContext} from 'react'
import { userContext } from './ComponentAs'
function ComponentDs() {
  const user = useContext(userContext)
  return (
    <div className='box'>
      <h1>ComponentD</h1>
      <h2>{`by ${user}`}</h2>
    </div>
  )
}

export default ComponentDs
