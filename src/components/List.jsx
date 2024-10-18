import React from 'react'

function List(props) {
  
    const item=props.items

    const listItems=item.map((fruit)=><li key={fruit.id}>{fruit.name}:&nbsp;{fruit.calories}</li>)

  return (
    <>
    <h4>{listItems}</h4>
    <h3></h3>
    </>
    
    );
}

export default List
