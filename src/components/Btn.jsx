import React, { useState } from 'react';


const Btn = () => {
  const [val, setVal] = useState("");
  const [sb, setSb] = useState("");
  const [n, setN] = useState("hello");

  const clickHandler = () => {
    alert("clicked me");
    setN("how are you");
  }

  const inputHandle = (event) => {
    setVal(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSb(val);
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="heading">{n}</h1>
        <h3 className="sub-heading">{sb}</h3>
        <input
          className="input-field"
          type='text'
          onChange={inputHandle}
        />
        <button
          className="submit-button"
          onClick={clickHandler}
        >
          Click Me
        </button>
      </form>
    </>
  );
}

export default Btn;
