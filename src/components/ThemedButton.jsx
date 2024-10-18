
import React, { useRef } from 'react';

function ThemedButton() {
  const inputRef = useRef(null); // Create ref

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

export default ThemedButton;
