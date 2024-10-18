import React from 'react'

const Child = ({sendData}) => {

    const handleData=()=>{
        sendData("hello")
    }
  
    return (
      <button onClick={handleData}> Send</button>
    )
}

export default Child