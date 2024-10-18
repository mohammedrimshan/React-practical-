import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Counter() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
 
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true); // Set loading to true
      setError(''); // Clear previous errors

      try {
        // Fetch user data from API
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setUser(response.data); // Set user data on success
      } catch (err) {
        setError('Error fetching user data.'); // Set error message
      } finally {
        setLoading(false); // Loading finished
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, [count]); // Run this effect when count changes

  // Functions to increment and decrement count
  const increment = () => {
    if (count < 10) setCount(count + 1); // Increase count if less than 10
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1); // Decrease count if more than 1
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      {loading && <p>Loading user information...</p>} {/* Show loading message */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
      {user && ( // If user data is available, show it
        <div>
          <h2>User Info</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default Counter;
