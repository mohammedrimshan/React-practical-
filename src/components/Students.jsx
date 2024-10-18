import React from 'react'
import PropTypes from 'prop-types'
function Students(props) {
  return (
    <>
      <h1>Name:{props.name}</h1>
      <p>Class:{props.class}</p>
      <h4>Age:{props.age}</h4>
    </>
  )
}

Students.propTypes={
    name:PropTypes.string,
    class:PropTypes.string,
    age:PropTypes.number
}

Students.defaultProps={
    name:"Guest",
    class:"Primary",
    age:0,
}

export default Students
