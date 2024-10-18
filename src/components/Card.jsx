import React from 'react';
import './Card.css';

function Card({profiles}) {
  return (
    <>
    {profiles.map((pro,ind)=>(
        <div className='card' key={ind}>
        <img src={pro.image} alt='profile pic' />
        <h1>{pro.name}</h1>
        <p>{pro.role}</p>
      </div>
    ))}
    </>
  );
}

export default Card;
