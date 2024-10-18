import React, { useState } from 'react';

function Validation() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleInput = (e) => {
    setName(e.target.value); // Update name state with input value
    setError(''); // Reset error message
  };

  // Handle form submission
  const handleForm = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the name
    if (name.trim() === '') {
      setError('Name is required');
    } else if (name.length < 3) {
      setError('Name must be at least 3 characters long');
    } else {
      alert('Form submitted successfully!'); // You can replace this with further actions, like API calls
      // Reset the form
      setName('');
      setError('');
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <h4>{name}</h4>
        <input type='text' value={name} onChange={handleInput} placeholder="Enter your name" />
        {/* Display error message */}
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default Validation;
