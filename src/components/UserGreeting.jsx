import React from 'react'

function UserGreeting(props) {
  return(props.isLoggedin?<h1>Hello,{props.username}</h1>:<h1>sorry</h1>);
}

export default UserGreeting
