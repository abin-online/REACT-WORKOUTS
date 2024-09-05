import React, { useState, useEffect } from 'react';

function DelayedMessage() {
  const [message, setMessage] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=> {
            console.log("hhhhhhhhhhhhhhhhh");
            setMessage(message + 1)
        },1000)

        return ()=> clearInterval(timer)
      
    })
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default DelayedMessage;
