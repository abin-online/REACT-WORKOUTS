import React, { useRef } from 'react';

const FocusInput = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;


// import React, { useState, useRef, useEffect } from 'react';

// const PreviousCount = () => {

//     const [count , setCount] = useState(0)

//     const PreviousCountRef = useRef()

//     const handleCount = ()=>{
//         setCount(((pre)=>setCount(pre+1)))
//     }

//     useEffect(()=>{
//         PreviousCountRef.current = count 
//     }, [count])

//   return (
//     <>  <h1>PreviousCount : {PreviousCountRef.current}</h1>
//         <h1>current count : {count}</h1>
//         <button onClick={()=>setCount(count+1)}>incrememt</button>
//     </>
//   );
// };

// export default PreviousCount;
