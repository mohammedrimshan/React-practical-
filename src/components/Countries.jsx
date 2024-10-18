import React, { useState } from 'react'

function Countries() {
    const [countries] = useState([
        'India', 'Australia', 'United States', 'Canada', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'South Africa'
      ]);
    const [country,setContry]=useState("")
    const filtered=countries.filter(con=>con.toLowerCase().includes(country.toLowerCase()))
    const upcontries =(e)=>{
        setContry(e.target.value)
    }
  return (
    <div>
       <h2>Search Countries</h2>
       <input
        type="text"
        placeholder="Search for a country"
        value={country}
        onChange={upcontries} 
      />
      <ul>
        {filtered.map((con, index) => (
          <li key={index}>{con}</li>
        ))}
      </ul>
    </div>
  )
}

export default Countries
