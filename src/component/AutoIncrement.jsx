import React, { useState, useEffect } from "react";

function AutoIncrementCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev+1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="counter-app">
      <h1>{count}</h1>
      <button onClick={()=>setCount(0)}>RESET</button>
    </div>
  );
}

export default AutoIncrementCounter;
