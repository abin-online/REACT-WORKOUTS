import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      setMessage("CANNOT INCREMENT BEYOND 5");
    }
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      {message && <marquee className="msg">{message}</marquee>}
      <div className="counter-app">
        <h1>{count}</h1>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
      </div>
    </>
  );
}

export default CounterApp;
