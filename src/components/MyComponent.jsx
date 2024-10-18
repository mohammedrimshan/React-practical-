import React, { useEffect, useRef } from 'react';

function MyComponent() {

    const inputRef = useRef(null); 

    useEffect(() => {
        console.log("Component rendered");
        console.log(inputRef); 
    });

    const addHandle = () => {
       inputRef.current.focus()
    }

    return (
        <>
            <button onClick={addHandle}>Add</button>
            <input ref={inputRef} placeholder="Input field" />
        </>
    );
}

export default MyComponent;
